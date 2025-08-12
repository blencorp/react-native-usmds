import { StorybookConfig } from '@storybook/react-native-web-vite';

const main: StorybookConfig = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook', 'storybook-dark-mode'],

  framework: {
    name: '@storybook/react-native-web-vite',
    // @ts-ignore - modulesToTranspile is supported but types may be outdated
    options: {
      modulesToTranspile: [
        '@rn-primitives/portal',
        '@rn-primitives/slot',
        '@rn-primitives/types',
        '@rn-primitives/avatar',
        '@rn-primitives/collapsible',
        '@rn-primitives/dialog',
        '@rn-primitives/progress'
      ],
      pluginReactOptions: {
        jsxImportSource: "nativewind",
      },
    }
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen'
  }
};

export default main;
