import { Command } from 'commander';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import * as z from 'zod';
import { logger } from '../utils/logger';
import { COMPONENT_TEMPLATES, COMPONENT_METADATA, ICON_PATHS } from '../utils/registry';
import { execa } from 'execa';
import { getPackageManager } from '../utils/get-package-manager';
import { runInit } from './init';

const REQUIRED_DEPENDENCIES = [
  'class-variance-authority',
  'clsx',
  'nativewind@^4.1.23',
  'tailwindcss-animate',
  'tailwind-merge',
  'react-native-reanimated',
  'react-native-svg',
  '@rn-primitives/types',
  '@rn-primitives/slot',
  '@rn-primitives/portal',
  '@rn-primitives/checkbox',
  '@rn-primitives/radio-group'
];

// Available components from our registry
const AVAILABLE_COMPONENTS = Object.keys(COMPONENT_METADATA).map((name) => name.toLowerCase());

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean()
});

async function isProjectInitialized(cwd: string): Promise<boolean> {
  // First check for a marker file that indicates successful initialization
  const markerPath = path.join(cwd, '.usmds-initialized');

  // Check required files
  const requiredFiles = ['tailwind.config.js', 'nativewind-env.d.ts', 'babel.config.js', 'global.css', 'metro.config.js', 'lib/utils.ts'];

  const filesExist = requiredFiles.every((file) => existsSync(path.join(cwd, file)));

  return existsSync(markerPath) && filesExist;
}

export const add = new Command()
  .name('add')
  .description('Add USMDS components to your project')
  .argument('[components...]', 'Components to add')
  .option('-y, --yes', 'Skip confirmation prompt', false)
  .option('-o, --overwrite', 'Overwrite existing files', false)
  .option('-a, --all', 'Add all available components', false)
  .option('-c, --cwd <cwd>', 'Working directory (defaults to current)', process.cwd())
  .action(async (components, opts) => {
    const options = addOptionsSchema.parse({
      components,
      ...opts
    });

    const cwd = path.resolve(options.cwd);

    if (!existsSync(cwd)) {
      logger.error(`Directory ${cwd} does not exist`);
      process.exit(1);
    }

    // Single initialization check
    const initialized = await isProjectInitialized(cwd);
    if (!initialized) {
      logger.info(`Project not initialized. Running 'usmds init' first...`);
      try {
        await runInit(cwd);
        logger.success('Successfully initialized project');
      } catch (error) {
        logger.error('Failed to initialize project');
        logger.error(error as Error);
        process.exit(1);
      }
    }

    try {
      // Determine which components to install
      let selectedComponents = options.all ? AVAILABLE_COMPONENTS : options.components;

      // If no components specified, show selection prompt
      if (!selectedComponents?.length && !options.all) {
        const response = await prompts({
          type: 'multiselect',
          name: 'components',
          message: 'Select components to add:',
          choices: AVAILABLE_COMPONENTS.map((component) => ({
            title: component,
            value: component
          }))
        });

        selectedComponents = response.components;
      }

      if (!selectedComponents?.length) {
        logger.warn('No components selected');
        process.exit(0);
      }

      const spinner = ora('Installing components...').start();

      try {
        // Create the ui directory if it doesn't exist
        const uiDir = path.join(cwd, 'components', 'ui');
        if (!existsSync(uiDir)) {
          await fs.mkdir(uiDir, { recursive: true });
        }

        for (const component of selectedComponents) {
          spinner.text = `Adding ${component}...`;

          const componentName = component.charAt(0).toUpperCase() + component.slice(1);

          // Check if component exists in registry BEFORE creating directory
          if (!COMPONENT_TEMPLATES[componentName]) {
            spinner.fail(`Component "${component}" not found in registry`);
            continue;
          }

          // Update path to include ui directory
          const componentDir = path.join(uiDir, component.toLowerCase());
          const componentPath = path.join(componentDir, 'index.tsx');

          // Only create directory if component exists and isn't already installed
          if (existsSync(componentPath) && !options.overwrite) {
            spinner.warn(`${component} already exists, skipping`);
            continue;
          }

          // Create the component directory
          await fs.mkdir(componentDir, { recursive: true });

          // Get internal dependencies
          const internalDeps = COMPONENT_METADATA[componentName]?.internalDependencies || [];

          // Add internal dependencies to the installation queue
          for (const dep of internalDeps) {
            if (!selectedComponents.includes(dep.toLowerCase())) {
              selectedComponents.push(dep.toLowerCase());
            }
          }

          // Get component template and write file
          const template = await getComponentTemplate(component, cwd, { overwrite: options.overwrite });
          await fs.writeFile(componentPath, template, 'utf8');

          // Install external dependencies
          const componentDeps = COMPONENT_METADATA[componentName]?.dependencies || [];
          if (componentDeps.length > 0) {
            const packageManager = await getPackageManager(cwd);
            const packageCommand = packageManager === 'npm' ? 'install' : 'add';
            await execa(packageManager, [packageCommand, ...componentDeps], { cwd });
          }
        }

        // Only show success if at least one component was installed
        if (selectedComponents.some((component) => COMPONENT_TEMPLATES[component.charAt(0).toUpperCase() + component.slice(1)])) {
          spinner.succeed('Components installed successfully!');
        } else {
          spinner.fail('No valid components were installed');
        }
      } catch (error) {
        spinner.fail('Failed to install components');
        logger.error(error as Error);
        process.exit(1);
      }
    } catch (error) {
      logger.error('Failed to parse package.json');
      process.exit(1);
    }
  });

async function getComponentTemplate(name: string, cwd: string, options: { overwrite: boolean }): Promise<string> {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const template = COMPONENT_TEMPLATES[componentName];

  if (!template) {
    throw new Error(`Template not found for component: ${componentName}`);
  }

  // If it's the Icon component, ensure registry file exists
  if (componentName === 'Icon') {
    const utilsDir = path.join(cwd, 'utils');
    const registryPath = path.join(utilsDir, 'registry.ts');

    // Create utils directory if it doesn't exist
    if (!existsSync(utilsDir)) {
      await fs.mkdir(utilsDir, { recursive: true });
    }

    // Create registry file if it doesn't exist
    if (!existsSync(registryPath) || options.overwrite) {
      const registryContent = `export const ICON_PATHS = ${JSON.stringify(ICON_PATHS, null, 2)};`;
      await fs.writeFile(registryPath, registryContent, 'utf8');
    }
  }

  return template;
}
