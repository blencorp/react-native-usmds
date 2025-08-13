export const TAILWIND_CONFIG = `const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './.rnstorybook/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          lighter: 'hsl(var(--primary-lighter))',
          light: 'hsl(var(--primary-light))',
          vivid: 'hsl(var(--primary-vivid))',
          dark: 'hsl(var(--primary-dark))',
          darker: 'hsl(var(--primary-darker))'
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          lighter: 'hsl(var(--secondary-lighter))',
          light: 'hsl(var(--secondary-light))',
          vivid: 'hsl(var(--secondary-vivid))',
          dark: 'hsl(var(--secondary-dark))',
          darker: 'hsl(var(--secondary-darker))'
        },

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },

        'accent-cool': {
          DEFAULT: 'hsl(var(--accent-cool))',
          lighter: 'hsl(var(--accent-cool-lighter))',
          light: 'hsl(var(--accent-cool-light))',
          dark: 'hsl(var(--accent-cool-dark))',
          darker: 'hsl(var(--accent-cool-darker))'
        },

        'accent-warm': {
          DEFAULT: 'hsl(var(--accent-warm))',
          lighter: 'hsl(var(--accent-warm-lighter))',
          light: 'hsl(var(--accent-warm-light))',
          dark: 'hsl(var(--accent-warm-dark))',
          darker: 'hsl(var(--accent-warm-darker))'
        },

        base: {
          DEFAULT: 'hsl(var(--base))',
          lightest: 'hsl(var(--base-lightest))',
          lighter: 'hsl(var(--base-lighter))',
          light: 'hsl(var(--base-light))',
          dark: 'hsl(var(--base-dark))',
          darker: 'hsl(var(--base-darker))',
          darkest: 'hsl(var(--base-darkest))',
          ink: 'hsl(var(--base-ink))'
        },

        focus: {
          ring: 'hsl(var(--focus-ring))'
        },

        info: {
          DEFAULT: 'hsl(var(--info))',
          lighter: 'hsl(var(--info-lighter))',
          light: 'hsl(var(--info-light))',
          dark: 'hsl(var(--info-dark))',
          darker: 'hsl(var(--info-darker))'
        },
        error: {
          DEFAULT: 'hsl(var(--error))',
          lighter: 'hsl(var(--error-lighter))',
          light: 'hsl(var(--error-light))',
          dark: 'hsl(var(--error-dark))',
          darker: 'hsl(var(--error-darker))'
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          lighter: 'hsl(var(--warning-lighter))',
          light: 'hsl(var(--warning-light))',
          dark: 'hsl(var(--warning-dark))',
          darker: 'hsl(var(--warning-darker))'
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          lighter: 'hsl(var(--success-lighter))',
          light: 'hsl(var(--success-light))',
          dark: 'hsl(var(--success-dark))',
          darker: 'hsl(var(--success-darker))'
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          lighter: 'hsl(var(--disabled-lighter))',
          light: 'hsl(var(--disabled-light))',
          dark: 'hsl(var(--disabled-dark))',
          darker: 'hsl(var(--disabled-darker))'
        },
        emergency: {
          DEFAULT: 'hsl(var(--emergency))',
          dark: 'hsl(var(--emergency-dark))'
        },
        'red-cool': {
          5: 'hsl(var(--red-cool-5))',
          10: 'hsl(var(--red-cool-10))',
          20: 'hsl(var(--red-cool-20))',
          30: 'hsl(var(--red-cool-30))',
          40: 'hsl(var(--red-cool-40))',
          50: 'hsl(var(--red-cool-50))',
          60: 'hsl(var(--red-cool-60))',
          70: 'hsl(var(--red-cool-70))',
          80: 'hsl(var(--red-cool-80))',
          90: 'hsl(var(--red-cool-90))'
        },
        'red-cool-vivid': {
          5: 'hsl(var(--red-cool-vivid-5))',
          10: 'hsl(var(--red-cool-vivid-10))',
          20: 'hsl(var(--red-cool-vivid-20))',
          30: 'hsl(var(--red-cool-vivid-30))',
          40: 'hsl(var(--red-cool-vivid-40))',
          50: 'hsl(var(--red-cool-vivid-50))',
          60: 'hsl(var(--red-cool-vivid-60))',
          70: 'hsl(var(--red-cool-vivid-70))',
          80: 'hsl(var(--red-cool-vivid-80))'
        },
        red: {
          5: 'hsl(var(--red-5))',
          10: 'hsl(var(--red-10))',
          20: 'hsl(var(--red-20))',
          30: 'hsl(var(--red-30))',
          40: 'hsl(var(--red-40))',
          50: 'hsl(var(--red-50))',
          60: 'hsl(var(--red-60))',
          70: 'hsl(var(--red-70))',
          80: 'hsl(var(--red-80))',
          90: 'hsl(var(--red-90))'
        },
        'red-warm': {
          5: 'hsl(var(--red-warm-5))',
          10: 'hsl(var(--red-warm-10))',
          20: 'hsl(var(--red-warm-20))',
          30: 'hsl(var(--red-warm-30))',
          40: 'hsl(var(--red-warm-40))',
          50: 'hsl(var(--red-warm-50))',
          60: 'hsl(var(--red-warm-60))',
          70: 'hsl(var(--red-warm-70))',
          80: 'hsl(var(--red-warm-80))',
          90: 'hsl(var(--red-warm-90))'
        },
        'red-warm-vivid': {
          5: 'hsl(var(--red-warm-vivid-5))',
          10: 'hsl(var(--red-warm-vivid-10))',
          20: 'hsl(var(--red-warm-vivid-20))',
          30: 'hsl(var(--red-warm-vivid-30))',
          40: 'hsl(var(--red-warm-vivid-40))',
          50: 'hsl(var(--red-warm-vivid-50))',
          60: 'hsl(var(--red-warm-vivid-60))',
          70: 'hsl(var(--red-warm-vivid-70))',
          80: 'hsl(var(--red-warm-vivid-80))'
        },
        'red-vivid': {
          5: 'hsl(var(--red-vivid-5))',
          10: 'hsl(var(--red-vivid-10))',
          20: 'hsl(var(--red-vivid-20))',
          30: 'hsl(var(--red-vivid-30))',
          40: 'hsl(var(--red-vivid-40))',
          50: 'hsl(var(--red-vivid-50))',
          60: 'hsl(var(--red-vivid-60))',
          70: 'hsl(var(--red-vivid-70))',
          80: 'hsl(var(--red-vivid-80))'
        },
        'orange-warm': {
          5: 'hsl(var(--orange-warm-5))',
          10: 'hsl(var(--orange-warm-10))',
          20: 'hsl(var(--orange-warm-20))',
          30: 'hsl(var(--orange-warm-30))',
          40: 'hsl(var(--orange-warm-40))',
          50: 'hsl(var(--orange-warm-50))',
          60: 'hsl(var(--orange-warm-60))',
          70: 'hsl(var(--orange-warm-70))',
          80: 'hsl(var(--orange-warm-80))',
          90: 'hsl(var(--orange-warm-90))'
        },
        'orange-warm-vivid': {
          5: 'hsl(var(--orange-warm-vivid-5))',
          10: 'hsl(var(--orange-warm-vivid-10))',
          20: 'hsl(var(--orange-warm-vivid-20))',
          30: 'hsl(var(--orange-warm-vivid-30))',
          40: 'hsl(var(--orange-warm-vivid-40))',
          50: 'hsl(var(--orange-warm-vivid-50))',
          60: 'hsl(var(--orange-warm-vivid-60))',
          70: 'hsl(var(--orange-warm-vivid-70))',
          80: 'hsl(var(--orange-warm-vivid-80))'
        },
        orange: {
          5: 'hsl(var(--orange-5))',
          10: 'hsl(var(--orange-10))',
          20: 'hsl(var(--orange-20))',
          30: 'hsl(var(--orange-30))',
          40: 'hsl(var(--orange-40))',
          50: 'hsl(var(--orange-50))',
          60: 'hsl(var(--orange-60))',
          70: 'hsl(var(--orange-70))',
          80: 'hsl(var(--orange-80))',
          90: 'hsl(var(--orange-90))'
        },
        'orange-vivid': {
          5: 'hsl(var(--orange-vivid-5))',
          10: 'hsl(var(--orange-vivid-10))',
          20: 'hsl(var(--orange-vivid-20))',
          30: 'hsl(var(--orange-vivid-30))',
          40: 'hsl(var(--orange-vivid-40))',
          50: 'hsl(var(--orange-vivid-50))',
          60: 'hsl(var(--orange-vivid-60))',
          70: 'hsl(var(--orange-vivid-70))',
          80: 'hsl(var(--orange-vivid-80))'
        },
        gold: {
          5: 'hsl(var(--gold-5))',
          10: 'hsl(var(--gold-10))',
          20: 'hsl(var(--gold-20))',
          30: 'hsl(var(--gold-30))',
          40: 'hsl(var(--gold-40))',
          50: 'hsl(var(--gold-50))',
          60: 'hsl(var(--gold-60))',
          70: 'hsl(var(--gold-70))',
          80: 'hsl(var(--gold-80))',
          90: 'hsl(var(--gold-90))'
        },
        'gold-vivid': {
          5: 'hsl(var(--gold-vivid-5))',
          10: 'hsl(var(--gold-vivid-10))',
          20: 'hsl(var(--gold-vivid-20))',
          30: 'hsl(var(--gold-vivid-30))',
          40: 'hsl(var(--gold-vivid-40))',
          50: 'hsl(var(--gold-vivid-50))',
          60: 'hsl(var(--gold-vivid-60))',
          70: 'hsl(var(--gold-vivid-70))',
          80: 'hsl(var(--gold-vivid-80))'
        },
        yellow: {
          5: 'hsl(var(--yellow-5))',
          10: 'hsl(var(--yellow-10))',
          20: 'hsl(var(--yellow-20))',
          30: 'hsl(var(--yellow-30))',
          40: 'hsl(var(--yellow-40))',
          50: 'hsl(var(--yellow-50))',
          60: 'hsl(var(--yellow-60))',
          70: 'hsl(var(--yellow-70))',
          80: 'hsl(var(--yellow-80))',
          90: 'hsl(var(--yellow-90))'
        },
        'yellow-vivid': {
          5: 'hsl(var(--yellow-vivid-5))',
          10: 'hsl(var(--yellow-vivid-10))',
          20: 'hsl(var(--yellow-vivid-20))',
          30: 'hsl(var(--yellow-vivid-30))',
          40: 'hsl(var(--yellow-vivid-40))',
          50: 'hsl(var(--yellow-vivid-50))',
          60: 'hsl(var(--yellow-vivid-60))',
          70: 'hsl(var(--yellow-vivid-70))',
          80: 'hsl(var(--yellow-vivid-80))'
        },
        green: {
          5: 'hsl(var(--green-5))',
          10: 'hsl(var(--green-10))',
          20: 'hsl(var(--green-20))',
          30: 'hsl(var(--green-30))',
          40: 'hsl(var(--green-40))',
          50: 'hsl(var(--green-50))',
          60: 'hsl(var(--green-60))',
          70: 'hsl(var(--green-70))',
          80: 'hsl(var(--green-80))',
          90: 'hsl(var(--green-90))'
        },
        'green-vivid': {
          5: 'hsl(var(--green-vivid-5))',
          10: 'hsl(var(--green-vivid-10))',
          20: 'hsl(var(--green-vivid-20))',
          30: 'hsl(var(--green-vivid-30))',
          40: 'hsl(var(--green-vivid-40))',
          50: 'hsl(var(--green-vivid-50))',
          60: 'hsl(var(--green-vivid-60))',
          70: 'hsl(var(--green-vivid-70))',
          80: 'hsl(var(--green-vivid-80))'
        },
        'green-warm': {
          5: 'hsl(var(--green-warm-5))',
          10: 'hsl(var(--green-warm-10))',
          20: 'hsl(var(--green-warm-20))',
          30: 'hsl(var(--green-warm-30))',
          40: 'hsl(var(--green-warm-40))',
          50: 'hsl(var(--green-warm-50))',
          60: 'hsl(var(--green-warm-60))',
          70: 'hsl(var(--green-warm-70))',
          80: 'hsl(var(--green-warm-80))',
          90: 'hsl(var(--green-warm-90))'
        },
        'green-warm-vivid': {
          5: 'hsl(var(--green-warm-vivid-5))',
          10: 'hsl(var(--green-warm-vivid-10))',
          20: 'hsl(var(--green-warm-vivid-20))',
          30: 'hsl(var(--green-warm-vivid-30))',
          40: 'hsl(var(--green-warm-vivid-40))',
          50: 'hsl(var(--green-warm-vivid-50))',
          60: 'hsl(var(--green-warm-vivid-60))',
          70: 'hsl(var(--green-warm-vivid-70))',
          80: 'hsl(var(--green-warm-vivid-80))'
        },
        'green-cool': {
          5: 'hsl(var(--green-cool-5))',
          10: 'hsl(var(--green-cool-10))',
          20: 'hsl(var(--green-cool-20))',
          30: 'hsl(var(--green-cool-30))',
          40: 'hsl(var(--green-cool-40))',
          50: 'hsl(var(--green-cool-50))',
          60: 'hsl(var(--green-cool-60))',
          70: 'hsl(var(--green-cool-70))',
          80: 'hsl(var(--green-cool-80))',
          90: 'hsl(var(--green-cool-90))'
        },
        'green-cool-vivid': {
          5: 'hsl(var(--green-cool-vivid-5))',
          10: 'hsl(var(--green-cool-vivid-10))',
          20: 'hsl(var(--green-cool-vivid-20))',
          30: 'hsl(var(--green-cool-vivid-30))',
          40: 'hsl(var(--green-cool-vivid-40))',
          50: 'hsl(var(--green-cool-vivid-50))',
          60: 'hsl(var(--green-cool-vivid-60))',
          70: 'hsl(var(--green-cool-vivid-70))',
          80: 'hsl(var(--green-cool-vivid-80))'
        },
        mint: {
          5: 'hsl(var(--mint-5))',
          10: 'hsl(var(--mint-10))',
          20: 'hsl(var(--mint-20))',
          30: 'hsl(var(--mint-30))',
          40: 'hsl(var(--mint-40))',
          50: 'hsl(var(--mint-50))',
          60: 'hsl(var(--mint-60))',
          70: 'hsl(var(--mint-70))',
          80: 'hsl(var(--mint-80))',
          90: 'hsl(var(--mint-90))'
        },
        'mint-vivid': {
          5: 'hsl(var(--mint-vivid-5))',
          10: 'hsl(var(--mint-vivid-10))',
          20: 'hsl(var(--mint-vivid-20))',
          30: 'hsl(var(--mint-vivid-30))',
          40: 'hsl(var(--mint-vivid-40))',
          50: 'hsl(var(--mint-vivid-50))',
          60: 'hsl(var(--mint-vivid-60))',
          70: 'hsl(var(--mint-vivid-70))',
          80: 'hsl(var(--mint-vivid-80))'
        },
        'mint-cool': {
          5: 'hsl(var(--mint-cool-5))',
          10: 'hsl(var(--mint-cool-10))',
          20: 'hsl(var(--mint-cool-20))',
          30: 'hsl(var(--mint-cool-30))',
          40: 'hsl(var(--mint-cool-40))',
          50: 'hsl(var(--mint-cool-50))',
          60: 'hsl(var(--mint-cool-60))',
          70: 'hsl(var(--mint-cool-70))',
          80: 'hsl(var(--mint-cool-80))',
          90: 'hsl(var(--mint-cool-90))'
        },
        'mint-cool-vivid': {
          5: 'hsl(var(--mint-cool-vivid-5))',
          10: 'hsl(var(--mint-cool-vivid-10))',
          20: 'hsl(var(--mint-cool-vivid-20))',
          30: 'hsl(var(--mint-cool-vivid-30))',
          40: 'hsl(var(--mint-cool-vivid-40))',
          50: 'hsl(var(--mint-cool-vivid-50))',
          60: 'hsl(var(--mint-cool-vivid-60))',
          70: 'hsl(var(--mint-cool-vivid-70))',
          80: 'hsl(var(--mint-cool-vivid-80))'
        },
        cyan: {
          5: 'hsl(var(--cyan-5))',
          10: 'hsl(var(--cyan-10))',
          20: 'hsl(var(--cyan-20))',
          30: 'hsl(var(--cyan-30))',
          40: 'hsl(var(--cyan-40))',
          50: 'hsl(var(--cyan-50))',
          60: 'hsl(var(--cyan-60))',
          70: 'hsl(var(--cyan-70))',
          80: 'hsl(var(--cyan-80))',
          90: 'hsl(var(--cyan-90))'
        },
        'cyan-vivid': {
          5: 'hsl(var(--cyan-vivid-5))',
          10: 'hsl(var(--cyan-vivid-10))',
          20: 'hsl(var(--cyan-vivid-20))',
          30: 'hsl(var(--cyan-vivid-30))',
          40: 'hsl(var(--cyan-vivid-40))',
          50: 'hsl(var(--cyan-vivid-50))',
          60: 'hsl(var(--cyan-vivid-60))',
          70: 'hsl(var(--cyan-vivid-70))',
          80: 'hsl(var(--cyan-vivid-80))'
        },
        blue: {
          5: 'hsl(var(--blue-5))',
          10: 'hsl(var(--blue-10))',
          20: 'hsl(var(--blue-20))',
          30: 'hsl(var(--blue-30))',
          40: 'hsl(var(--blue-40))',
          50: 'hsl(var(--blue-50))',
          60: 'hsl(var(--blue-60))',
          70: 'hsl(var(--blue-70))',
          80: 'hsl(var(--blue-80))',
          90: 'hsl(var(--blue-90))'
        },
        'blue-vivid': {
          5: 'hsl(var(--blue-vivid-5))',
          10: 'hsl(var(--blue-vivid-10))',
          20: 'hsl(var(--blue-vivid-20))',
          30: 'hsl(var(--blue-vivid-30))',
          40: 'hsl(var(--blue-vivid-40))',
          50: 'hsl(var(--blue-vivid-50))',
          60: 'hsl(var(--blue-vivid-60))',
          70: 'hsl(var(--blue-vivid-70))',
          80: 'hsl(var(--blue-vivid-80))'
        },
        'blue-warm': {
          5: 'hsl(var(--blue-warm-5))',
          10: 'hsl(var(--blue-warm-10))',
          20: 'hsl(var(--blue-warm-20))',
          30: 'hsl(var(--blue-warm-30))',
          40: 'hsl(var(--blue-warm-40))',
          50: 'hsl(var(--blue-warm-50))',
          60: 'hsl(var(--blue-warm-60))',
          70: 'hsl(var(--blue-warm-70))',
          80: 'hsl(var(--blue-warm-80))',
          90: 'hsl(var(--blue-warm-90))'
        },
        'blue-warm-vivid': {
          5: 'hsl(var(--blue-warm-vivid-5))',
          10: 'hsl(var(--blue-warm-vivid-10))',
          20: 'hsl(var(--blue-warm-vivid-20))',
          30: 'hsl(var(--blue-warm-vivid-30))',
          40: 'hsl(var(--blue-warm-vivid-40))',
          50: 'hsl(var(--blue-warm-vivid-50))',
          60: 'hsl(var(--blue-warm-vivid-60))',
          70: 'hsl(var(--blue-warm-vivid-70))',
          80: 'hsl(var(--blue-warm-vivid-80))'
        },
        'blue-cool': {
          5: 'hsl(var(--blue-cool-5))',
          10: 'hsl(var(--blue-cool-10))',
          20: 'hsl(var(--blue-cool-20))',
          30: 'hsl(var(--blue-cool-30))',
          40: 'hsl(var(--blue-cool-40))',
          50: 'hsl(var(--blue-cool-50))',
          60: 'hsl(var(--blue-cool-60))',
          70: 'hsl(var(--blue-cool-70))',
          80: 'hsl(var(--blue-cool-80))',
          90: 'hsl(var(--blue-cool-90))'
        },
        indigo: {
          5: 'hsl(var(--indigo-5))',
          10: 'hsl(var(--indigo-10))',
          20: 'hsl(var(--indigo-20))',
          30: 'hsl(var(--indigo-30))',
          40: 'hsl(var(--indigo-40))',
          50: 'hsl(var(--indigo-50))',
          60: 'hsl(var(--indigo-60))',
          70: 'hsl(var(--indigo-70))',
          80: 'hsl(var(--indigo-80))',
          90: 'hsl(var(--indigo-90))'
        },
        'indigo-vivid': {
          5: 'hsl(var(--indigo-vivid-5))',
          10: 'hsl(var(--indigo-vivid-10))',
          20: 'hsl(var(--indigo-vivid-20))',
          30: 'hsl(var(--indigo-vivid-30))',
          40: 'hsl(var(--indigo-vivid-40))',
          50: 'hsl(var(--indigo-vivid-50))',
          60: 'hsl(var(--indigo-vivid-60))',
          70: 'hsl(var(--indigo-vivid-70))',
          80: 'hsl(var(--indigo-vivid-80))'
        },
        'indigo-cool': {
          5: 'hsl(var(--indigo-cool-5))',
          10: 'hsl(var(--indigo-cool-10))',
          20: 'hsl(var(--indigo-cool-20))',
          30: 'hsl(var(--indigo-cool-30))',
          40: 'hsl(var(--indigo-cool-40))',
          50: 'hsl(var(--indigo-cool-50))',
          60: 'hsl(var(--indigo-cool-60))',
          70: 'hsl(var(--indigo-cool-70))',
          80: 'hsl(var(--indigo-cool-80))',
          90: 'hsl(var(--indigo-cool-90))'
        },
        'indigo-cool-vivid': {
          5: 'hsl(var(--indigo-cool-vivid-5))',
          10: 'hsl(var(--indigo-cool-vivid-10))',
          20: 'hsl(var(--indigo-cool-vivid-20))',
          30: 'hsl(var(--indigo-cool-vivid-30))',
          40: 'hsl(var(--indigo-cool-vivid-40))',
          50: 'hsl(var(--indigo-cool-vivid-50))',
          60: 'hsl(var(--indigo-cool-vivid-60))',
          70: 'hsl(var(--indigo-cool-vivid-70))',
          80: 'hsl(var(--indigo-cool-vivid-80))'
        },
        'indigo-warm': {
          5: 'hsl(var(--indigo-warm-5))',
          10: 'hsl(var(--indigo-warm-10))',
          20: 'hsl(var(--indigo-warm-20))',
          30: 'hsl(var(--indigo-warm-30))',
          40: 'hsl(var(--indigo-warm-40))',
          50: 'hsl(var(--indigo-warm-50))',
          60: 'hsl(var(--indigo-warm-60))',
          70: 'hsl(var(--indigo-warm-70))',
          80: 'hsl(var(--indigo-warm-80))',
          90: 'hsl(var(--indigo-warm-90))'
        },
        'indigo-warm-vivid': {
          5: 'hsl(var(--indigo-warm-vivid-5))',
          10: 'hsl(var(--indigo-warm-vivid-10))',
          20: 'hsl(var(--indigo-warm-vivid-20))',
          30: 'hsl(var(--indigo-warm-vivid-30))',
          40: 'hsl(var(--indigo-warm-vivid-40))',
          50: 'hsl(var(--indigo-warm-vivid-50))',
          60: 'hsl(var(--indigo-warm-vivid-60))',
          70: 'hsl(var(--indigo-warm-vivid-70))',
          80: 'hsl(var(--indigo-warm-vivid-80))'
        },
        violet: {
          5: 'hsl(var(--violet-5))',
          10: 'hsl(var(--violet-10))',
          20: 'hsl(var(--violet-20))',
          30: 'hsl(var(--violet-30))',
          40: 'hsl(var(--violet-40))',
          50: 'hsl(var(--violet-50))',
          60: 'hsl(var(--violet-60))',
          70: 'hsl(var(--violet-70))',
          80: 'hsl(var(--violet-80))',
          90: 'hsl(var(--violet-90))'
        },
        'violet-vivid': {
          5: 'hsl(var(--violet-vivid-5))',
          10: 'hsl(var(--violet-vivid-10))',
          20: 'hsl(var(--violet-vivid-20))',
          30: 'hsl(var(--violet-vivid-30))',
          40: 'hsl(var(--violet-vivid-40))',
          50: 'hsl(var(--violet-vivid-50))',
          60: 'hsl(var(--violet-vivid-60))',
          70: 'hsl(var(--violet-vivid-70))',
          80: 'hsl(var(--violet-vivid-80))'
        },
        'violet-warm': {
          5: 'hsl(var(--violet-warm-5))',
          10: 'hsl(var(--violet-warm-10))',
          20: 'hsl(var(--violet-warm-20))',
          30: 'hsl(var(--violet-warm-30))',
          40: 'hsl(var(--violet-warm-40))',
          50: 'hsl(var(--violet-warm-50))',
          60: 'hsl(var(--violet-warm-60))',
          70: 'hsl(var(--violet-warm-70))',
          80: 'hsl(var(--violet-warm-80))',
          90: 'hsl(var(--violet-warm-90))'
        },
        'violet-warm-vivid': {
          5: 'hsl(var(--violet-warm-vivid-5))',
          10: 'hsl(var(--violet-warm-vivid-10))',
          20: 'hsl(var(--violet-warm-vivid-20))',
          30: 'hsl(var(--violet-warm-vivid-30))',
          40: 'hsl(var(--violet-warm-vivid-40))',
          50: 'hsl(var(--violet-warm-vivid-50))',
          60: 'hsl(var(--violet-warm-vivid-60))',
          70: 'hsl(var(--violet-warm-vivid-70))',
          80: 'hsl(var(--violet-warm-vivid-80))'
        },
        magenta: {
          5: 'hsl(var(--magenta-5))',
          10: 'hsl(var(--magenta-10))',
          20: 'hsl(var(--magenta-20))',
          30: 'hsl(var(--magenta-30))',
          40: 'hsl(var(--magenta-40))',
          50: 'hsl(var(--magenta-50))',
          60: 'hsl(var(--magenta-60))',
          70: 'hsl(var(--magenta-70))',
          80: 'hsl(var(--magenta-80))',
          90: 'hsl(var(--magenta-90))'
        },
        'magenta-vivid': {
          5: 'hsl(var(--magenta-vivid-5))',
          10: 'hsl(var(--magenta-vivid-10))',
          20: 'hsl(var(--magenta-vivid-20))',
          30: 'hsl(var(--magenta-vivid-30))',
          40: 'hsl(var(--magenta-vivid-40))',
          50: 'hsl(var(--magenta-vivid-50))',
          60: 'hsl(var(--magenta-vivid-60))',
          70: 'hsl(var(--magenta-vivid-70))',
          80: 'hsl(var(--magenta-vivid-80))'
        },
        gray: {
          1: 'hsl(var(--gray-1))',
          2: 'hsl(var(--gray-2))',
          3: 'hsl(var(--gray-3))',
          4: 'hsl(var(--gray-4))',
          5: 'hsl(var(--gray-5))',
          10: 'hsl(var(--gray-10))',
          20: 'hsl(var(--gray-20))',
          30: 'hsl(var(--gray-30))',
          40: 'hsl(var(--gray-40))',
          50: 'hsl(var(--gray-50))',
          60: 'hsl(var(--gray-60))',
          70: 'hsl(var(--gray-70))',
          80: 'hsl(var(--gray-80))',
          90: 'hsl(var(--gray-90))'
        },
        'gray-cool': {
          1: 'hsl(var(--gray-cool-1))',
          2: 'hsl(var(--gray-cool-2))',
          3: 'hsl(var(--gray-cool-3))',
          4: 'hsl(var(--gray-cool-4))',
          5: 'hsl(var(--gray-cool-5))',
          10: 'hsl(var(--gray-cool-10))',
          20: 'hsl(var(--gray-cool-20))',
          30: 'hsl(var(--gray-cool-30))',
          40: 'hsl(var(--gray-cool-40))',
          50: 'hsl(var(--gray-cool-50))',
          60: 'hsl(var(--gray-cool-60))',
          70: 'hsl(var(--gray-cool-70))',
          80: 'hsl(var(--gray-cool-80))',
          90: 'hsl(var(--gray-cool-90))'
        },
        'gray-warm': {
          1: 'hsl(var(--gray-warm-1))',
          2: 'hsl(var(--gray-warm-2))',
          3: 'hsl(var(--gray-warm-3))',
          4: 'hsl(var(--gray-warm-4))',
          5: 'hsl(var(--gray-warm-5))',
          10: 'hsl(var(--gray-warm-10))',
          20: 'hsl(var(--gray-warm-20))',
          30: 'hsl(var(--gray-warm-30))',
          40: 'hsl(var(--gray-warm-40))',
          50: 'hsl(var(--gray-warm-50))',
          60: 'hsl(var(--gray-warm-60))',
          70: 'hsl(var(--gray-warm-70))',
          80: 'hsl(var(--gray-warm-80))',
          90: 'hsl(var(--gray-warm-90))'
        },
        inverse: {
          DEFAULT: 'hsl(var(--inverse-default))',
          border: 'hsl(var(--inverse-border))',
          'border-hover': 'hsl(var(--inverse-border-hover))',
          'border-active': 'hsl(var(--inverse-border-active))',
          text: 'hsl(var(--inverse-text))',
          'text-hover': 'hsl(var(--inverse-text-hover))',
          'text-active': 'hsl(var(--inverse-text-active))'
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
    },
    darkMode: {
      background: '#0C0A09',
      foreground: '#FAFAFA',

      primary: {
        DEFAULT: '#73B3E7',
        hover: '#73B3E7',
        active: '#2D7BBF'
      },
      secondary: {
        DEFAULT: '#F2938C',
        hover: '#E85D57',
        active: '#B31B1B'
      },
      'accent-cool': {
        DEFAULT: '#28A0CB',
        hover: '#07648D',
        active: '#044E6C'
      },
      'accent-warm': {
        DEFAULT: '#C05600',
        hover: '#775540',
        active: '#332D29'
      }
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
`;

export const NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;
