export const TAILWIND_CONFIG = `const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          hover: 'hsl(var(--primary-hover))',
          active: 'hsl(var(--primary-active))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          hover: 'hsl(var(--secondary-hover))',
          active: 'hsl(var(--secondary-active))'
        },
        accent: {
          cool: {
            DEFAULT: 'hsl(var(--accent-cool))',
            hover: 'hsl(var(--accent-cool-hover))',
            active: 'hsl(var(--accent-cool-active))'
          },
          warm: {
            DEFAULT: 'hsl(var(--accent-warm))',
            hover: 'hsl(var(--accent-warm-hover))',
            active: 'hsl(var(--accent-warm-active))'
          }
        },
        base: {
          DEFAULT: 'hsl(var(--base))',
          hover: 'hsl(var(--base-hover))',
          active: 'hsl(var(--base-active))'
        },
        focus: {
          ring: 'hsl(var(--focus-ring))'
        },
        inverse: {
          border: {
            DEFAULT: 'hsl(var(--inverse-border))',
            hover: 'hsl(var(--inverse-border-hover))',
            active: 'hsl(var(--inverse-border-active))'
          }
        }
      },
      borderWidth: {
        hairline: hairlineWidth()
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};`;

export const UTILS = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

export const UTILS_TS = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

export const BABEL_CONFIG = `module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};`;

export const METRO_CONFIG = `const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });`;

export const GLOBAL_STYLES = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        --background: 0 0% 100%;
        --foreground: 0 0% 11%;  /* #1B1B1B */
        
        /* Primary Colors */
        --primary: 204 100% 32%;  /* #005EA2 */
        --primary-hover: 217 100% 25%;  /* #1A4480 */
        --primary-active: 215 57% 20%;  /* #162E51 */
        
        /* Secondary Colors */
        --secondary: 3 61% 53%;  /* #D83933 */
        --secondary-hover: 2 89% 35%;  /* #B50909 */
        --secondary-active: 4 96% 27%;  /* #8B0A03 */
        
        /* Accent Cool */
        --accent-cool: 190 100% 44%;  /* #00BDE3 */
        --accent-cool-hover: 196 67% 48%;  /* #28A0CB */
        --accent-cool-active: 198 85% 29%;  /* #07648D */
        
        /* Accent Warm */
        --accent-warm: 28 95% 62%;  /* #FA9441 */
        --accent-warm-hover: 24 100% 38%;  /* #C05600 */
        --accent-warm-active: 17 27% 36%;  /* #775540 */

        /* Base Colors */
        --base: 0 0% 46%;  /* #757575 */
        --base-hover: 0 0% 36%;  /* #5C5C5C */
        --base-active: 0 0% 18%;  /* #2E2E2E */

        /* Focus Ring */
        --focus-ring: 208 100% 57%;  /* #2491FF */

        /* Inverse Colors */
        --inverse-border: 0 0% 90%;  /* #E6E6E6 */
        --inverse-border-hover: 0 0% 94%;  /* #F0F0F0 */
        --inverse-border-active: 0 0% 100%;  /* #FFFFFF */
    }
}`;

export const NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;
