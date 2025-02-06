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
        // Base Colors
        base: {
          50: '#f7f8f9',
          100: '#e6e9ec',
          200: '#d5d9de',
          300: '#c4c8cd',
          400: '#a3a7ad',
          500: '#71767a',
          600: '#565c65',
          700: '#3d4551',
          800: '#1b1b1b',
          900: '#000000'
        },
        // Primary Colors
        primary: {
          50: '#e7f6f8',
          100: '#ccecf2',
          200: '#99d9e5',
          300: '#66c5d8',
          400: '#33b2cb',
          500: '#005ea2',  // Primary default
          600: '#1a4480',  // Primary hover
          700: '#162e51',  // Primary active
          800: '#0d1f34',
          900: '#040f17'
        },
        // Secondary Colors
        secondary: {
          50: '#f8e7e7',
          100: '#f2cccc',
          200: '#e59999',
          300: '#d86666',
          400: '#cb3333',
          500: '#d83933',  // Secondary default
          600: '#8b1e1a',  // Secondary hover
          700: '#5c1412',  // Secondary active
          800: '#2e0a09',
          900: '#170505'
        },
        // State Colors
        info: {
          DEFAULT: '#00bde3',
          dark: '#009ec1'
        },
        error: {
          DEFAULT: '#d54309',
          dark: '#b51d09'
        },
        warning: {
          DEFAULT: '#ffbe2e',
          dark: '#e5a000'
        },
        success: {
          DEFAULT: '#00a91c',
          dark: '#008817'
        },
        disabled: {
          DEFAULT: '#c9c9c9',
          dark: '#8f8f8f'
        },
        emergency: {
          DEFAULT: '#9c3d10',
          dark: '#63240a'
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
    --primary: 201 100% 32%;
    --primary-foreground: 0 0% 100%;
    --secondary: 217 47% 30%;
    --secondary-foreground: 0 0% 100%;
    --border: 220 13% 46%;
  }

  .dark {
    --background: 224 71% 4%;
    --primary: 201 100% 32%;
    --primary-foreground: 0 0% 100%;
    --secondary: 217 47% 30%;
    --secondary-foreground: 0 0% 100%;
    --border: 215 20% 65%;
  }
}`;

export const NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;
