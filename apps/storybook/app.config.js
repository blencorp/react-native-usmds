export default ({ config }) => ({
  ...config,
  name: 'HelloWorld',
  slug: 'expo-template-blank-typescript',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  newArchEnabled: true,
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: 'com.juliusoh.expo-template-blank-typescript'
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED || true,
    eas: {
      projectId: '78815632-b857-48dc-aad5-e28b6bde764f'
    }
  }
});
