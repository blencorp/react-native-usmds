/**
 * Auto-generate usa.json registry from component files
 *
 * This script:
 * 1. Scans all .tsx files in src/usa/components/ui/
 * 2. Analyzes imports to detect dependencies
 * 3. Generates registry entries with proper metadata
 * 4. Updates generated/usa.json
 */

import * as fs from 'fs';
import * as path from 'path';

const COMPONENTS_DIR = path.join(process.cwd(), 'src/usa/components/ui');
const REGISTRY_PATH = path.join(process.cwd(), 'generated/usa.json');
const REGISTRY_BASE_URL = 'https://storage.googleapis.com/usmds-registry/r/usa';
const REGISTRY_NAME = 'USMDS - U.S. Web Design System for React Native';
const REGISTRY_HOMEPAGE = 'https://usmds.blencorp.com/';
const REGISTRY_AUTHOR = '@blencorp';

interface RegistryItem {
  name: string;
  type: string;
  title: string;
  description?: string;
  author?: string;
  files: Array<{
    path: string;
    type: string;
  }>;
  registryDependencies?: string[];
  dependencies?: string[];
}

interface Registry {
  $schema?: string;
  name: string;
  homepage?: string;
  items: RegistryItem[];
}

// Map of @rn-primitives packages
const RN_PRIMITIVES = [
  'accordion', 'alert-dialog', 'aspect-ratio', 'avatar', 'checkbox',
  'collapsible', 'context-menu', 'dialog', 'dropdown-menu', 'hover-card',
  'label', 'menubar', 'popover', 'portal', 'progress', 'radio-group',
  'select', 'separator', 'slot', 'switch', 'tabs', 'toggle',
  'toggle-group', 'tooltip', 'types', 'hooks'
];

// Packages installed by init command (don't need to be listed)
const ESSENTIAL_DEPS = [
  'class-variance-authority',
  'clsx',
  'nativewind',
  'tailwindcss-animate',
  'tailwind-merge',
  'react-native-reanimated',
  'react-native-svg',
  'lucide-react-native',
  '@rn-primitives/types',
  '@rn-primitives/slot',
  '@rn-primitives/portal'
];

// Component descriptions (you can expand this)
const DESCRIPTIONS: Record<string, string> = {
  accordion: 'A vertically stacked set of interactive headings that each reveal a section of content.',
  alert: 'Displays a callout for user attention.',
  'alert-dialog': 'A modal dialog that interrupts the user with important content and expects a response.',
  'aspect-ratio': 'Displays content within a desired ratio.',
  avatar: 'An image element with a fallback for representing the user.',
  badge: 'Displays a badge or a component that looks like a badge.',
  banner: 'Identifies official U.S. government websites and apps.',
  button: 'Displays a button or a component that looks like a button.',
  buttongroup: 'Groups related buttons together.',
  card: 'Displays a card with header, content, and footer.',
  checkbox: 'A control that allows the user to toggle between checked and not checked.',
  checkboxtile: 'A checkbox displayed as a selectable tile.',
  collapsible: 'An interactive component which expands/collapses a panel.',
  'context-menu': 'Displays a menu located at the pointer, triggered by a right-click or long-press.',
  dialog: 'A window overlaid on either the primary window or another dialog window.',
  'dropdown-menu': 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
  'hover-card': 'For sighted users to preview content available behind a link.',
  icon: 'Displays an icon from lucide-react-native.',
  menubar: 'A visually persistent menu common in desktop applications.',
  pagination: 'Pagination with page navigation, next and previous links.',
  popover: 'Displays rich content in a portal, triggered by a button.',
  progress: 'Displays an indicator showing the completion progress of a task.',
  radiogroup: 'A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.',
  select: 'Displays a list of options for the user to pick from—triggered by a button.',
  separator: 'Visually or semantically separates content.',
  skeleton: 'Use to show a placeholder while content is loading.',
  snackbar: 'A brief message that appears temporarily.',
  stepindicator: 'Displays the steps in a multi-step process.',
  switch: 'A control that allows the user to toggle between checked and not checked.',
  tabs: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  text: 'A text component with theme variants.',
  textarea: 'Displays a form textarea or a component that looks like a textarea.',
  textinput: 'Displays a form input field or a component that looks like an input field.',
  toggle: 'A two-state button that can be either on or off.',
  'toggle-group': 'A set of two-state buttons that can be toggled on or off.',
  tooltip: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
};

