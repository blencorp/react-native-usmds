import { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';
import { View } from 'react-native';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const SuccessOneLine: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Snackbar
        isVisible={true}
        layout='one-line'
        variant='success'
        message='Message'
        onAction={() => console.log('Action clicked')}
        onDismiss={() => console.log('Dismissed')}
      />
    </View>
  )
};

export const ErrorOneLine: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Snackbar
        isVisible={true}
        layout='one-line'
        variant='error'
        message='Message'
        onAction={() => console.log('Action clicked')}
        onDismiss={() => console.log('Dismissed')}
      />
    </View>
  )
};

export const SuccessTwoLines: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Snackbar
        isVisible={true}
        layout='two-lines'
        variant='success'
        message='Message sent successfully with additional context that wraps to a second line'
        onAction={() => console.log('Action clicked')}
        onDismiss={() => console.log('Dismissed')}
      />
    </View>
  )
};

export const ErrorTwoLines: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Snackbar
        isVisible={true}
        layout='two-lines'
        variant='error'
        message='Failed to send message with additional context that wraps to a second line'
        onAction={() => console.log('Action clicked')}
        onDismiss={() => console.log('Dismissed')}
      />
    </View>
  )
};
