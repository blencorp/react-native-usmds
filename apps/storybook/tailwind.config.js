const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // USWDS Colors
        primary: {
          DEFAULT: 'hsl(var(--primary))', // #005EA2
          hover: 'hsl(var(--primary-hover))', // #1A4480
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
        hairline: hairlineWidth()
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
