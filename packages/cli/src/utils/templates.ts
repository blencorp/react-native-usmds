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
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
`;

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
    /* ========================================
       USWDS OFFICIAL THEME TOKENS - LIGHT MODE
       ======================================== */

    /* Base colors (ink and backgrounds) */
    --background: 0 0% 100%; /* #FFFFFF - white */
    --foreground: 0 0% 11%; /* #1B1B1B - base-ink (gray-90) */

    /* Card */
    --card: 0 0% 100%; /* #FFFFFF - white */
    --card-foreground: 0 0% 11%; /* #1B1B1B - base-ink */

    /* Popover */
    --popover: 0 0% 100%; /* #FFFFFF - white */
    --popover-foreground: 0 0% 11%; /* #1B1B1B - base-ink */

    /* Primary - USWDS primary blue */
    --primary: 209 100% 32%; /* #005EA2 - primary (blue-60v) */
    --primary-foreground: 0 0% 100%; /* #FFFFFF - white */

    /* Secondary - USWDS secondary red */
    --secondary: 3 61% 52%; /* #D83933 - secondary (red-50) */
    --secondary-foreground: 0 0% 100%; /* #FFFFFF - white */

    /* Muted - subtle backgrounds and secondary text */
    --muted: 0 0% 94%; /* #F0F0F0 - base-lightest (gray-5) */
    --muted-foreground: 204 7% 46%; /* #71767A - base (gray-cool-50) */

    /* Accent - accent backgrounds */
    --accent: 0 0% 96%; /* #F5F5F5 - lighter for better hover distinction */
    --accent-foreground: 0 0% 11%; /* #1B1B1B - base-ink */

    /* Destructive - error states */
    --destructive: 17 94% 43%; /* #D54309 - error (red-warm-50v) */
    --destructive-foreground: 0 0% 100%; /* #FFFFFF - white */

    /* Success - success states */
    --success: 152 69% 31%; /* #00A91C - success (green-cool-50v) */
    --success-foreground: 0 0% 100%; /* #FFFFFF - white */

    /* Warning - warning states */
    --warning: 44 100% 59%; /* #FFBE2E - warning (gold-20v) */
    --warning-foreground: 0 0% 11%; /* #1B1B1B - base-ink */

    /* Info - informational states */
    --info: 190 100% 44%; /* #00BDE3 - info (cyan-30v) */
    --info-foreground: 0 0% 100%; /* #FFFFFF - white */

    /* Border and Input */
    --border: 204 15% 88%; /* #DFE1E2 - base-lighter (gray-cool-10) */
    --input: 204 15% 88%; /* #DFE1E2 - base-lighter */

    /* Focus Ring */
    --ring: 211 100% 57%; /* #2491FF - focus color */

    /* Disabled */
    --disabled: 203 7% 67%; /* #A9AEB1 - disabled (gray-cool-30) */
    --disabled-foreground: 203 7% 67%; /* #A9AEB1 - disabled */

    /* Radius */
    --radius: 0.25rem; /* USWDS default radius */

    /* Chart Colors (USWDS Data Viz palette) */
    --chart-1: 209 100% 32%; /* #005EA2 - blue-60v */
    --chart-2: 190 100% 44%; /* #00BDE3 - cyan-30v */
    --chart-3: 152 69% 31%; /* #00A91C - green-cool-50v */
    --chart-4: 44 100% 59%; /* #FFBE2E - gold-20v */
    --chart-5: 3 61% 52%; /* #D83933 - red-50 */
  }

  .dark {
    /* ========================================
       DARK MODE THEME
       Using USWDS-compatible colors with proper contrast
       ======================================== */

    /* Base colors - inverted from light mode */
    --background: 0 0% 11%; /* #1B1B1B - base-darkest (gray-90) */
    --foreground: 0 0% 94%; /* #F0F0F0 - base-lightest (gray-5) */

    /* Card */
    --card: 204 10% 16%; /* #262626 - slightly lighter than background */
    --card-foreground: 0 0% 94%; /* #F0F0F0 - base-lightest */

    /* Popover */
    --popover: 204 10% 16%; /* #262626 - same as card */
    --popover-foreground: 0 0% 94%; /* #F0F0F0 - base-lightest */

    /* Primary - lighter blue for better contrast on dark */
    --primary: 208 74% 68%; /* #73B3E7 - primary-light (blue-30) */
    --primary-foreground: 0 0% 11%; /* #1B1B1B - dark text on light primary */

    /* Secondary - lighter red for better contrast */
    --secondary: 3 77% 74%; /* #F2938C - secondary-light (red-30) */
    --secondary-foreground: 0 0% 11%; /* #1B1B1B - dark text on light secondary */

    /* Muted - darker than background for subtle areas */
    --muted: 204 9% 24%; /* #3D4551 - base-darker (gray-cool-70) */
    --muted-foreground: 203 7% 67%; /* #A9AEB1 - base-light (gray-cool-30) */

    /* Accent */
    --accent: 204 8% 35%; /* #565C65 - base-dark (gray-cool-60) */
    --accent-foreground: 0 0% 94%; /* #F0F0F0 - base-lightest */

    /* Destructive - brighter for visibility on dark */
    --destructive: 17 100% 56%; /* #FF5E1F - brighter red-warm */
    --destructive-foreground: 0 0% 94%; /* #F0F0F0 - light text */

    /* Success - brighter green for dark mode */
    --success: 152 100% 41%; /* #00D127 - brighter green */
    --success-foreground: 0 0% 11%; /* #1B1B1B - dark text */

    /* Warning - brighter gold for dark mode */
    --warning: 44 100% 69%; /* #FFCB54 - gold-10v */
    --warning-foreground: 0 0% 11%; /* #1B1B1B - dark text */

    /* Info - brighter cyan for dark mode */
    --info: 190 100% 54%; /* #00E7FF - brighter cyan */
    --info-foreground: 0 0% 11%; /* #1B1B1B - dark text */

    /* Border and Input */
    --border: 204 8% 35%; /* #565C65 - base-dark (gray-cool-60) */
    --input: 204 8% 35%; /* #565C65 - base-dark */

    /* Focus Ring - brighter for visibility */
    --ring: 211 100% 67%; /* #57A9FF - brighter blue */

    /* Disabled */
    --disabled: 204 9% 24%; /* #3D4551 - base-darker */
    --disabled-foreground: 204 7% 46%; /* #71767A - base */

    /* Chart Colors - adjusted for dark mode visibility */
    --chart-1: 208 74% 68%; /* #73B3E7 - blue-30 */
    --chart-2: 190 100% 54%; /* #00E7FF - brighter cyan */
    --chart-3: 152 100% 41%; /* #00D127 - brighter green */
    --chart-4: 44 100% 69%; /* #FFCB54 - gold-10v */
    --chart-5: 3 77% 74%; /* #F2938C - red-30 */
  }
}
`;

export const NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;

export const COMPONENTS_JSON = `{
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
  }
}`;