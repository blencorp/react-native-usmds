#!/usr/bin/env node

// src/index.ts
import { Command as Command3 } from "commander";

// src/commands/add.ts
import { Command as Command2 } from "commander";
import { existsSync as existsSync3 } from "fs";
import path3 from "path";
import prompts from "prompts";
import * as z2 from "zod";

// src/utils/logger.ts
import chalk from "chalk";
var logger = {
  info: (message) => console.log(chalk.blue(message)),
  success: (message) => console.log(chalk.green(message)),
  warn: (message) => console.log(chalk.yellow(message)),
  error: (message) => {
    const errorMessage = message instanceof Error ? message.message : message;
    console.error(chalk.red(errorMessage));
  }
};

// src/utils/get-package-manager.ts
import { detect } from "@antfu/ni";
import { existsSync } from "fs";
import path from "path";
async function getPackageManager(targetDir) {
  if (existsSync(path.join(targetDir, "bun.lockb"))) return "bun";
  if (existsSync(path.join(targetDir, "pnpm-lock.yaml"))) return "pnpm";
  if (existsSync(path.join(targetDir, "yarn.lock"))) return "yarn";
  if (existsSync(path.join(targetDir, "package-lock.json"))) return "npm";
  try {
    const detected = await detect({ programmatic: true, cwd: targetDir });
    switch (detected) {
      case "bun":
        return "bun";
      case "pnpm":
        return "pnpm";
      case "yarn@berry":
      case "yarn":
        return "yarn";
      default:
        return "npm";
    }
  } catch {
    return "npm";
  }
}
function getInstallCommand(packageManager) {
  switch (packageManager) {
    case "bun":
      return {
        install: ["add"],
        installDev: ["add", "-d"],
        useExeca: false,
        isBun: true
      };
    case "pnpm":
      return {
        install: ["add"],
        installDev: ["add", "-D"],
        useExeca: true,
        isBun: false
      };
    case "yarn":
      return {
        install: ["add"],
        installDev: ["add", "--dev"],
        useExeca: true,
        isBun: false
      };
    default:
      return {
        install: ["install"],
        installDev: ["install", "--save-dev"],
        useExeca: true,
        isBun: false
      };
  }
}

// src/commands/init.ts
import chalk2 from "chalk";
import { Command } from "commander";
import { existsSync as existsSync2, promises as fs } from "fs";
import ora from "ora";
import path2 from "path";
import * as z from "zod";

// src/utils/handle-error.ts
function handleError(error) {
  if (typeof error === "string") {
    logger.error(error);
    process.exit(1);
  }
  if (error instanceof Error) {
    logger.error(error.message);
    process.exit(1);
  }
  logger.error("Something went wrong. Please try again.");
  process.exit(1);
}

