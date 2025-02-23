import { Command } from 'commander';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import * as z from 'zod';
import { logger } from '../utils/logger';
import { ALL_COMPONENTS, COMPONENT_METADATA, getComponentTemplate } from '../utils/registry';

// Available components from our registry
const AVAILABLE_COMPONENTS = ALL_COMPONENTS.map((name) => name.toLowerCase());

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean(),
  path: z.string().optional()
});

export const add = new Command()
  .name('add')
  .description('Add USMDS components to your project')
  .argument('[components...]', 'Components to add')
  .option('-y, --yes', 'Skip confirmation prompt', false)
  .option('-o, --overwrite', 'Overwrite existing files', false)
  .option('-a, --all', 'Add all available components', false)
  .option('-c, --cwd <cwd>', 'Working directory (defaults to current)', process.cwd())
  .option('-p, --path <path>', 'Components directory (defaults to components)', 'components')
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

    // Determine which components to install
    let selectedComponents = options.all ? AVAILABLE_COMPONENTS : options.components;

    // If no components specified, show selection prompt
    if (!selectedComponents?.length && !options.all) {
      const response = await prompts([
        {
          type: 'multiselect',
          name: 'components',
          message: 'Select components to add:',
          choices: AVAILABLE_COMPONENTS.map((component) => ({
            title: component,
            value: component,
            description: `Add ${component} component to your project`
          }))
        }
      ]);

      selectedComponents = response.components;
    }

    if (!selectedComponents?.length) {
      logger.warn('No components selected');
      process.exit(0);
    }

    const spinner = ora('Installing components...').start();

    try {
      // Create components directory if it doesn't exist
      const componentDir = path.join(cwd, options.path || 'components');
      await fs.mkdir(componentDir, { recursive: true });

      for (const component of selectedComponents) {
        spinner.text = `Adding ${component}...`;

        const componentName = component.charAt(0).toUpperCase() + component.slice(1);
        const targetPath = path.join(componentDir, `${componentName}.tsx`);

        // Check if component already exists
        if (existsSync(targetPath) && !options.overwrite) {
          spinner.warn(`${component} already exists, skipping`);
          continue;
        }

        // Get component template and write file
        try {
          const template = await getComponentTemplate(component);
          await fs.writeFile(targetPath, template);

          // Log dependencies if any
          const metadata = COMPONENT_METADATA[componentName];
          if (metadata?.dependencies?.length) {
            spinner.info(`${componentName} requires: ${metadata.dependencies.join(', ')}`);
          }
        } catch (error) {
          spinner.warn(`Failed to add ${component}: ${error instanceof Error ? error.message : 'Unknown error'}`);
          continue;
        }
      }

      spinner.succeed('Components installed successfully!');

      // Log next steps
      logger.info('\nNext steps:');
      logger.info('1. Install the required dependencies (check above for component-specific dependencies)');
      logger.info('2. Import your components from your components directory');
      logger.info('3. Use them in your app!');
    } catch (error) {
      spinner.fail('Failed to install components');
      if (error instanceof Error) {
        logger.error(error.message);
      }
      process.exit(1);
    }
  });
