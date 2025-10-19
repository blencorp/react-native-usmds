export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: false,
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: false,
          colormin: false,
          minifyFontValues: {
            removeQuotes: false,
          },
        }],
      },
    } : {}),
  },
};