// src/utils/templates.ts
var TAILWIND_CONFIG = `const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './.rnstorybook/**/*.{ts,tsx}', '../../packages/registry/src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      },
      borderWidth: {
        hairline: hairlineWidth()
      },
      fontSize: {
        '3xs': [
          '13px',
          {
            lineHeight: '16px',
            fontWeight: '400'
          }
        ],
        '2xs': [
          '14px',
          {
            lineHeight: '18px',
            fontWeight: '400'
          }
        ],
        xs: [
          '15px',
          {
            lineHeight: '19px',
            fontWeight: '400'
          }
        ],
        sm: [
          '16px',
          {
            lineHeight: '20px',
            fontWeight: '400'
          }
        ],
        md: [
          '17px',
          {
            lineHeight: '21px',
            fontWeight: '400'
          }
        ],
        lg: [
          '22px',
          {
            lineHeight: '28px',
            fontWeight: '400'
          }
        ],
        xl: [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '400'
          }
        ],
        '2xl': [
          '42px',
          {
            lineHeight: '53px',
            fontWeight: '400'
          }
        ],
        '3xl': [
          '48px',
          {
            lineHeight: '60px',
            fontWeight: '400'
          }
        ]
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif']
      },
      lineHeight: {
        'heading-2': '1.2',
        'body-5': '1.5',
        'alt-5': '1.3'
      },
      spacing: {
        'measure-6': '75ch'
      },
      textStyles: ({ theme }) => ({
        'prose-h1': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.normal'),
          marginTop: '1em'
        },
        'prose-h2': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.normal'),
          marginTop: '105px'
        },
        'prose-h3': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.normal'),
          marginTop: '1em'
        },
        'prose-h4': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.heading-2'),
          marginTop: '105px',
          measure: '6'
        },
        'prose-h5': {
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.heading-2'),
          marginTop: '105px',
          measure: '6'
        },
        'prose-h6': {
          fontSize: theme('fontSize.3xs'),
          fontWeight: theme('fontWeight.normal'),
          textTransform: 'uppercase',
          lineHeight: theme('lineHeight.heading-2'),
          marginTop: '105px',
          measure: '6',
          letterSpacing: '1px'
        },
        'prose-body': {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.body-5'),
          measure: '6'
        },
        'prose-intro': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.normal'),
          lineHeight: theme('lineHeight.alt-5'),
          marginTop: '1em',
          measure: '6'
        }
      })
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addComponents, theme }) {
      addComponents({
        '.usa-prose-h1': theme('textStyles.prose-h1'),
        '.usa-prose-h2': theme('textStyles.prose-h2'),
        '.usa-prose-h3': theme('textStyles.prose-h3'),
        '.usa-prose-h4': theme('textStyles.prose-h4'),
        '.usa-prose-h5': theme('textStyles.prose-h5'),
        '.usa-prose-h6': theme('textStyles.prose-h6'),
        '.usa-prose-body': theme('textStyles.prose-body'),
        '.usa-prose-intro': theme('textStyles.prose-intro'),
        '.usa-prose-ol': {
          listStyleType: 'decimal',
          paddingLeft: '1rem',
          marginTop: '1em'
        },
        '.usa-prose-ul': {
          listStyleType: 'disc',
          paddingLeft: '1rem',
          marginTop: '1em'
        },
        '.usa-prose-li': {
          marginTop: '0.5em'
        }
      });
    }
  ]
};
`;
var UTILS = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;
var BABEL_CONFIG = `module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};`;
var METRO_CONFIG = `const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });`;
var GLOBAL_STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Base */
    --background: 0 0% 100%;           /* White */
    --foreground: 0 0% 11%;            /* #1B1B1B - gray-90 */
    
    /* Card */
    --card: 0 0% 100%;                 /* White */
    --card-foreground: 0 0% 11%;       /* #1B1B1B - gray-90 */
    
    /* Popover */
    --popover: 0 0% 100%;              /* White */
    --popover-foreground: 0 0% 11%;    /* #1B1B1B - gray-90 */
    
    /* Primary - USWDS Blue */
    --primary: 209 100% 32%;           /* #005EA2 - blue-60v */
    --primary-foreground: 0 0% 100%;   /* White */
    
    /* Secondary - USWDS Red */
    --secondary: 3 61% 52%;            /* #D83933 - red-50 */
    --secondary-foreground: 0 0% 100%; /* White */
    
    /* Muted */
    --muted: 0 0% 94%;                 /* #F0F0F0 - gray-5 */
    --muted-foreground: 0 0% 45%;      /* #757575 - gray-50 */
    
    /* Accent - Subtle Gray */
    --accent: 0 0% 96%;                /* #F5F5F5 - gray-3 */
    --accent-foreground: 0 0% 11%;     /* #1B1B1B - gray-90 */
    
    /* Destructive - USWDS Error Red */
    --destructive: 17 94% 43%;         /* #D54309 - red-warm-50v */
    --destructive-foreground: 0 0% 100%; /* White */
    
    /* Border */
    --border: 204 3% 88%;              /* #DFE1E2 - base-lighter */
    --input: 204 3% 88%;               /* #DFE1E2 - base-lighter */
    
    /* Ring */
    --ring: 211 100% 57%;              /* #2491FF - focus ring */
    
    /* Radius */
    --radius: 0.625rem;
    
    /* Chart Colors (USWDS Data Viz palette) */
    --chart-1: 209 100% 32%;           /* #005EA2 - blue-60v */
    --chart-2: 190 100% 44%;           /* #00BDE3 - cyan-30v */
    --chart-3: 128 100% 33%;           /* #00A91C - green-cool-50v */
    --chart-4: 44 100% 59%;            /* #FFBE2E - gold-20v */
    --chart-5: 3 61% 52%;              /* #D83933 - red-50 */
  }

  .dark {
    /* Base */
    --background: 0 0% 11%;            /* #1B1B1B - gray-90 */
    --foreground: 0 0% 94%;            /* #F0F0F0 - gray-5 */
    
    /* Card */
    --card: 0 0% 11%;                  /* #1B1B1B - gray-90 */
    --card-foreground: 0 0% 94%;       /* #F0F0F0 - gray-5 */
    
    /* Popover */
    --popover: 0 0% 11%;               /* #1B1B1B - gray-90 */
    --popover-foreground: 0 0% 94%;    /* #F0F0F0 - gray-5 */
    
    /* Primary - Lighter blue for dark */
    --primary: 208 74% 68%;            /* #73B3E7 - blue-30 */
    --primary-foreground: 0 0% 11%;    /* #1B1B1B - gray-90 */
    
    /* Secondary - Lighter red for dark */
    --secondary: 3 77% 74%;            /* #F2938C - red-30 */
    --secondary-foreground: 0 0% 11%;  /* #1B1B1B - gray-90 */
    
    /* Muted */
    --muted: 0 0% 18%;                 /* #2E2E2E - gray-80 */
    --muted-foreground: 0 0% 68%;      /* #ADADAD - gray-30 */
    
    /* Accent - Subtle Gray for dark */
    --accent: 0 0% 15%;                /* #262626 - gray-cool-80 */
    --accent-foreground: 0 0% 94%;     /* #F0F0F0 - gray-5 */
    
    /* Destructive - Lighter red for dark */
    --destructive: 17 94% 53%;         /* #FF5E1F - red-warm-40v (brighter) */
    --destructive-foreground: 0 0% 94%; /* #F0F0F0 - gray-5 */
    
    /* Border */
    --border: 0 0% 27%;                /* #454545 - gray-70 */
    --input: 0 0% 27%;                 /* #454545 - gray-70 */
    
    /* Ring */
    --ring: 211 100% 67%;              /* #57A9FF - blue-vivid-40 (brighter) */
    
    /* Chart Colors (same for dark) */
    --chart-1: 208 74% 68%;            /* #73B3E7 - blue-30 */
    --chart-2: 190 100% 54%;           /* #00E7FF - cyan-20v */
    --chart-3: 125 69% 66%;            /* #70E17B - green-cool-20v */
    --chart-4: 44 100% 69%;            /* #FFCB54 - gold-10v */
    --chart-5: 3 77% 74%;              /* #F2938C - red-30 */
  }
}`;
var NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;
var COMPONENTS_JSON = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "global.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}`;

