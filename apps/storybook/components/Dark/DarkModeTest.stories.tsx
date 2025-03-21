import type { Meta, StoryObj } from '@storybook/react-native';
import { DarkModeTest } from './DarkModeTest';
import { View } from 'react-native';

const meta: Meta<typeof DarkModeTest> = {
  title: 'Components/DarkModeTest',
  component: DarkModeTest,
  decorators: [
    (Story) => (
      <View className='flex-1 bg-background dark:bg-gray-900'>
        <Story />
      </View>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof DarkModeTest>;

export const Default: Story = {};

// Optional: Add a specific dark mode story
export const DarkMode: Story = {
  parameters: {
    colorScheme: 'dark'
  }
};
