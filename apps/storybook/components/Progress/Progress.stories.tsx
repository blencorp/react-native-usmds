import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { View } from 'react-native';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { useState, useCallback, useEffect } from 'react';

const ProgressDemo = ({ initialValue = 40 }: { initialValue?: number }) => {
  const [progress, setProgress] = useState(initialValue);

  const randomize = useCallback(() => {
    setProgress(Math.floor(Math.random() * 100));
  }, []);

  return (
    <View className="flex-1 items-center justify-center gap-6 w-full">
      <Progress value={progress} className="w-full" />
      <Button onPress={randomize}>
        <Text>Randomize</Text>
      </Button>
    </View>
  );
};

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Progress value={60} className="w-full" />
};

export const Interactive: Story = {
  render: () => <ProgressDemo initialValue={40} />
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(interval);
    }, []);

    return <Progress value={progress} className="w-full" />;
  }
};
