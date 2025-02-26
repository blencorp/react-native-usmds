import chalk from 'chalk';
import { Command } from 'commander';
import { existsSync, promises as fs, mkdir, writeFile } from 'fs';
import ora from 'ora';
import path from 'path';
import { execa } from 'execa';
import * as z from 'zod';
import { getPackageManager } from '../utils/get-package-manager';
import { handleError } from '../utils/handle-error';
import { logger } from '../utils/logger';
import * as templates from '../utils/templates';

const DEPENDENCIES = [
  'class-variance-authority',
  'clsx',
  'nativewind@^4.1.23',
  'tailwindcss-animate',
  'tailwind-merge',
  'lucide-react-native',
  'react-native-reanimated',
  'react-native-svg',
  '@rn-primitives/types',
  '@rn-primitives/slot',
  '@rn-primitives/portal'
];

const DEV_DEPENDENCIES = ['tailwindcss@^3.3.2'];

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean()
});

export const init = new Command()
  .name('init')
  .description('initialize your project and install dependencies')
  .option('-y, --yes', 'skip confirmation prompt.', false)
  .option('-c, --cwd <cwd>', 'the working directory. defaults to the current directory.', process.cwd())
  .action(async (opts) => {
    try {
      const options = initOptionsSchema.parse(opts);
      const cwd = path.resolve(options.cwd);

      await runInit(cwd);

      logger.info(`${chalk.green('Success!')}`);
    } catch (error) {
      handleError(error);
    }
  });

export async function runInit(cwd: string) {
  // First create all necessary files
  const spinner = ora(`Initializing project...`)?.start();

  try {
    // Create config files
    await fs.writeFile(path.join(cwd, 'tailwind.config.js'), templates.TAILWIND_CONFIG, 'utf8');
    await fs.writeFile(path.join(cwd, 'nativewind-env.d.ts'), templates.NATIVEWIND_ENV, 'utf8');
    await fs.writeFile(path.join(cwd, 'babel.config.js'), templates.BABEL_CONFIG, 'utf8');
    await fs.writeFile(path.join(cwd, 'global.css'), templates.GLOBAL_STYLES, 'utf8');
    await fs.writeFile(path.join(cwd, 'metro.config.js'), templates.METRO_CONFIG, 'utf8');

    // Create directories and utils
    const libDir = path.join(cwd, 'lib');
    if (!existsSync(libDir)) {
      await fs.mkdir(libDir, { recursive: true });
    }
    await fs.writeFile(path.join(libDir, 'utils.ts'), templates.UTILS, 'utf8');

    // Create components directory if it doesn't exist
    const componentsDir = path.join(cwd, 'components');
    await fs.mkdir(componentsDir, { recursive: true });

    // Create nativewind-remap.ts in components directory
    await fs.writeFile(
      path.join(componentsDir, 'nativewind-remap.ts'),
      templates.NATIVEWIND_REMAP,
      'utf8'
    );
    spinner.succeed();

    // Then install all dependencies at once
    const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
    const packageManager = await getPackageManager(cwd);
    const packageCommand = packageManager === 'npm' ? 'install' : 'add';

    // Install all dependencies in one command
    await execa(packageManager, [packageCommand, ...DEPENDENCIES], { cwd });

    // Install dev dependencies
    await execa(packageManager, [packageCommand, ...DEV_DEPENDENCIES, packageManager === 'npm' ? '--save-dev' : '--dev'], { cwd });

    dependenciesSpinner?.succeed();
  } catch (error) {
    spinner?.fail();
    throw error;
  }
}
