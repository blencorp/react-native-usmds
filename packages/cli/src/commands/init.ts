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

    // Special handling for metro.config.js
    if (filePath.endsWith('metro.config.js')) {
      const hasNativeWind = await hasNativeWindConfig(filePath);
      if (!hasNativeWind) {
        // Check if there's already a withNativeWind wrapper
        if (existingContent.includes('withNativeWind')) {
          return; // Skip if withNativeWind is already present
        }

        // Parse the existing config structure
        const configMatch = existingContent.match(/const config = ([^;]+);/);
        if (configMatch) {
          // Add NativeWind import if it doesn't exist
          const importStatement = existingContent.includes('nativewind/metro') ? '' : "const { withNativeWind } = require('nativewind/metro');\n\n";

          // Create the updated content with single withNativeWind wrapper
          const updatedContent = `${importStatement}${existingContent.replace(
            /module\.exports = ([^;]+);/,
            "module.exports = withNativeWind($1, { input: './global.css' });"
          )}`;

          await fs.writeFile(filePath, updatedContent, 'utf8');
        } else {
          // If we can't parse the existing config, use our default template
          await fs.writeFile(filePath, content, 'utf8');
        }
      }
      return;
    }
    if (filePath.endsWith('tailwind.config.js')) {
      // Always replace tailwind config to ensure required configurations are present
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

async function hasNativeWindConfig(filePath: string): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, 'utf8');

    // Remove comments and strings to avoid false positives
    const cleanContent = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
      .replace(/\/\/.*/g, '') // Remove single-line comments
      .replace(/'.*?'/g, '') // Remove single-quote strings
      .replace(/".*?"/g, '') // Remove double-quote strings
      .replace(/`.*?`/g, ''); // Remove template literals

    // Check for withNativeWind configuration
    return cleanContent.includes('withNativeWind') && cleanContent.includes('nativewind/metro');
  } catch {
    return false;
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

    // Check metro.config.js
    const metroConfigPath = path.join(cwd, 'metro.config.js');
    if (existsSync(metroConfigPath)) {
      const hasNativeWind = await hasNativeWindConfig(metroConfigPath);
      if (!hasNativeWind) {
        // Only write if NativeWind config doesn't exist
        await writeFileGracefully(metroConfigPath, templates.METRO_CONFIG);
      }
    } else {
      await writeFileGracefully(metroConfigPath, templates.METRO_CONFIG);
    }

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
          // Only append if cn function doesn't exist
          await fs.writeFile(utilsPath, `${await fs.readFile(utilsPath, 'utf8')}\n${templates.UTILS}`, 'utf8');
        }
      } else {
        await fs.writeFile(utilsPath, templates.UTILS, 'utf8');
      }
    }

    // Create components directory and nativewind-remap.ts
    const componentsDir = path.join(cwd, 'components');
    await fs.mkdir(componentsDir, { recursive: true });

    spinner.succeed();

    // Install dependencies
    const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
    const packageManager = await getPackageManager(cwd);
    const { install, installDev } = getInstallCommand(packageManager);

    await execa(packageManager, [...install, ...DEPENDENCIES], { cwd });
    await execa(packageManager, [...installDev, ...DEV_DEPENDENCIES], { cwd });

    // Create a marker file after successful initialization
    const markerPath = path.join(cwd, '.usmds-initialized');
    await fs.writeFile(markerPath, new Date().toISOString());

    dependenciesSpinner?.succeed();
  } catch (error) {
    spinner?.fail();
    throw error;
  }
}
