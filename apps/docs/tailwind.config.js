import { createPreset } from 'fumadocs-ui/tailwind-plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    '../../node_modules/fumadocs-ui/dist/**/*.js',
    '../../packages/registry/src/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  presets: [require('nativewind/preset'), createPreset({ preset: 'neutral' })],
  important: 'html',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        publicSans: ['var(--font-public-sans)', ...fontFamily.sans],
        instrumentSerif: ['var(--font-instrument-serif)', ...fontFamily.serif]
      },
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
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        publicSans: ['var(--font-public-sans)', ...fontFamily.sans],
        instrumentSerif: ['var(--font-instrument-serif)', ...fontFamily.serif]
      },
      fontSize: {
        'uswds-heading-3xl': ['3.194rem', { lineHeight: '1.1', fontWeight: '700' }],
        'uswds-heading-2xl': ['2.663rem', { lineHeight: '1.1', fontWeight: '400' }],
        'uswds-heading-xl': ['2.131rem', { lineHeight: '1.15', fontWeight: '200' }],
        'uswds-heading-lg': ['1.463rem', { lineHeight: '1.2', fontWeight: '100' }],
        'uswds-heading-md': ['1.131rem', { lineHeight: '1.3', fontWeight: '100' }],
        'uswds-heading-sm': ['1.063rem', { lineHeight: '1.35', fontWeight: '100' }],
        'uswds-heading-xs': ['1rem', { lineHeight: '1.4', fontWeight: '100' }]
      },
      lineHeight: {
        'heading-2': '1.2',
        'body-5': '1.5',
        'alt-5': '1.3'
      },
      spacing: {
        'measure-6': '75ch'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        spin: {
          to: {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spin: 'spin 1s linear infinite'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require('tailwindcss-animate')]
};

export default config;