// src/commands/init.ts
import { spawn } from "child_process";
var ESSENTIAL_DEPENDENCIES = [
  "class-variance-authority",
  "clsx",
  "nativewind@^4.1.23",
  "tailwindcss-animate",
  "tailwind-merge",
  "react-native-reanimated",
  "react-native-svg",
  "lucide-react-native",
  "@rn-primitives/types",
  "@rn-primitives/slot",
  "@rn-primitives/portal"
];
var DEV_DEPENDENCIES = ["tailwindcss@^3.3.2"];
var initOptionsSchema = z.object({
  cwd: z.string(),
  yes: z.boolean()
});
var init = new Command().name("init").description("initialize your project and install dependencies").option("-y, --yes", "skip confirmation prompt.", false).option("-c, --cwd <cwd>", "the working directory. defaults to the current directory.", process.cwd()).action(async (opts) => {
  try {
    const options = initOptionsSchema.parse(opts);
    const cwd = path2.resolve(options.cwd);
    await runInit(cwd);
    logger.info(`${chalk2.green("Success!")}`);
  } catch (error) {
    handleError(error);
  }
});
async function writeFileGracefully(filePath, content) {
  if (existsSync2(filePath)) {
    const existingContent = await fs.readFile(filePath, "utf8");
    if (filePath.endsWith("tailwind.config.js")) {
      await fs.writeFile(filePath, content, "utf8");
      return;
    }
    const normalizedExisting = existingContent.replace(/\s+/g, "").replace(/\r\n/g, "\n");
    const normalizedContent = content.replace(/\s+/g, "").replace(/\r\n/g, "\n");
    if (!normalizedExisting.includes(normalizedContent)) {
      await fs.writeFile(filePath, `${existingContent}
${content}`, "utf8");
    }
  } else {
    await fs.writeFile(filePath, content, "utf8");
  }
}
async function hasExistingCnFunction(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    const cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*/g, "").replace(/'.*?'/g, "").replace(/".*?"/g, "").replace(/`.*?`/g, "");
    const cnPatterns = [
      /function\s+cn\s*\(/,
      // function cn(
      /const\s+cn\s*=\s*function\s*\(/,
      // const cn = function(
      /const\s+cn\s*=\s*\([^)]*\)\s*=>/,
      // const cn = (...) =>
      /export\s+(?:const|function)\s+cn\s*[=\(]/
      // export const/function cn
    ];
    return cnPatterns.some((pattern) => pattern.test(cleanContent));
  } catch {
    return false;
  }
}
async function checkDependenciesExist(cwd) {
  try {
    const packageJsonPath = path2.join(cwd, "package.json");
    if (!existsSync2(packageJsonPath)) {
      logger.warn("No package.json found");
      return false;
    }
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
    const allDependencies = {
      ...packageJson.dependencies || {},
      ...packageJson.devDependencies || {}
    };
    const missingDeps = ESSENTIAL_DEPENDENCIES.filter((pkg) => {
      const pkgName = pkg.split("@")[0] || pkg;
      const exists = allDependencies.hasOwnProperty(pkgName);
      return !exists;
    });
    return missingDeps.length === 0;
  } catch (error) {
    logger.error(`Error checking dependencies: ${error}`);
    return false;
  }
}
async function runInit(cwd) {
  const spinner = ora(`Checking existing installation...`)?.start();
  try {
    const isInitialized = await checkDependenciesExist(cwd);
    spinner.text = "Initializing project...";
    await writeFileGracefully(path2.join(cwd, "tailwind.config.js"), TAILWIND_CONFIG);
    await writeFileGracefully(path2.join(cwd, "metro.config.js"), METRO_CONFIG);
    await writeFileGracefully(path2.join(cwd, "babel.config.js"), BABEL_CONFIG);
    await writeFileGracefully(path2.join(cwd, "global.css"), GLOBAL_STYLES);
    await writeFileGracefully(path2.join(cwd, "nativewind-env.d.ts"), NATIVEWIND_ENV);
    await writeFileGracefully(path2.join(cwd, "components.json"), COMPONENTS_JSON);
    if (isInitialized) {
      spinner?.succeed();
      logger.info("Configuration files updated. Dependencies already installed.");
      return;
    }
    const libDir = path2.join(cwd, "lib");
    const utilsPath = path2.join(libDir, "utils.ts");
    if (!existsSync2(libDir)) {
      await fs.mkdir(libDir, { recursive: true });
      await fs.writeFile(utilsPath, UTILS, "utf8");
    } else {
      if (existsSync2(utilsPath)) {
        const hasCn = await hasExistingCnFunction(utilsPath);
        if (!hasCn) {
          await fs.writeFile(utilsPath, `${await fs.readFile(utilsPath, "utf8")}
${UTILS}`, "utf8");
        }
      } else {
        await fs.writeFile(utilsPath, UTILS, "utf8");
      }
    }
    const componentsDir = path2.join(cwd, "components");
    await fs.mkdir(componentsDir, { recursive: true });
    spinner.succeed();
    const dependenciesSpinner = ora(`Installing dependencies...`)?.start();
    const packageManager = await getPackageManager(cwd);
    const { install, installDev, isBun } = getInstallCommand(packageManager);
    try {
      if (isBun) {
        const installProc = Bun.spawn([packageManager, ...install, ...ESSENTIAL_DEPENDENCIES], {
          cwd,
          stdio: ["inherit", "inherit", "inherit"]
        });
        await installProc.exited;
        const installDevProc = Bun.spawn([packageManager, ...installDev, ...DEV_DEPENDENCIES], {
          cwd,
          stdio: ["inherit", "inherit", "inherit"]
        });
        await installDevProc.exited;
      } else {
        await new Promise((resolve, reject) => {
          const proc = spawn(packageManager, [...install, ...ESSENTIAL_DEPENDENCIES], {
            cwd,
            stdio: "inherit"
          });
          proc.on("exit", (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Process exited with code ${code}`));
          });
        });
        await new Promise((resolve, reject) => {
          const proc = spawn(packageManager, [...installDev, ...DEV_DEPENDENCIES], {
            cwd,
            stdio: "inherit"
          });
          proc.on("exit", (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Process exited with code ${code}`));
          });
        });
      }
      dependenciesSpinner?.succeed();
    } catch (error) {
      dependenciesSpinner?.fail();
      throw error;
    }
  } catch (error) {
    spinner?.fail();
    throw error;
  }
}

