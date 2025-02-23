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
          DEFAULT: '#005EA2',
          hover: 'hsl(var(--primary-hover))',
          active: 'hsl(var(--primary-active))',
          lighter: '#D9E8F6',
          light: '#73B3E7',
          vivid: '#0050D8',
          dark: '#1A4480',
          darker: '#162E51'
        },
        secondary: {
          DEFAULT: '#D83933',
          hover: 'hsl(var(--secondary-hover))',
          active: 'hsl(var(--secondary-active))',
          lighter: '#F8DFE2',
          light: '#F2938C',
          vivid: '#E41D3D',
          dark: '#B50909',
          darker: '#8B0A03'
        },
        accent: {
          cool: {
            DEFAULT: '#00BDE3',
            hover: 'hsl(var(--accent-cool-hover))',
            active: 'hsl(var(--accent-cool-active))',
            lighter: '#E1F3F8',
            light: '#97D4EA',
            dark: '#28A0CB',
            darker: '#07648D'
          },
          warm: {
            DEFAULT: '#FA9441',
            hover: 'hsl(var(--accent-warm-hover))',
            active: 'hsl(var(--accent-warm-active))',
            lighter: '#F2E4D4',
            light: '#FFBC78',
            dark: '#C05600',
            darker: '#775540'
          }
        },
        base: {
          DEFAULT: '#71767A',
          hover: 'hsl(var(--base-hover))',
          active: 'hsl(var(--base-active))',
          lightest: '#F0F0F0',
          lighter: '#DFE1E2',
          light: '#A9AEB1',
          dark: '#565C65',
          darker: '#3D4551',
          darkest: '#1B1B1B',
          ink: '#1B1B1B'
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
        },
        // State Colors
        info: {
          DEFAULT: '#00BDE3', // info
          lighter: '#E7F6F8', // info-lighter
          light: '#99DEEA', // info-light
          dark: '#009EC1', // info-dark
          darker: '#2E6276' // info-darker
        },
        error: {
          DEFAULT: '#D54309', // error
          lighter: '#F4E3DB', // error-lighter
          light: '#F39268', // error-light
          dark: '#B50909', // error-dark
          darker: '#6F3331' // error-darker
        },
        warning: {
          DEFAULT: '#FFBE2E', // warning
          lighter: '#FAF3D1', // warning-lighter
          light: '#FEE685', // warning-light
          dark: '#E5A000', // warning-dark
          darker: '#936F38' // warning-darker
        },
        success: {
          DEFAULT: '#00A91C', // success
          lighter: '#ECF3EC', // success-lighter
          light: '#70E17B', // success-light
          dark: '#4D8055', // success-dark
          darker: '#446443' // success-darker
        },
        disabled: {
          DEFAULT: '#757575', // disabled (gray-50)
          lighter: '#C9C9C9', // disabled-lighter (gray-20)
          light: '#919191', // disabled-light (gray-40)
          dark: '#454545', // disabled-dark (gray-70)
          darker: '#1B1B1B' // disabled-darker (gray-90)
        },
        emergency: {
          DEFAULT: '#9C3D10', // emergency
          dark: '#332D29' // emergency-dark
        },
        // System Colors - Red Variations
        'red-cool': {
          5: '#F8EFF1',
          10: '#F3E1E4',
          20: '#ECBEC6',
          30: '#E09AA6',
          40: '#E16B80',
          50: '#CD425B',
          60: '#9E394B',
          70: '#68363F',
          80: '#40282C',
          90: '#1E1517'
        },
        'red-cool-vivid': {
          5: '#FFF0F3',
          10: '#F8DEE1',
          20: '#F8B9C5',
          30: '#FD8BA0',
          40: '#F45D79',
          50: '#E41B3C',
          60: '#B41D39',
          70: '#832133',
          80: '#4F1C24'
        },
        red: {
          5: '#F9EEEE',
          10: '#F8E1DE',
          20: '#F7BBB1',
          30: '#F2938C',
          40: '#E9695F',
          50: '#D83933',
          60: '#A23737',
          70: '#6F3331',
          80: '#3E2927',
          90: '#1B1616'
        },
        'red-warm': {
          5: '#F6EFEA',
          10: '#F4E3DB',
          20: '#ECC0A7',
          30: '#DCA081',
          40: '#D27A56',
          50: '#C3512C',
          60: '#805039',
          70: '#524236',
          80: '#332D29',
          90: '#1F1C18'
        },
        'red-warm-vivid': {
          5: '#FFF5EE',
          10: '#FCE1D4',
          20: '#F6BD9C',
          30: '#F39268',
          40: '#EF5E25',
          50: '#D54309',
          60: '#9C3D10',
          70: '#63340F',
          80: '#3E2A1E'
        },
        'red-vivid': {
          5: '#FFF3F2',
          10: '#FDE0DB',
          20: '#FDB8AE',
          30: '#FF8D7B',
          40: '#FB5A47',
          50: '#E52207',
          60: '#B50909',
          70: '#8B0A03',
          80: '#5C1111'
        },
        // Orange Variations
        'orange-warm': {
          5: '#FAEEE5',
          10: '#FBE0D0',
          20: '#F7BCA2',
          30: '#F3966D',
          40: '#E17141',
          50: '#BD5727',
          60: '#914734',
          70: '#633A32',
          80: '#3D2925',
          90: '#1C1615'
        },
        'orange-warm-vivid': {
          5: '#FFF3EA',
          10: '#FFE2D1',
          20: '#FBBAA7',
          30: '#FC906D',
          40: '#FF580A',
          50: '#CF4900',
          60: '#A72F10',
          70: '#782312',
          80: '#3D231D'
        },
        orange: {
          5: '#F6EFE9',
          10: '#F2E4D4',
          20: '#F3BF90',
          30: '#F09860',
          40: '#DD7533',
          50: '#A86437',
          60: '#775540',
          70: '#524236',
          80: '#332D27',
          90: '#1B1614'
        },
        'orange-vivid': {
          5: '#FEF2E4',
          10: '#FCE2C5',
          20: '#FFBC78',
          30: '#FA9441',
          40: '#E66F0E',
          50: '#C05600',
          60: '#8C471C',
          70: '#5F3617',
          80: '#352313'
        },
        // Gold Variations
        gold: {
          5: '#F5F0E6',
          10: '#F1E5CD',
          20: '#DEC69A',
          30: '#C7A97B',
          40: '#AD8B65',
          50: '#8E704F',
          60: '#6B5947',
          70: '#4D4438',
          80: '#322D26',
          90: '#191714'
        },
        'gold-vivid': {
          5: '#FEF0C8',
          10: '#FFE396',
          20: '#FFBE2E',
          30: '#E5A000',
          40: '#C2850C',
          50: '#936F38',
          60: '#7A591A',
          70: '#5C410A',
          80: '#3B2B15'
        },
        // Yellow Variations
        yellow: {
          5: '#FAF3D1',
          10: '#F5E6AF',
          20: '#E6C74C',
          30: '#C9AB48',
          40: '#A88F48',
          50: '#8A7237',
          60: '#6B5A39',
          70: '#504332',
          80: '#332D27',
          90: '#1A1614'
        },
        'yellow-vivid': {
          5: '#FFF5C2',
          10: '#FEE685',
          20: '#FACE00',
          30: '#DDAA01',
          40: '#B38C00',
          50: '#947100',
          60: '#776017',
          70: '#5C4809',
          80: '#422D19'
        },

        // Green Variations
        green: {
          5: '#EAF4DD',
          10: '#DFEACD',
          20: '#B8D293',
          30: '#9BB672',
          40: '#7D9B4E',
          50: '#607F35',
          60: '#4C6424',
          70: '#3C4A29',
          80: '#293021',
          90: '#161814'
        },
        'green-vivid': {
          5: '#DDF9C7',
          10: '#C5EE93',
          20: '#98D035',
          30: '#7FB135',
          40: '#719F2A',
          50: '#538200',
          60: '#466C04',
          70: '#2F4A0B',
          80: '#243413'
        },
        'green-warm': {
          5: '#F1F4D7',
          10: '#E7EAB7',
          20: '#CBD17A',
          30: '#A6B557',
          40: '#8A984B',
          50: '#6F7A41',
          60: '#5A5F38',
          70: '#454540',
          80: '#2D2F21',
          90: '#171712'
        },
        'green-warm-vivid': {
          5: '#F5FBC1',
          10: '#E7F434',
          20: '#C5D30A',
          30: '#A3B72C',
          40: '#7E9C1D',
          50: '#6A7D00',
          60: '#5A6613',
          70: '#4B4E10',
          80: '#38380B'
        },
        'green-cool': {
          5: '#ECF3EC',
          10: '#DBEBDE',
          20: '#B4D0B9',
          30: '#86B98E',
          40: '#5E9F69',
          50: '#4D8055',
          60: '#446443',
          70: '#3D4551',
          80: '#28312A',
          90: '#1A1F1A'
        },
        'green-cool-vivid': {
          5: '#E3F5E1',
          10: '#B7F5BD',
          20: '#70E17B',
          30: '#21C834',
          40: '#00A91C',
          50: '#008817',
          60: '#216E1F',
          70: '#154C21',
          80: '#19311E'
        },

        // Mint Variations
        mint: {
          5: '#DBF6ED',
          10: '#C7EFE2',
          20: '#92D9BB',
          30: '#5ABF95',
          40: '#34A37E',
          50: '#2E8367',
          60: '#286846',
          70: '#204E34',
          80: '#193324',
          90: '#0D1A12'
        },
        'mint-vivid': {
          5: '#C9FBEB',
          10: '#83FCD4',
          20: '#0CEDA6',
          30: '#04C585',
          40: '#00A871',
          50: '#008659',
          60: '#146947',
          70: '#0C4E29',
          80: '#0D351E'
        },
        'mint-cool': {
          5: '#E0F7F6',
          10: '#C4EEEB',
          20: '#9BD4CF',
          30: '#6FBAB3',
          40: '#4F9E99',
          50: '#40807E',
          60: '#376462',
          70: '#2A4B45',
          80: '#203131',
          90: '#111818'
        },
        'mint-cool-vivid': {
          5: '#D5FBF3',
          10: '#7EFBE1',
          20: '#29E1CB',
          30: '#1DC2AE',
          40: '#00A398',
          50: '#008480',
          60: '#0F6460',
          70: '#0B4B3F',
          80: '#123131'
        },
        // Cyan variations
        cyan: {
          5: '#E7F6F8',
          10: '#CCECF2',
          20: '#99DEEA',
          30: '#5DC0D1',
          40: '#449DAC',
          50: '#168092',
          60: '#2A646D',
          70: '#2C4A4E',
          80: '#203133',
          90: '#111819'
        },
        'cyan-vivid': {
          5: '#E5FAFF',
          10: '#A8F2FF',
          20: '#52DAF2',
          30: '#00BDE3',
          40: '#009EC1',
          50: '#0081A1',
          60: '#00687D',
          70: '#0E4F5C',
          80: '#093B44'
        },

        // Blue variations
        blue: {
          5: '#EFF6FB',
          10: '#D9E8F6',
          20: '#AACDEC',
          30: '#73B3E7',
          40: '#4F97D1',
          50: '#2378C3',
          60: '#2C608A',
          70: '#274863',
          80: '#1F303E',
          90: '#11181D'
        },
        'blue-vivid': {
          5: '#E8F5FF',
          10: '#CFE8FF',
          20: '#A1D3FF',
          30: '#58B4FF',
          40: '#2491FF',
          50: '#0076D6',
          60: '#005EA2',
          70: '#0B4778',
          80: '#112F4E'
        },
        'blue-warm': {
          5: '#ECF1F7',
          10: '#E1E7F1',
          20: '#BBCAE4',
          30: '#98AFD2',
          40: '#7292C7',
          50: '#4A77B4',
          60: '#345D96',
          70: '#2F4668',
          80: '#252F3E',
          90: '#13171F'
        },
        'blue-warm-vivid': {
          5: '#EDF5FF',
          10: '#D4E5FF',
          20: '#ADCDFF',
          30: '#81AEFC',
          40: '#5994F6',
          50: '#2672DE',
          60: '#0050D8',
          70: '#1A4480',
          80: '#162E51'
        },
        'blue-cool': {
          5: '#E7F2F5',
          10: '#DAE9EE',
          20: '#ADCFDC',
          30: '#82B4C9',
          40: '#6499AF',
          50: '#3A7D95',
          60: '#2E6276',
          70: '#224A58',
          80: '#14333D',
          90: '#0F191C'
        },

        // Indigo variations
        indigo: {
          5: '#EFEFF8',
          10: '#E5E4FA',
          20: '#C5C5F3',
          30: '#A5A8EB',
          40: '#8889DB',
          50: '#676CC8',
          60: '#4D52AF',
          70: '#3D4076',
          80: '#2B2C40',
          90: '#16171F'
        },
        'indigo-vivid': {
          5: '#F0F0FF',
          10: '#E0E0FF',
          20: '#CCCEFF',
          30: '#A3A7FA',
          40: '#8289FF',
          50: '#656BD7',
          60: '#4A50C4',
          70: '#3333A3',
          80: '#212463'
        },
        'indigo-cool': {
          5: '#EEF0F9',
          10: '#E1E6F9',
          20: '#BBC8F5',
          30: '#96ABEE',
          40: '#6B8EE8',
          50: '#496FD8',
          60: '#3F57A6',
          70: '#374274',
          80: '#292D42',
          90: '#151622'
        },
        'indigo-cool-vivid': {
          5: '#EDF0FF',
          10: '#DEE5FF',
          20: '#B8C8FF',
          30: '#94ADFF',
          40: '#628EF4',
          50: '#4866FF',
          60: '#3E4DED',
          70: '#222FBF',
          80: '#1B2B85'
        },

        // Indigo warm variations
        'indigo-warm': {
          5: '#F1EFF7',
          10: '#E7E3FA',
          20: '#CBC4F2',
          30: '#AFA5E8',
          40: '#9287D8',
          50: '#7665D1',
          60: '#5E519E',
          70: '#453C7B',
          80: '#2E2C40',
          90: '#18161D'
        },
        'indigo-warm-vivid': {
          5: '#F5F2FF',
          10: '#E4DEFF',
          20: '#CFC4FD',
          30: '#B69FFF',
          40: '#967EFB',
          50: '#745FE9',
          60: '#5942D2',
          70: '#3D2C9D',
          80: '#261F5B'
        },

        // Violet variations
        violet: {
          5: '#F4F1F9',
          10: '#EBE3F9',
          20: '#D0C3E9',
          30: '#B8A2E3',
          40: '#9D84D2',
          50: '#8168B3',
          60: '#665190',
          70: '#4C3D69',
          80: '#312B3F',
          90: '#18161D'
        },
        'violet-vivid': {
          5: '#F7F2FF',
          10: '#EDE3FF',
          20: '#D5BFFF',
          30: '#C39DEB',
          40: '#AD79E9',
          50: '#9355DC',
          60: '#783CB9',
          70: '#54278F',
          80: '#39215E'
        },
        'violet-warm': {
          5: '#F8F0F9',
          10: '#F6DFF8',
          20: '#E2BEE4',
          30: '#D29AD8',
          40: '#BF77C8',
          50: '#B04ABD',
          60: '#864381',
          70: '#5C395A',
          80: '#382936',
          90: '#1B151B'
        },
        'violet-warm-vivid': {
          5: '#FEF2FF',
          10: '#FBDCFF',
          20: '#F4B2FF',
          30: '#EE83FF',
          40: '#D85BEF',
          50: '#BE32D0',
          60: '#93348C',
          70: '#711E6C',
          80: '#481441'
        },

        // Magenta variations
        magenta: {
          5: '#F9F0F2',
          10: '#F6E1E8',
          20: '#F0BBCC',
          30: '#E895B3',
          40: '#E0699F',
          50: '#C84281',
          60: '#8B4566',
          70: '#66364B',
          80: '#402731',
          90: '#1B1617'
        },
        'magenta-vivid': {
          5: '#FFF2F5',
          10: '#FFDDEA',
          20: '#FFB4CF',
          30: '#FF87B2',
          40: '#FD4496',
          50: '#D72D79',
          60: '#AB2165',
          70: '#731F44',
          80: '#4F172E'
        },

        // Gray variations
        gray: {
          1: '#FCFCFC',
          2: '#F9F9F9',
          3: '#F6F6F6',
          4: '#F3F3F3',
          5: '#F0F0F0',
          10: '#E6E6E6',
          20: '#C9C9C9',
          30: '#ADADAD',
          40: '#919191',
          50: '#757575',
          60: '#5C5C5C',
          70: '#454545',
          80: '#2E2E2E',
          90: '#1B1B1B'
        },
        'gray-cool': {
          1: '#FBFCFD',
          2: '#F7F9FA',
          3: '#F5F6F7',
          4: '#F1F3F6',
          5: '#EDEFF0',
          10: '#DFE1E2',
          20: '#C6CACE',
          30: '#A9AEB1',
          40: '#8D9297',
          50: '#71767A',
          60: '#565C65',
          70: '#3D4551',
          80: '#2D2E2F',
          90: '#1C1D1F'
        },
        'gray-warm': {
          1: '#FCFCFB',
          2: '#F9F9F7',
          3: '#F6F6F2',
          4: '#F5F5F0',
          5: '#F0F0EC',
          10: '#E6E6E2',
          20: '#CAC9C0',
          30: '#AFAEA2',
          40: '#929285',
          50: '#76766A',
          60: '#5D5D52',
          70: '#454540',
          80: '#2E2E2A',
          90: '#171716'
        }
      },
      borderWidth: {
        hairline: hairlineWidth()
      },
      fontSize: {
        '3xs': ['13px', { lineHeight: '16px', fontWeight: '400' }],
        '2xs': ['14px', { lineHeight: '18px', fontWeight: '400' }],
        xs: ['15px', { lineHeight: '19px', fontWeight: '400' }],
        sm: ['16px', { lineHeight: '20px', fontWeight: '400' }],
        md: ['17px', { lineHeight: '21px', fontWeight: '400' }],
        lg: ['22px', { lineHeight: '28px', fontWeight: '400' }],
        xl: ['32px', { lineHeight: '40px', fontWeight: '400' }],
        '2xl': ['42px', { lineHeight: '53px', fontWeight: '400' }],
        '3xl': ['48px', { lineHeight: '60px', fontWeight: '400' }]
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
}

