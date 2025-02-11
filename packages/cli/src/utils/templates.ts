export const TAILWIND_CONFIG = `const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // USWDS Colors
        primary: {
          DEFAULT: 'hsl(var(--primary))',  // #005EA2
          hover: 'hsl(var(--primary-hover))',  // #1A4480
          active: 'hsl(var(--primary-active))', // #162E51
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', // #D83933
          hover: 'hsl(var(--secondary-hover))', // #B50909
          active: 'hsl(var(--secondary-active))', // #8B0A03
          foreground: 'hsl(var(--secondary-foreground))'
        },
        accent: {
          cool: {
            DEFAULT: 'hsl(var(--accent-cool))', // #00BDE3
            hover: 'hsl(var(--accent-cool-hover))', // #28A0CB
            active: 'hsl(var(--accent-cool-active))' // #07648D
          },
          warm: {
            DEFAULT: 'hsl(var(--accent-warm))', // #FA9441
            hover: 'hsl(var(--accent-warm-hover))', // #C05600
            active: 'hsl(var(--accent-warm-active))' // #775540
          }
        }
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
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
        --foreground: 240 10% 3.9%;
        
        --primary: 201 100% 32%;  /* #005EA2 */
        --primary-hover: 213 64% 30%;  /* #1A4480 */
        --primary-active: 213 57% 20%;  /* #162E51 */
        
        --secondary: 2 61% 52%;  /* #D83933 */
        --secondary-hover: 2 89% 35%;  /* #B50909 */
        --secondary-active: 2 96% 27%;  /* #8B0A03 */
        
        --accent-cool: 190 100% 44%;  /* #00BDE3 */
        --accent-cool-hover: 190 67% 48%;  /* #28A0CB */
        --accent-cool-active: 197 91% 29%;  /* #07648D */
        
        --accent-warm: 28 94% 62%;  /* #FA9441 */
        --accent-warm-hover: 28 100% 38%;  /* #C05600 */
        --accent-warm-active: 20 19% 36%;  /* #775540 */
    }

    .dark:root {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        
        --primary: 203 54% 68%;  /* #73B3E7 */
        --primary-hover: 203 54% 68%;  /* #4F97D1 */
        --primary-active: 204 69% 45%;  /* #2378C3 */
        
        --secondary: 4 75% 64%;  /* #E9695D */
        --secondary-hover: 6 77% 55%;  /* #E34732 */
        --secondary-active: 5 81% 38%;  /* #B21D12 */
        
        --accent-cool: 196 67% 48%;  /* #28A0CB */
        --accent-cool-hover: 197 91% 29%;  /* #07648D */
        --accent-cool-active: 197 91% 22%;  /* #044E6C */
        
        --accent-warm: 25 100% 38%;  /* #C05600 */
        --accent-warm-hover: 19 19% 36%;  /* #775540 */
        --accent-warm-active: 12 20% 19%;  /* #3D2925 */
    }
}`;

export const NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;
