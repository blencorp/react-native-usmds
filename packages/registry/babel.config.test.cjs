module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@react-native/babel-preset',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript'
    ],
    plugins: [['@babel/plugin-transform-private-methods', { loose: true }]]
  };
};
