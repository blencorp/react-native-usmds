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
        preset: [
          'cssnano-preset-advanced',
          {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            colormin: true,
            minifyFontValues: {
              removeQuotes: false,
            },
            discardUnused: true,
            mergeIdents: true,
            reduceIdents: true,
            discardEmpty: true,
            discardDuplicates: true,
            minifySelectors: true,
            uniqueSelectors: true,
            cssDeclarationSorter: true,
            autoprefixer: false,
            zindex: false, // Disable z-index optimization to prevent layout issues
          }
        ],
      },
    } : {}),
  },
};