@layer components {
    /* Headings */
    .usa-prose-h1 {
        @apply text-2xl font-normal;
        margin-top: 1em;
    }

    .usa-prose-h2 {
        @apply text-xl font-normal;
        margin-top: 105px;
    }

    .usa-prose-h3 {
        @apply text-lg font-normal;
        margin-top: 1em;
    }

    .usa-prose-h4 {
        @apply text-sm font-normal;
        line-height: theme('lineHeight.heading-2');
        margin-top: 105px;
        measure: 6;
    }

    .usa-prose-h5 {
        @apply text-xs font-normal;
        line-height: theme('lineHeight.heading-2');
        margin-top: 105px;
        measure: 6;
    }

    .usa-prose-h6 {
        @apply text-3xs font-normal uppercase;
        line-height: theme('lineHeight.heading-2');
        margin-top: 105px;
        measure: 6;
        letter-spacing: 1px;
    }

    /* Body text */
    .usa-prose-body {
        @apply text-sm font-normal;
        line-height: theme('lineHeight.body-5');
        measure: 6;
    }

    /* Intro text */
    .usa-prose-intro {
        @apply text-xl font-normal;
        line-height: theme('lineHeight.alt-5');
        margin-top: 1em;
        measure: 6;
    }

    /* Lists */
    .usa-prose-ol {
        @apply list-decimal pl-4;
        margin-top: 1em;
    }

    .usa-prose-ul {
        @apply list-disc pl-4;
        margin-top: 1em;
    }

    .usa-prose-li {
        margin-top: 0.5em;
    }
}

@layer utilities {
    /* Measure */
    .measure-6 {
        measure: 6;
    }
}
`;

export const NATIVEWIND_ENV = `/// <reference types="nativewind/types" />`;