// src/commands/add.ts
import { spawn as spawn2 } from "child_process";
var REGISTRY_BASE_URL = "https://storage.googleapis.com/usmds-registry/r/usa";
var AVAILABLE_COMPONENTS = [
  "alert",
  "avatar",
  "badge",
  "banner",
  "biometricsignin",
  "button",
  "buttongroup",
  "card",
  "checkbox",
  "checkboxtile",
  "collapsible",
  "dialog",
  "icon",
  "link",
  "pagination",
  "progress",
  "radiobutton",
  "radiotile",
  "snackbar",
  "stepindicator",
  "tag",
  "text",
  "textarea",
  "textinput",
  "toggle"
];
var addOptionsSchema = z2.object({
  components: z2.array(z2.string()).optional(),
  yes: z2.boolean(),
  overwrite: z2.boolean(),
  cwd: z2.string(),
  all: z2.boolean()
});
var add = new Command2().name("add").description("Add USMDS components to your project").argument("[components...]", "Components to add").option("-y, --yes", "Skip confirmation prompt", false).option("-o, --overwrite", "Overwrite existing files", false).option("-a, --all", "Add all available components", false).option("-c, --cwd <cwd>", "Working directory (defaults to current)", process.cwd()).action(async (components, opts) => {
  const options = addOptionsSchema.parse({
    components,
    ...opts
  });
  const cwd = path3.resolve(options.cwd);
  if (!existsSync3(cwd)) {
    logger.error(`Directory ${cwd} does not exist`);
    process.exit(1);
  }
  const initialized = await checkDependenciesExist(cwd);
  if (!initialized) {
    logger.info(`Project not initialized. Running 'usmds init' first...`);
    try {
      await runInit(cwd);
      logger.success("Successfully initialized project");
    } catch (error) {
      logger.error("Failed to initialize project");
      logger.error(error);
      process.exit(1);
    }
  }
  try {
    let selectedComponents = options.all ? AVAILABLE_COMPONENTS : options.components;
    if (!selectedComponents?.length && !options.all) {
      const response = await prompts({
        type: "multiselect",
        name: "components",
        message: "Select components to add:",
        choices: AVAILABLE_COMPONENTS.map((component) => ({
          title: component,
          value: component
        }))
      });
      selectedComponents = response.components;
    }
    if (!selectedComponents?.length) {
      logger.warn("No components selected");
      process.exit(0);
    }
    const componentUrls = selectedComponents.map((component) => {
      const lowerCaseComponent = component.toLowerCase();
      return lowerCaseComponent.startsWith("http") ? lowerCaseComponent : `${REGISTRY_BASE_URL}/${lowerCaseComponent}.json`;
    });
    const shadcnOptions = [];
    if (options.overwrite) {
      shadcnOptions.push("--overwrite");
    }
    if (options.yes) {
      shadcnOptions.push("--yes");
    }
    const packageManager = await getPackageManager(cwd);
    const binaryRunner = packageManager === "npm" ? ["npx"] : packageManager === "pnpm" ? ["pnpm", "dlx"] : packageManager === "yarn" ? ["yarn", "dlx"] : ["bunx"];
    const commandArgs = [
      ...binaryRunner.slice(1),
      "shadcn@latest",
      "add",
      ...shadcnOptions,
      ...componentUrls
    ].filter((option) => option !== void 0 && option !== "");
    logger.info("Installing components...");
    await new Promise((resolve, reject) => {
      const proc = spawn2(binaryRunner[0], commandArgs, {
        cwd,
        stdio: "inherit"
      });
      proc.on("exit", (code) => {
        if (code === 0) {
          logger.success("All components installed successfully!");
          resolve();
        } else {
          reject(new Error(`shadcn add exited with code ${code}`));
        }
      });
      proc.on("error", (error) => {
        reject(error);
      });
    });
  } catch (error) {
    logger.error("Failed to add components");
    logger.error(error);
    process.exit(1);
  }
});

// src/index.ts
function main() {
  const program = new Command3().name("usmds").description("CLI for adding USMDS components to React Native apps").version("0.1.8");
  program.addCommand(add);
  program.addCommand(init);
  program.parse(process.argv);
}
main();
//# sourceMappingURL=index.js.map