function analyzeImports(content: string): {
  rnPrimitives: string[];
  otherDeps: string[];
  registryDeps: string[];
} {
  const rnPrimitives: string[] = [];
  const otherDeps: string[] = [];
  const registryDeps: string[] = [];

  // Find all import statements
  const importRegex = /import\s+(?:{[^}]+}|[^'"]+)\s+from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];

    // Check for @rn-primitives
    if (importPath.startsWith('@rn-primitives/')) {
      const pkg = importPath.replace('@rn-primitives/', '');
      if (!ESSENTIAL_DEPS.includes(`@rn-primitives/${pkg}`)) {
        rnPrimitives.push(`@rn-primitives/${pkg}`);
      }
    }
    // Check for react-native-reanimated (not in essentials for some components)
    else if (importPath === 'react-native-reanimated' && !ESSENTIAL_DEPS.includes('react-native-reanimated')) {
      // Skip - it's essential
    }
    // Check for react-native-screens
    else if (importPath === 'react-native-screens') {
      otherDeps.push('react-native-screens');
    }
    // Check for local component dependencies
    else if (importPath.startsWith('@/registry/usa/components/ui/')) {
      const componentName = importPath.replace('@/registry/usa/components/ui/', '').replace(/\.tsx?$/, '');
      registryDeps.push(`${REGISTRY_BASE_URL}/${componentName}.json`);
    }
  }

  return {
    rnPrimitives: [...new Set(rnPrimitives)],
    otherDeps: [...new Set(otherDeps)],
    registryDeps: [...new Set(registryDeps)]
  };
}

function titleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function generateRegistry() {
  console.log('🔍 Scanning components...');

  const files = fs.readdirSync(COMPONENTS_DIR)
    .filter(file => file.endsWith('.tsx'))
    .sort();

  const items: RegistryItem[] = [];

  for (const file of files) {
    const componentName = file.replace('.tsx', '');
    const filePath = path.join(COMPONENTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    console.log(`  Processing ${componentName}...`);

    // Analyze imports
    const { rnPrimitives, otherDeps, registryDeps } = analyzeImports(content);

    // Build registry item
    const item: RegistryItem = {
      name: componentName,
      type: 'registry:ui',
      title: titleCase(componentName),
      description: DESCRIPTIONS[componentName] || `${titleCase(componentName)} component.`,
      files: [
        {
          path: `./src/usa/components/ui/${file}`,
          type: 'registry:ui'
        }
      ],
      author: REGISTRY_AUTHOR
    };

    // Add registry dependencies
    if (registryDeps.length > 0) {
      item.registryDependencies = registryDeps;
    }

    // Add package dependencies
    const allDeps = [...rnPrimitives, ...otherDeps];
    if (allDeps.length > 0) {
      item.dependencies = allDeps;
    }

    items.push(item);
  }

  // Build final registry
  const registry: Registry = {
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: REGISTRY_NAME,
    homepage: REGISTRY_HOMEPAGE,
    items
  };

  // Write to file
  fs.mkdirSync(path.dirname(REGISTRY_PATH), { recursive: true });
  fs.writeFileSync(
    REGISTRY_PATH,
    JSON.stringify(registry, null, 2) + '\n',
    'utf-8'
  );

  console.log(`\n✅ Generated registry with ${items.length} components`);
  console.log(`📝 Written to ${REGISTRY_PATH}`);
}

// Run the script
generateRegistry().catch(console.error);
