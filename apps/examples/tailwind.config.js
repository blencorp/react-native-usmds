const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005EA2', // primary
          dark: '#1A4480', // primary-dark
          darker: '#162E51', // primary-darker
          focus: '#2491FF' // focus state
        },
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
          500: '#005ea2', // Primary default
          600: '#1a4480', // Primary hover
          700: '#162e51', // Primary active
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
          500: '#d83933', // Secondary default
          600: '#8b1e1a', // Secondary hover
          700: '#5c1412', // Secondary active
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
        hairline: hairlineWidth()
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
