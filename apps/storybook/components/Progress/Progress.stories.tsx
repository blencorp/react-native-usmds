import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { View, Pressable, Text } from 'react-native';
import { useState, useCallback } from 'react';

interface ProgressDemoProps {
  initialValue?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

const ProgressDemo = ({ initialValue = 40, size, variant = 'default' }: ProgressDemoProps) => {
  const [progress, setProgress] = useState(initialValue);

  const randomize = useCallback(() => {
    setProgress(Math.floor(Math.random() * 100));
  }, []);

  return (
    <View className="flex-1 items-center justify-center p-4 gap-6">
      <Progress 
        value={progress} 
        size={size} 
        variant={variant} 
        className="w-[400px]"
      />
      <Pressable
        onPress={randomize}
        className="bg-primary px-6 py-3 rounded-lg"
      >
        <Text className="text-white font-medium text-base">Randomize</Text>
      </Pressable>
    </View>
  );
};

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ProgressDemo initialValue={40} />
};

export const Small: Story = {
  render: () => <ProgressDemo initialValue={40} size="sm" />
};

export const Large: Story = {
  render: () => <ProgressDemo initialValue={40} size="lg" />
};

export const Success: Story = {
  render: () => <ProgressDemo initialValue={80} variant="success" />
};

export const Error: Story = {
  render: () => <ProgressDemo initialValue={40} variant="error" />
};

export const Warning: Story = {
  render: () => <ProgressDemo initialValue={60} variant="warning" />
};

export const Info: Story = {
  render: () => <ProgressDemo initialValue={80} variant="info" />
}; 