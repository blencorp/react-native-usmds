import type { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Default Badge',
    variant: 'default',
  },
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    label: 'Info',
    variant: 'info',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive',
    variant: 'destructive',
  },
};

// Example showing multiple badges in a row
export const AllVariants: Story = {
  render: () => (
    <View className="flex-row gap-2">
      <Badge label="Default" variant="default" />
      <Badge label="Success" variant="success" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Info" variant="info" />
      <Badge label="Destructive" variant="destructive" />
    </View>
  ),
};
