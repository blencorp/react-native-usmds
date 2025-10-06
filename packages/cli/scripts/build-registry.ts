import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to packages/ui/src/usa/components/ui
const UI_SRC_PATH = path.join(__dirname, '../../ui/src/usa/components/ui');
const REGISTRY_OUTPUT_PATH = path.join(__dirname, '../src/utils/registry.ts');

interface ComponentInfo {
  name: string;
  code: string;
  internalDependencies: string[];
  externalDependencies: string[];
}

// Components list from packages/ui/src
const ALL_COMPONENTS = [
  'alert',
  'avatar',
  'badge',
  'banner',
  'biometricsignin',
  'button',
  'buttongroup',
  'card',
  'checkbox',
  'checkboxtile',
  'collapsible',
  'dialog',
  'icon',
  'link',
  'pagination',
  'progress',
  'radiobutton',
  'radiotile',
  'snackbar',
  'stepindicator',
  'tag',
  'text',
  'textarea',
  'textinput',
  'toggle',
];

/**
 * Transform relative imports to absolute imports for CLI
 * @param code - The component code
 * @returns Transformed code with absolute imports
 */
function transformImports(code: string): string {
  // Transform relative imports to absolute imports
  // Examples:
  // from '../text' -> from '@/components/ui/text'
  // from './index' -> (remove, since we're already in the component)
  // from '@/lib/utils' -> stays the same

  let transformed = code;

  // Transform relative component imports
  transformed = transformed.replace(
    /from ['"]\.\.\/([^'"]+)['"]/g,
    (match, componentPath) => {
      // Remove /index if present
      const cleanPath = componentPath.replace(/\/index$/, '');
      return `from '@/components/ui/${cleanPath}'`;
    }
  );

  // Remove local index imports (from './index' or from './')
  transformed = transformed.replace(/from ['"]\.\/?(?:index)?['"]/g, '');

  return transformed;
}

/**
 * Extract internal and external dependencies from component code
 * @param code - The component code
 * @returns Object with internalDependencies and externalDependencies arrays
 */
function extractDependencies(code: string): { internal: string[]; external: string[] } {
  const internalDeps: string[] = [];
  const externalDeps: string[] = [];

  // Remove comments to avoid matching imports in JSDoc examples
  const codeWithoutComments = code
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*/g, ''); // Remove line comments

  // Find all imports from @/components/ui/ (internal dependencies)
  const internalImportRegex = /^import\s+.*from\s+['"]@\/components\/ui\/([^'"]+)['"]/gm;
  let match;

  while ((match = internalImportRegex.exec(codeWithoutComments)) !== null) {
    const dep = match[1];
    if (!internalDeps.includes(dep)) {
      internalDeps.push(dep);
    }
  }

  // Find @rn-primitives/* packages (other packages like class-variance-authority, nativewind are installed during init)
  const externalImportRegex = /^import\s+.*from\s+['"](@rn-primitives\/[^'"]+)['"]/gm;

  while ((match = externalImportRegex.exec(codeWithoutComments)) !== null) {
    const pkg = match[1];
    if (!externalDeps.includes(pkg)) {
      externalDeps.push(pkg);
    }
  }

  return { internal: internalDeps, external: externalDeps };
}

/**
 * Read component code from packages/ui/src
 * @param componentName - Name of the component (lowercase folder name)
 * @returns Component info with name, code, and dependencies
 */
function readComponentCode(componentName: string): ComponentInfo | null {
  const componentPath = path.join(UI_SRC_PATH, componentName, 'index.tsx');

  if (!fs.existsSync(componentPath)) {
    console.warn(`⚠️  Component not found: ${componentName} at ${componentPath}`);
    return null;
  }

  const rawCode = fs.readFileSync(componentPath, 'utf-8');
  const transformedCode = transformImports(rawCode);
  const deps = extractDependencies(transformedCode);

  // Capitalize component name for registry
  const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  return {
    name: capitalizedName,
    code: transformedCode,
    internalDependencies: deps.internal,
    externalDependencies: deps.external,
  };
}

/**
 * Generate registry file content
 * @param components - Array of component info
 * @returns Registry file content as string
 */
function generateRegistryContent(components: ComponentInfo[]): string {
  const componentNames = components.map(c => `'${c.name}'`).join(',\n  ');

  const componentTemplates = components
    .map(c => {
      // Escape backticks and template literals in code
      const escapedCode = c.code.replace(/`/g, '\\`').replace(/\${/g, '\\${');
      return `  ${c.name}: \`${escapedCode}\``;
    })
    .join(',\n\n');

  const componentMetadata = components
    .map(c => {
      const parts = [`name: '${c.name}'`];

      if (c.externalDependencies.length > 0) {
        parts.push(`dependencies: [${c.externalDependencies.map(d => `'${d}'`).join(', ')}]`);
      }

      if (c.internalDependencies.length > 0) {
        parts.push(`internalDependencies: [${c.internalDependencies.map(d => `'${d}'`).join(', ')}]`);
      }

      return `  ${c.name}: {\n    ${parts.join(',\n    ')}\n  }`;
    })
    .join(',\n');

  return `// This file is auto-generated. Do not edit manually.
// Generated by: packages/cli/scripts/build-registry.ts
// Run 'pnpm build:registry' to regenerate

export const ALL_COMPONENTS = [
  ${componentNames}
];

interface ComponentMetadata {
  name: string;
  dependencies?: string[];
  internalDependencies?: string[];
}

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
${componentMetadata}
};

export const COMPONENT_TEMPLATES: Record<string, string> = {
${componentTemplates}
};
`;
}

/**
 * Main function to build the registry
 */
async function buildRegistry() {
  console.log('🔨 Building CLI registry from packages/ui/src...\n');

  const components: ComponentInfo[] = [];

  for (const componentName of ALL_COMPONENTS) {
    const componentInfo = readComponentCode(componentName);
    if (componentInfo) {
      components.push(componentInfo);
      console.log(`✅ Processed: ${componentInfo.name}`);
    }
  }

  console.log(`\n📦 Generating registry with ${components.length} components...`);

  const registryContent = generateRegistryContent(components);

  // Write to registry file
  fs.writeFileSync(REGISTRY_OUTPUT_PATH, registryContent, 'utf-8');

  console.log(`✨ Registry built successfully at: ${REGISTRY_OUTPUT_PATH}`);
  console.log(`   Total components: ${components.length}`);
}

// Run the build
buildRegistry().catch(error => {
  console.error('❌ Error building registry:', error);
  process.exit(1);
});
