import chalk from 'chalk';
import { Command } from 'commander';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import { execa } from 'execa';
import * as z from 'zod';
import { getPackageManager, getInstallCommand } from '../utils/get-package-manager';
import { handleError } from '../utils/handle-error';
import { logger } from '../utils/logger';
import * as templates from '../utils/templates';

const ESSENTIAL_DEPENDENCIES = [
  'class-variance-authority',
  'clsx',
  'nativewind@^4.1.23',
  'tailwindcss-animate',
  'tailwind-merge',
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

async function writeFileGracefully(filePath: string, content: string) {
  if (existsSync(filePath)) {
    const existingContent = await fs.readFile(filePath, 'utf8');

    if (filePath.endsWith('tailwind.config.js')) {
      await fs.writeFile(filePath, content, 'utf8');
      return;
    }
    // For other files, continue with the existing append logic
    const normalizedExisting = existingContent.replace(/\s+/g, '').replace(/\r\n/g, '\n');
    const normalizedContent = content.replace(/\s+/g, '').replace(/\r\n/g, '\n');

    if (!normalizedExisting.includes(normalizedContent)) {
      await fs.writeFile(filePath, `${existingContent}\n${content}`, 'utf8');
    }
  } else {
    await fs.writeFile(filePath, content, 'utf8');
  }
}

async function hasExistingCnFunction(filePath: string): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, 'utf8');

    // Remove comments and strings to avoid false positives
    const cleanContent = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\/\/.*/g, '') // Remove single-line comments
      .replace(/'.*?'/g, '') // Remove single-quote strings
      .replace(/".*?"/g, '') // Remove double-quote strings
      .replace(/`.*?`/g, ''); // Remove template literals

    // Look for function declaration or arrow function assignment
    const cnPatterns = [
      /function\s+cn\s*\(/, // function cn(
      /const\s+cn\s*=\s*function\s*\(/, // const cn = function(
      /const\s+cn\s*=\s*\([^)]*\)\s*=>/, // const cn = (...) =>
      /export\s+(?:const|function)\s+cn\s*[=\(]/ // export const/function cn
    ];

    return cnPatterns.some((pattern) => pattern.test(cleanContent));
  } catch {
    return false;
  }
}

export async function checkDependenciesExist(cwd: string): Promise<boolean> {
  try {
    const packageJsonPath = path.join(cwd, 'package.json');
    if (!existsSync(packageJsonPath)) {
      logger.warn('No package.json found');
      return false;
    }

    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
    const allDependencies = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {})
    };

    const missingDeps = ESSENTIAL_DEPENDENCIES.filter((pkg) => {
      const pkgName = pkg.split('@')[0] || pkg;
      const exists = allDependencies.hasOwnProperty(pkgName);
      return !exists;
    });

    return missingDeps.length === 0;
  } catch (error) {
    logger.error(`Error checking dependencies: ${error}`);
    return false;
  }
}

export async function runInit(cwd: string) {
  const spinner = ora(`Checking existing installation...`)?.start();

  try {
    // Check if already initialized
    const isInitialized = await checkDependenciesExist(cwd);

    if (isInitialized) {
      spinner?.stop();
      logger.warn('USMDS dependencies already installed. Skipping initialization.');
      return;
    }

    spinner.text = 'Initializing project...';

    // Only create tailwind config and lib utils
    await writeFileGracefully(path.join(cwd, 'tailwind.config.js'), templates.TAILWIND_CONFIG);

    // Check if lib directory exists
    const libDir = path.join(cwd, 'lib');
    const utilsPath = path.join(libDir, 'utils.ts');

    if (!existsSync(libDir)) {
      await fs.mkdir(libDir, { recursive: true });
      await fs.writeFile(utilsPath, templates.UTILS, 'utf8');
    } else {
      // If utils.ts exists, check if it already has cn function
      if (existsSync(utilsPath)) {
        const hasCn = await hasExistingCnFunction(utilsPath);
        if (!hasCn) {
          await fs.writeFile(utilsPath, `${await fs.readFile(utilsPath, 'utf8')}\n${templates.UTILS}`, 'utf8');
        }
      } else {
        await fs.writeFile(utilsPath, templates.UTILS, 'utf8');
      }
    }

    // Create components directory
    const componentsDir = path.join(cwd, 'components');
    await fs.mkdir(componentsDir, { recursive: true });

    spinner.succeed();

    // Install dependencies
    const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
    const packageManager = await getPackageManager(cwd);
    const { install, installDev, useExeca, isBun } = getInstallCommand(packageManager);

    try {
      if (isBun) {
        // Use Bun.spawn for Bun
        const installProc = Bun.spawn([packageManager, ...install, ...ESSENTIAL_DEPENDENCIES], {
          cwd,
          stdio: ['inherit', 'inherit', 'inherit']
        });
        await installProc.exited;

        const installDevProc = Bun.spawn([packageManager, ...installDev, ...DEV_DEPENDENCIES], {
          cwd,
          stdio: ['inherit', 'inherit', 'inherit']
        });
        await installDevProc.exited;
      } else if (useExeca) {
        // Use execa for other package managers
        await execa(packageManager, [...install, ...ESSENTIAL_DEPENDENCIES], { cwd });
        await execa(packageManager, [...installDev, ...DEV_DEPENDENCIES], { cwd });
      } else {
        // Fallback to Node.js spawn
        const { spawn } = require('child_process');
        // Install regular dependencies
        await new Promise((resolve, reject) => {
          const proc = spawn(packageManager, [...install, '--cwd', cwd, ...ESSENTIAL_DEPENDENCIES], {
            stdio: 'inherit'
          });
          proc.on('exit', (code: number) => (code === 0 ? resolve(null) : reject(new Error(`Process exited with code ${code}`))));
        });

        // Install dev dependencies
        await new Promise((resolve, reject) => {
          const proc = spawn(packageManager, [...installDev, '--cwd', cwd, ...DEV_DEPENDENCIES], {
            stdio: 'inherit'
          });
          proc.on('exit', (code: number) => (code === 0 ? resolve(null) : reject(new Error(`Process exited with code ${code}`))));
        });
      }
      dependenciesSpinner?.succeed();
    } catch (error) {
      dependenciesSpinner?.fail();
      throw error;
    }

    logger.info('\n');
    logger.info(chalk.yellow('Important: Manual Configuration Required'));
    logger.info('Please add the following files manually (see documentation):');
    logger.info('1. metro.config.js');
    logger.info('2. babel.config.js');
    logger.info('3. global.css');
    logger.info('4. nativewind-env.d.ts');
    logger.info('\nRefer to the documentation at: https://usmds.blencorp.com/docs/getting-started/initial-setup');
  } catch (error) {
    spinner?.fail();
    throw error;
  }
}
