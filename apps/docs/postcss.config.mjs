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
          discardEmpty: true,
          discardUnused: false, // Let Tailwind handle this
          minifyFontValues: true,
          minifySelectors: true,
          normalizeWhitespace: true,
        }],
      },
    } : {}),
  },
};
