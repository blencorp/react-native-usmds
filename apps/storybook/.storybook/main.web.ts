import { StorybookConfig } from '@storybook/react-vite';

const main: StorybookConfig = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook', 'storybook-dark-mode'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen'
  }
};

export default main;