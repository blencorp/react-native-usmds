export const TAILWIND_CONFIG = `const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './.rnstorybook/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
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
  },
  "registries": {}
}`;