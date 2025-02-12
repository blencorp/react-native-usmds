// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../../');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(projectRoot);

// Add workspace packages to watch folders
config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, 'node_modules'), path.resolve(workspaceRoot, 'node_modules')];

// Add workspace packages to resolver
config.resolver.extraNodeModules = {
  usmds: path.resolve(workspaceRoot, 'packages/ui')
};

// Apply NativeWind and Storybook transformers
const configWithNativeWind = withNativeWind(config, { input: './global.css' });
const withStorybook = require('@storybook/react-native/metro/withStorybook');

module.exports = withStorybook(configWithNativeWind);

/* , {
  enabled: process.env.STORYBOOK_ENABLED === 'true',
  configPath: path.resolve(__dirname, './.storybook'),
  // websockets: {
  // port: 7007,
  // host: '192.x.x.x',
  // host: 'localhost',
  // },
} */
