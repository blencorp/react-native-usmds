import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';
import { Text } from 'react-native'; // Use React Native's Text directly for stories

// Define the Meta type with the correct component props
const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: <Text>Button</Text>
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'accent-cool', 'accent-warm', 'base', 'outline', 'inverse']
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'big', 'icon']
    },
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

// Define the Story type using the component props
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: <Text>Default Button</Text>
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: <Text>Secondary Button</Text>
  }
};

export const AccentCool: Story = {
  args: {
    variant: 'accent-cool',
    children: <Text>Accent Cool Button</Text>
  }
};
