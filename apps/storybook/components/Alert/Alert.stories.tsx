import { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './Alert';
import { View } from 'react-native';
import { Terminal, AlertCircle } from 'lucide-react-native';

const meta = {
  title: 'Components/Alert',
  component: Alert,
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
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert icon={Terminal}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  )
};

export const Destructive: Story = {
  render: () => (
    <Alert icon={AlertCircle} variant="destructive">
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
};
