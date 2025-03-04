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
  'react-native-reanimated',
  'react-native-svg',
  '@rn-primitives/types',
  '@rn-primitives/slot',
  '@rn-primitives/portal',
  '@rn-primitives/checkbox',
  '@rn-primitives/radio-group'
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

async function writeFileGracefully(filePath: string, content: string) {
  if (existsSync(filePath)) {
    const existingContent = await fs.readFile(filePath, 'utf8');
    if (!existingContent.includes(content)) {
      await fs.writeFile(filePath, `${existingContent}\n${content}`, 'utf8');
    }
  } else {
    await fs.writeFile(filePath, content, 'utf8');
  }
}

export async function runInit(cwd: string) {
  const spinner = ora(`Initializing project...`)?.start();

  try {
    // Create config files
    await writeFileGracefully(path.join(cwd, 'tailwind.config.js'), templates.TAILWIND_CONFIG);
    await writeFileGracefully(path.join(cwd, 'nativewind-env.d.ts'), templates.NATIVEWIND_ENV);
    await writeFileGracefully(path.join(cwd, 'babel.config.js'), templates.BABEL_CONFIG);
    await writeFileGracefully(path.join(cwd, 'global.css'), templates.GLOBAL_STYLES);
    await writeFileGracefully(path.join(cwd, 'metro.config.js'), templates.METRO_CONFIG);

    // Check if lib directory exists
    const libDir = path.join(cwd, 'lib');
    const hasLibDir = existsSync(libDir);

    // If lib doesn't exist, create it and add utils.ts
    if (!hasLibDir) {
      await fs.mkdir(libDir, { recursive: true });
      await fs.writeFile(path.join(libDir, 'utils.ts'), templates.UTILS, 'utf8');
    } else {
      // If lib exists, check for utils.ts
      const utilsPath = path.join(libDir, 'utils.ts');
      if (existsSync(utilsPath)) {
        const existingContent = await fs.readFile(utilsPath, 'utf8');
        if (!existingContent.includes(templates.UTILS)) {
          await fs.writeFile(utilsPath, `${existingContent}\n${templates.UTILS}`, 'utf8');
        }
      } else {
        await fs.writeFile(utilsPath, templates.UTILS, 'utf8');
      }
    }

    // Create components directory and nativewind-remap.ts
    const componentsDir = path.join(cwd, 'components');
    await fs.mkdir(componentsDir, { recursive: true });

    spinner.succeed();

    // Then install all dependencies at once
    const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
    const packageManager = await getPackageManager(cwd);
    const packageCommand = packageManager === 'npm' ? 'install' : 'add';

    await execa(packageManager, [packageCommand, ...DEPENDENCIES], { cwd });
    await execa(packageManager, [packageCommand, ...DEV_DEPENDENCIES, packageManager === 'npm' ? '--save-dev' : '--dev'], { cwd });

    // Create a marker file after successful initialization
    const markerPath = path.join(cwd, '.usmds-initialized');
    await fs.writeFile(markerPath, new Date().toISOString());

    dependenciesSpinner?.succeed();
  } catch (error) {
    spinner?.fail();
    throw error;
  }
}
