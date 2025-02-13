const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './.rnstorybook/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
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
};
