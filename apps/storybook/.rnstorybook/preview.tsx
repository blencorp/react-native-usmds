import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import type { Preview } from '@storybook/react';
import { PortalHost } from '@rn-primitives/portal';
import * as React from 'react';
import { View } from 'react-native';
import { useColorScheme } from 'nativewind';

const withPortal = (Story: React.ComponentType) => {
  return (
    <>
      <Story />
      <PortalHost />
    </>
  );
};

const withDarkMode = (Story: React.ComponentType, context: any) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  // Get the color scheme from Storybook global toolbar
  const storybookColorScheme = context?.globals?.colorScheme || 'light';

  React.useEffect(() => {
    if (storybookColorScheme !== colorScheme) {
      setColorScheme(storybookColorScheme);
    }
  }, [storybookColorScheme, colorScheme, setColorScheme]);

  const isDark = colorScheme === 'dark';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? '#1B1B1B' : '#FFFFFF'
      }}
    >
      <Story />
    </View>
  );
};

const preview: Preview = {
  decorators: [withBackgrounds, withDarkMode, withPortal],

  globalTypes: {
    colorScheme: {
      name: 'Color Scheme',
      description: 'Toggle between light and dark mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light mode' },
          { value: 'dark', icon: 'moon', title: 'Dark mode' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },

  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'dark', value: '#1B1B1B' }
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
