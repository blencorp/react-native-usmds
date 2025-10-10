import { Command } from 'commander';
import { existsSync } from 'fs';
import path from 'path';
import prompts from 'prompts';
import * as z from 'zod';
import { logger } from '../utils/logger';
import { getPackageManager } from '../utils/get-package-manager';
import { checkDependenciesExist, runInit } from './init';
import { spawn } from 'child_process';

// Registry configuration
const REGISTRY_BASE_URL = 'https://storage.googleapis.com/usmds-registry/r/usa';

// Available components
const AVAILABLE_COMPONENTS = [
  'alert', 'avatar', 'badge', 'banner', 'biometricsignin',
  'button', 'buttongroup', 'card', 'checkbox', 'checkboxtile',
  'collapsible', 'dialog', 'icon', 'link', 'pagination',
  'progress', 'radiobutton', 'radiotile', 'snackbar',
  'stepindicator', 'tag', 'text', 'textarea', 'textinput', 'toggle'
];

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

    // Single initialization check
    const initialized = await checkDependenciesExist(cwd);
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

      // Build component URLs
      const componentUrls = selectedComponents.map((component) => {
        const lowerCaseComponent = component.toLowerCase();
        return lowerCaseComponent.startsWith('http')
          ? lowerCaseComponent
          : `${REGISTRY_BASE_URL}/${lowerCaseComponent}.json`;
      });

      // Build shadcn command options
      const shadcnOptions: string[] = [];
      if (options.overwrite) {
        shadcnOptions.push('--overwrite');
      }
      if (options.yes) {
        shadcnOptions.push('--yes');
      }

      // Get package manager and build command
      const packageManager = await getPackageManager(cwd);

      // Determine the binary runner (npx, pnpm dlx, yarn dlx, or bunx)
      const binaryRunner = packageManager === 'npm'
        ? ['npx']
        : packageManager === 'pnpm'
        ? ['pnpm', 'dlx']
        : packageManager === 'yarn'
        ? ['yarn', 'dlx']
        : ['bunx'];

      const commandArgs = [
        ...binaryRunner.slice(1),
        'shadcn@latest',
        'add',
        ...shadcnOptions,
        ...componentUrls
      ].filter((option) => option !== undefined && option !== '');

      logger.info('Installing components...');

      // Run shadcn add command
      await new Promise<void>((resolve, reject) => {
        const proc = spawn(binaryRunner[0], commandArgs, {
          cwd,
          stdio: 'inherit'
        });

        proc.on('exit', (code) => {
          if (code === 0) {
            logger.success('All components installed successfully!');
            resolve();
          } else {
            reject(new Error(`shadcn add exited with code ${code}`));
          }
        });

        proc.on('error', (error) => {
          reject(error);
        });
      });
    } catch (error) {
      logger.error('Failed to add components');
      logger.error(error as Error);
      process.exit(1);
    }
  });
