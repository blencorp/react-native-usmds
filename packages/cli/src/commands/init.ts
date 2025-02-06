import chalk from 'chalk';
import { Command } from 'commander';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import { execa } from 'execa';
import * as z from 'zod';
import { getPackageManager } from '../utils/get-package-manager';
import { handleError } from '../utils/handle-error';
import { logger } from '../utils/logger';
import * as templates from '../utils/templates';

const DEPENDENCIES = ['nativewind@^4.1.0', 'class-variance-authority', 'tailwind-merge', '@react-native-aria/utils', 'react-native-svg'];

const DEV_DEPENDENCIES = ['tailwindcss', '@types/react-native'];

const initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean()
});

export const init = new Command()
  .name('init')
  .description('Initialize your project with USMDS setup')
  .option('-y, --yes', 'Skip confirmation prompt', false)
  .option('-c, --cwd <cwd>', 'The working directory (defaults to current)', process.cwd())
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
  const spinner = ora(`Initializing project...`)?.start();

  // Create config files
  await fs.writeFile(path.join(cwd, 'tailwind.config.js'), templates.TAILWIND_CONFIG, 'utf8');

  await fs.writeFile(path.join(cwd, 'nativewind-env.d.ts'), templates.NATIVEWIND_ENV, 'utf8');

  await fs.writeFile(path.join(cwd, 'metro.config.js'), templates.METRO_CONFIG, 'utf8');

  await fs.writeFile(path.join(cwd, 'global.css'), templates.GLOBAL_STYLES, 'utf8');

  // Create lib directory and utils.ts
  const libDir = path.join(cwd, 'lib');
  await fs.mkdir(libDir, { recursive: true });
  await fs.writeFile(path.join(libDir, 'utils.ts'), templates.UTILS_TS, 'utf8');

  spinner.succeed();

  // Install dependencies
  const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
  const packageManager = await getPackageManager(cwd);
  const installCmd = packageManager === 'npm' ? 'install' : 'add';

  await execa(packageManager, [installCmd, ...DEPENDENCIES], { cwd });
  await execa(packageManager, [installCmd, ...DEV_DEPENDENCIES, packageManager === 'npm' ? '--save-dev' : '--dev'], { cwd });

  dependenciesSpinner?.succeed();
}
