import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';
import '../global.css';

// Decorator to apply dark mode class to the html element for NativeWind
const withDarkMode = (Story: any) => {
  const isDark = useDarkMode();

  React.useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="bg-background text-foreground min-h-screen p-4">
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      // Override the default dark theme for Storybook UI
      dark: { ...themes.dark, appBg: '#1B1B1B', appContentBg: '#1B1B1B' },
      // Override the default light theme for Storybook UI
      light: { ...themes.normal, appBg: '#FFFFFF', appContentBg: '#FFFFFF' },
      // Apply dark class to html element
      darkClass: 'dark',
      lightClass: 'light',
      // Apply to the preview iframe
      stylePreview: true,
      // Target the html element
      classTarget: 'html'
    },
    backgrounds: { disable: true }
  },

  decorators: [withDarkMode],

  tags: ["autodocs"]
};

export default preview;
