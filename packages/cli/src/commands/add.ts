import { Command } from 'commander';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import * as z from 'zod';
import { logger } from '../utils/logger';
import { COMPONENT_TEMPLATES, COMPONENT_METADATA } from '../utils/registry';

// Available components from our registry
const AVAILABLE_COMPONENTS = Object.keys(COMPONENT_METADATA).map((name) => name.toLowerCase());

const addOptionsSchema = z.object({
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  overwrite: z.boolean(),
  cwd: z.string(),
  all: z.boolean()
});

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
      for (const component of selectedComponents) {
        spinner.text = `Adding ${component}...`;

        const componentDir = path.join(cwd, 'components');
        await fs.mkdir(componentDir, { recursive: true });

        const targetPath = path.join(componentDir, `${component.charAt(0).toUpperCase() + component.slice(1)}.tsx`);

        // Check if component already exists
        if (existsSync(targetPath) && !options.overwrite) {
          spinner.warn(`${component} already exists, skipping`);
          continue;
        }

        // Get component template and write file
        const template = await getComponentTemplate(component);
        await fs.writeFile(targetPath, template);
      }

      spinner.succeed('Components installed successfully!');
    } catch (error) {
      spinner.fail('Failed to install components');
      logger.error(error);
      process.exit(1);
    }
  });

async function getComponentTemplate(name: string): Promise<string> {
  // Capitalize first letter to match registry keys
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const template = COMPONENT_TEMPLATES[componentName];

  if (!template) {
    throw new Error(`Template not found for component: ${componentName}`);
  }

  return template;
}
