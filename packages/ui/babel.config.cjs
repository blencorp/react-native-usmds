/** @type {import('jest').Config} */

const config = {
  presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel']
};

module.exports = config;