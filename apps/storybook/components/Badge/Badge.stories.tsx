import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Badge } from './Badge';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Badge>
      <Text>Badge</Text>
    </Badge>
  )
};

export const Secondary: Story = {
  render: () => (
    <Badge variant="secondary">
      <Text>Secondary</Text>
    </Badge>
  )
};

export const Destructive: Story = {
  render: () => (
    <Badge variant="destructive">
      <Text>Destructive</Text>
    </Badge>
  )
};

export const Outline: Story = {
  render: () => (
    <Badge variant="outline">
      <Text>Outline</Text>
    </Badge>
  )
};

export const AllVariants: Story = {
  render: () => (
    <View className="flex-row gap-2 flex-wrap">
      <Badge>
        <Text>Default</Text>
      </Badge>
      <Badge variant="secondary">
        <Text>Secondary</Text>
      </Badge>
      <Badge variant="destructive">
        <Text>Destructive</Text>
      </Badge>
      <Badge variant="outline">
        <Text>Outline</Text>
      </Badge>
    </View>
  ),
};
