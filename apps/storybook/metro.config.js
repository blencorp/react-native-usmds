const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

const STORYBOOK_ENABLED = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

const config = getDefaultConfig(__dirname);

// Ensure proper module resolution
config.resolver.resolverMainFields = ['sbmodern', ...config.resolver.resolverMainFields];

// Add additional watch folders for monorepo setup
config.watchFolders = [...(config.watchFolders || []), path.resolve(__dirname, '../../packages/ui')];

// First apply NativeWind configuration
const nativewindConfig = withNativeWind(config, {
  input: './global.css'
});

// Then apply Storybook configuration
module.exports = withStorybook(nativewindConfig, {
  enabled: STORYBOOK_ENABLED,
  onDisabledRemoveStorybook: !STORYBOOK_ENABLED,
  configPath: path.resolve(__dirname, './.rnstorybook')
});
