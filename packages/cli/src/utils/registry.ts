import { readdirSync } from 'fs';
import { promises as fs } from 'fs';
import { join } from 'path';

// Get all component directories from the UI package
const getUIComponents = () => {
  const uiSrcPath = join(__dirname, '../../../ui/src');
  return (
    readdirSync(uiSrcPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      // Filter out utility folders like 'lib' or 'utils'
      .filter((name) => !['lib', 'utils'].includes(name))
      // Convert to PascalCase
      .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
  );
};

export const ALL_COMPONENTS = getUIComponents();

interface ComponentMetadata {
  name: string;
  dependencies?: string[];
}

// Common dependencies that most components might need
const commonDependencies = {
  styling: ['class-variance-authority', 'tailwind-merge', 'clsx'],
  primitives: ['@rn-primitives/types', '@rn-primitives/slot']
};

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
  // Form Components
  Button: {
    name: 'Button',
    dependencies: [...commonDependencies.styling]
  },
  ButtonGroup: {
    name: 'ButtonGroup',
    dependencies: [...commonDependencies.styling]
  },
  Checkbox: {
    name: 'Checkbox',
    dependencies: ['@rn-primitives/checkbox', ...commonDependencies.styling]
  },
  CheckboxTile: {
    name: 'CheckboxTile',
    dependencies: ['@rn-primitives/checkbox', ...commonDependencies.styling]
  },
  RadioButton: {
    name: 'RadioButton',
    dependencies: ['@rn-primitives/radio-group', ...commonDependencies.styling]
  },
  RadioTile: {
    name: 'RadioTile',
    dependencies: ['@rn-primitives/radio-group', ...commonDependencies.styling]
  },
  TextInput: {
    name: 'TextInput',
    dependencies: [...commonDependencies.styling]
  },
  TextArea: {
    name: 'TextArea',
    dependencies: [...commonDependencies.styling]
  },
  Toggle: {
    name: 'Toggle',
    dependencies: ['@rn-primitives/toggle', ...commonDependencies.styling]
  },

  // Navigation & Links
  Link: {
    name: 'Link',
    dependencies: [...commonDependencies.styling]
  },
  Pagination: {
    name: 'Pagination',
    dependencies: [...commonDependencies.styling]
  },
  StepIndicator: {
    name: 'StepIndicator',
    dependencies: [...commonDependencies.styling]
  },

  // Feedback & Alerts
  Alert: {
    name: 'Alert',
    dependencies: [...commonDependencies.styling]
  },
  Snackbar: {
    name: 'Snackbar',
    dependencies: [...commonDependencies.styling]
  },

  // Content & Layout
  Banner: {
    name: 'Banner',
    dependencies: [...commonDependencies.styling]
  },
  Card: {
    name: 'Card',
    dependencies: [...commonDependencies.styling]
  },
  Tag: {
    name: 'Tag',
    dependencies: [...commonDependencies.styling]
  },
  Text: {
    name: 'Text',
    dependencies: [...commonDependencies.primitives, ...commonDependencies.styling]
  },

  // Icons & Media
  Icon: {
    name: 'Icon',
    dependencies: [...commonDependencies.styling]
  },

  // Authentication
  BiometricSignIn: {
    name: 'BiometricSignIn',
    dependencies: ['@rn-primitives/biometric', ...commonDependencies.styling]
  }
};

// For templates, we'll read directly from the UI package
export const getComponentTemplate = async (name: string): Promise<string> => {
  const componentPath = join(__dirname, '../../../ui/src', name.toLowerCase(), 'index.tsx');
  try {
    return await fs.readFile(componentPath, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to read component template: ${name}`);
  }
};
