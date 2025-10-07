const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './.rnstorybook/**/*.{ts,tsx}', '../../packages/registry/src/**/*.{ts,tsx}'],
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
