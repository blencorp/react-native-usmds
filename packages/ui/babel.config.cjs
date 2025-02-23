/** @type {import('jest').Config} */

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [['@react-native/babel-preset'], ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@': './src'
          }
        }
      ]
    ]
  };
};
