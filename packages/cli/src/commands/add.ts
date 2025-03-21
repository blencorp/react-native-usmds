import { Command } from 'commander';
import { existsSync, promises as fs } from 'fs';
import ora from 'ora';
import path from 'path';
import prompts from 'prompts';
import * as z from 'zod';
import { logger } from '../utils/logger';
import { COMPONENT_TEMPLATES, COMPONENT_METADATA, ICON_PATHS } from '../utils/registry';
import { getPackageManager, getInstallCommand } from '../utils/get-package-manager';
import { checkDependenciesExist, runInit } from './init';
import { spawn } from 'child_process';

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

      const spinner = ora('Installing components...').start();

      try {
        // Create the ui directory if it doesn't exist
        const uiDir = path.join(cwd, 'components', 'ui');
        if (!existsSync(uiDir)) {
          await fs.mkdir(uiDir, { recursive: true });
        }

        let hasErrors = false;

        for (const component of selectedComponents) {
          spinner.text = `Adding ${component}...`;

          const componentName = component.charAt(0).toUpperCase() + component.slice(1);

          // Check if component exists in registry
          if (!COMPONENT_TEMPLATES[componentName]) {
            spinner.fail(`Component "${component}" not found in registry`);
            continue;
          }

          try {
            // Changed: Update path to be a directory with index.tsx
            const componentDir = path.join(uiDir, component.toLowerCase());
            const componentPath = path.join(componentDir, 'index.tsx');

            // Changed: Create component directory first
            if (!existsSync(componentDir)) {
              await fs.mkdir(componentDir, { recursive: true });
            } else if (!options.overwrite) {
              spinner.warn(`${component} already exists, skipping`);
              continue;
            }

            // Changed: Write template to index.tsx in component directory
            const template = await getComponentTemplate(component, cwd, { overwrite: options.overwrite });
            await fs.writeFile(componentPath, template, 'utf8');

            // Get internal dependencies
            const internalDeps = COMPONENT_METADATA[componentName]?.internalDependencies || [];

            // Add internal dependencies to the installation queue
            for (const dep of internalDeps) {
              if (!selectedComponents.includes(dep.toLowerCase())) {
                selectedComponents.push(dep.toLowerCase());
              }
            }

            // Install external dependencies
            const componentDeps = COMPONENT_METADATA[componentName]?.dependencies || [];
            if (componentDeps.length > 0) {
              const packageManager = await getPackageManager(cwd);
              const { install, isBun } = getInstallCommand(packageManager);

              try {
                // Filter out workspace: dependencies
                const filteredDeps = componentDeps.filter((dep) => !dep.startsWith('workspace:'));

                if (filteredDeps.length > 0) {
                  if (isBun) {
                    const proc = Bun.spawn([packageManager, ...install, ...filteredDeps], {
                      cwd,
                      stdio: ['pipe', 'pipe', 'pipe']
                    });
                    await proc.exited;
                  } else {
                    await new Promise<void>((resolve, reject) => {
                      const proc = spawn(packageManager, [...install, ...filteredDeps], {
                        cwd,
                        stdio: ['pipe', 'pipe', 'pipe']
                      });

                      proc.on('exit', (code) => {
                        if (code === 0) resolve();
                        else reject(new Error(`Process exited with code ${code}`));
                      });
                    });
                  }
                }
              } catch (error) {
                hasErrors = true;
                spinner.warn(`Warning: Some dependencies for ${componentName} could not be installed`);
                logger.error(error as Error);
                // Continue with next component instead of stopping
                continue;
              }
            }

            spinner.succeed(`Added ${componentName} successfully`);
          } catch (error) {
            hasErrors = true;
            spinner.fail(`Failed to add ${componentName}`);
            logger.error(error as Error);
            // Continue with next component instead of stopping
            continue;
          }
        }

        // Show final status
        if (hasErrors) {
          spinner.warn('Components installed with some warnings');
        } else {
          spinner.succeed('All components installed successfully!');
        }
      } catch (error) {
        spinner.fail('Failed to create component directory');
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

  // If it's the Icon component, create registry file in the Icon directory
  if (componentName === 'Icon') {
    const iconDir = path.join(cwd, 'components', 'ui', 'icon');
    const registryPath = path.join(iconDir, 'registry.ts');

    // Create Icon directory if it doesn't exist
    if (!existsSync(iconDir)) {
      await fs.mkdir(iconDir, { recursive: true });
    }

    // Create registry file if it doesn't exist
    if (!existsSync(registryPath) || options.overwrite) {
      const registryContent = `export const iconPaths = ${JSON.stringify(ICON_PATHS, null, 2)};`;
      await fs.writeFile(registryPath, registryContent, 'utf8');
    }

    // Update the import path in the Icon component template
    return template.replace('@/utils/registry', './registry');
  }

  return template;
}
