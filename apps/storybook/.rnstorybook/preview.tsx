import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import { PortalHost } from '@rn-primitives/portal';
import * as React from 'react';

const withPortal = (Story: React.ComponentType) => {
  return (
    <>
      <Story />
      <PortalHost />
    </>
  );
};

const preview: Preview = {
  decorators: [withBackgrounds, withPortal],

  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' }
      ]
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
