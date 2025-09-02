#!/usr/bin/env tsx

import fs from 'fs/promises';
import path from 'path';

interface ComponentInfo {
  name: string;
  componentPath: string;
  content: string;
  externalDependencies: string[];
  internalDependencies: string[];
}

const STORYBOOK_COMPONENTS_DIR = path.join(process.cwd(), 'apps/storybook/components');
const REGISTRY_FILE = path.join(process.cwd(), 'packages/cli/src/utils/registry.ts');

/**
 * Extract import dependencies from component content
 */
function extractDependencies(content: string): { external: string[], internal: string[] } {
  const external = new Set<string>();
  const internal = new Set<string>();
  const importRegex = /import.*?from\s+['"`]([^'"`]+)['"`]/g;
  
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    
    // Skip React Native core imports
    if (importPath === 'react' || importPath === 'react-native') {
      continue;
    }
    
    // Skip common utility/styling libraries that are assumed to be available
    if (importPath === 'class-variance-authority' || 
        importPath === 'nativewind' ||
        importPath.startsWith('@/lib/') || 
        importPath.startsWith('@/utils/')) {
      continue;
    }
    
    // Only @rn-primitives/* packages are external dependencies
    if (importPath.startsWith('@rn-primitives/')) {
      external.add(importPath);
      continue;
    }
    
    // Internal component imports (relative paths)
    if (importPath.startsWith('./') || importPath.startsWith('../')) {
      // Extract component name from path like '../Button/Button' or './Text'
      const componentName = importPath.split('/').pop() || importPath.replace('./', '');
      // Skip 'utils' as internal dependency
      if (componentName !== 'utils' && componentName !== 'iconPaths') {
        internal.add(componentName);
      }
      continue;
    }
    
    // @/components imports are internal (but skip utils)
    if (importPath.startsWith('@/components/')) {
      const componentName = importPath.split('/').pop() || '';
      if (componentName !== 'utils' && componentName !== 'iconPaths') {
        internal.add(componentName);
      }
      continue;
    }
    
    // Skip everything else (don't include other external packages)
  }
  
  return { 
    external: Array.from(external), 
    internal: Array.from(internal) 
  };
}

/**
 * Clean component content for registry - remove local imports and adjust for CLI usage
 */
function cleanComponentContent(content: string, componentName: string): string {
  let cleaned = content;
  
  // Replace local component imports with @/components/ui/ paths (lowercase)
  cleaned = cleaned.replace(/from ['"`]\.\.\/([^'"`]+)\/\1['"`]/g, (match, componentName) => {
    return `from '@/components/ui/${componentName.toLowerCase()}'`;
  });
  cleaned = cleaned.replace(/from ['"`]\.\/([^'"`]+)['"`]/g, (match, componentName) => {
    return `from '@/components/ui/${componentName.toLowerCase()}'`;
  });
  
  // Keep @/lib/utils as is
  // Keep other @/ imports as is
  
  // Ensure proper export format
  if (!cleaned.includes(`export { ${componentName}`)) {
    // Add export if not present
    const lines = cleaned.split('\n');
    const lastLine = lines[lines.length - 1];
    if (lastLine.trim() === '') {
      lines[lines.length - 1] = `\nexport { ${componentName} };`;
    } else {
      lines.push(`\nexport { ${componentName} };`);
    }
    cleaned = lines.join('\n');
  }
  
  return cleaned;
}

/**
 * Read and process all Storybook components
 */
async function getAllComponents(): Promise<ComponentInfo[]> {
  const entries = await fs.readdir(STORYBOOK_COMPONENTS_DIR, { withFileTypes: true });
  const componentDirs = entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
  const components: ComponentInfo[] = [];
  
  for (const dirName of componentDirs) {
    // Handle special case: TextArea folder should map to Textarea component
    const componentName = dirName === 'TextArea' ? 'Textarea' : dirName;
    const componentPath = path.join(STORYBOOK_COMPONENTS_DIR, dirName, `${dirName}.tsx`);
    
    try {
      const content = await fs.readFile(componentPath, 'utf-8');
      const cleanedContent = cleanComponentContent(content, dirName);
      const { external, internal } = extractDependencies(content);
      
      components.push({
        name: componentName,
        componentPath,
        content: cleanedContent,
        externalDependencies: external,
        internalDependencies: internal
      });
      
      console.log(`✓ Processed ${componentName}${componentName !== dirName ? ` (${dirName})` : ''}`);
    } catch (error) {
      console.warn(`⚠ Skipped ${dirName}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  
  return components;
}

/**
 * Read existing ICON_PATHS from current registry
 */
async function getExistingIconPaths(): Promise<string> {
  try {
    const currentRegistry = await fs.readFile(REGISTRY_FILE, 'utf-8');
    const iconPathsMatch = currentRegistry.match(/export const ICON_PATHS = \{[\s\S]*?\};/);
    return iconPathsMatch ? iconPathsMatch[0] : '';
  } catch {
    return ''; // If registry doesn't exist, return empty
  }
}

/**
 * Generate the updated registry content
 */
async function generateRegistryContent(components: ComponentInfo[]): Promise<string> {
  const allComponentsArray = components.map(c => `'${c.name}'`).join(',\n  ');
  
  // Generate component metadata
  const metadata = components.map(c => {
    const parts = [`name: '${c.name}'`];
    
    // Always include dependencies array for consistency
    parts.push(`dependencies: ${JSON.stringify(c.externalDependencies)}`);
    
    // Always include internalDependencies array for consistency
    parts.push(`internalDependencies: ${JSON.stringify(c.internalDependencies)}`);
    
    return `  ${c.name}: {\n    ${parts.join(',\n    ')}\n  }`;
  }).join(',\n');
  
  // Get existing ICON_PATHS
  const existingIconPaths = await getExistingIconPaths();
  
  // Generate component templates
  const templates = components.map(c => {
    const escapedContent = c.content
      .replace(/\\/g, '\\\\')
      .replace(/`/g, '\\`')
      .replace(/\${/g, '\\${');
    
    return `  ${c.name}: \`${escapedContent}\``;
  }).join(',\n');

  return `export const ALL_COMPONENTS = [
  ${allComponentsArray}
];

interface ComponentMetadata {
  name: string;
  dependencies?: string[];
  internalDependencies?: string[];
}

${existingIconPaths || '// ICON_PATHS will be preserved from existing registry'}

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
${metadata}
};

export const COMPONENT_TEMPLATES: Record<string, string> = {
${templates}
};

export async function getComponentTemplate(name: string): Promise<string> {
  const template = COMPONENT_TEMPLATES[name];
  if (!template) {
    throw new Error(\`Template not found for component: \${name}\`);
  }
  return template;
}
`;
}

/**
 * Main sync function
 */
async function syncRegistry(options: { dryRun?: boolean; outputFile?: string; singleComponent?: string } = {}) {
  const { dryRun = false, outputFile, singleComponent } = options;
  
  try {
    console.log(`🔄 Starting registry sync${dryRun ? ' (DRY RUN)' : ''}...`);
    
    // Check if Storybook components directory exists
    try {
      await fs.access(STORYBOOK_COMPONENTS_DIR);
    } catch {
      throw new Error(`Storybook components directory not found: ${STORYBOOK_COMPONENTS_DIR}`);
    }
    
    // Get all components
    let components = await getAllComponents();
    
    // Filter to single component if specified
    if (singleComponent) {
      components = components.filter(c => c.name === singleComponent);
      if (components.length === 0) {
        throw new Error(`Component '${singleComponent}' not found`);
      }
      console.log(`🎯 Testing with single component: ${singleComponent}`);
    }
    
    if (components.length === 0) {
      throw new Error('No components found to sync');
    }
    
    console.log(`\n📦 Found ${components.length} components to sync`);
    
    // Generate new registry content
    const newRegistryContent = await generateRegistryContent(components);
    
    const targetFile = outputFile || REGISTRY_FILE;
    
    if (dryRun) {
      console.log('\n📄 DRY RUN - Generated content preview:');
      console.log('='.repeat(50));
      console.log(newRegistryContent.substring(0, 1000) + '...');
      console.log('='.repeat(50));
      console.log(`\n📊 Would write ${newRegistryContent.length} characters to ${targetFile}`);
    } else {
      // Backup existing registry (only if we're updating the real registry)
      if (targetFile === REGISTRY_FILE) {
        const backupPath = `${REGISTRY_FILE}.backup.${Date.now()}`;
        try {
          await fs.copyFile(REGISTRY_FILE, backupPath);
          console.log(`💾 Backed up existing registry to ${path.basename(backupPath)}`);
        } catch (error) {
          console.warn('⚠ Could not create backup of existing registry');
        }
      }
      
      // Write new registry
      await fs.writeFile(targetFile, newRegistryContent, 'utf-8');
      
      console.log('✅ Registry sync completed successfully!');
      console.log(`📁 ${targetFile === REGISTRY_FILE ? 'Updated' : 'Created'}: ${targetFile}`);
    }
    
    // Show summary
    console.log('\n📋 Synced components:');
    components.forEach(c => {
      const extDeps = c.externalDependencies.length;
      const intDeps = c.internalDependencies.length;
      const depsInfo = [];
      if (extDeps > 0) depsInfo.push(`${extDeps} ext`);
      if (intDeps > 0) depsInfo.push(`${intDeps} int`);
      const depsSummary = depsInfo.length > 0 ? ` (${depsInfo.join(', ')})` : '';
      console.log(`   • ${c.name}${depsSummary}`);
    });
    
  } catch (error) {
    console.error('❌ Registry sync failed:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// CLI support when run directly
if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run') || args.includes('-d');
  const outputIndex = args.findIndex(arg => arg === '--output' || arg === '-o');
  const outputFile = outputIndex !== -1 ? args[outputIndex + 1] : undefined;
  const componentIndex = args.findIndex(arg => arg === '--component' || arg === '-c');
  const singleComponent = componentIndex !== -1 ? args[componentIndex + 1] : undefined;
  
  syncRegistry({ dryRun, outputFile, singleComponent });
}

export { syncRegistry };