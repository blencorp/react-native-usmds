import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { TextInput } from './TextInput';
import { User } from 'lucide-react-native';

const meta = {
  title: 'Components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View className='p-4'>
      <TextInput label='Text input label' placeholder='Enter text' />
    </View>
  )
};

export const WithPrefix: Story = {
  render: () => (
    <View className='p-4'>
      <TextInput label='Text input label' variant='prefix' prefix={<User size={24} color='#757575' />} placeholder='Enter text' />
    </View>
  )
};

export const WithSuffix: Story = {
  render: () => (
    <View className='p-4'>
      <TextInput label='Text input label' variant='suffix' suffix='lbs.' placeholder='Enter text' />
    </View>
  )
};

export const Focused: Story = {
  render: () => (
    <View className='p-4'>
      <TextInput label='Text input label' state='focus' placeholder='Enter text' />
    </View>
  )
};

export const WithError: Story = {
  render: () => (
    <View className='p-4 ml-5'>
      <TextInput label='Text input label' state='error' errorMessage='Helpful error message' helperText='Helper text' placeholder='Enter text' />
    </View>
  )
};

export const Success: Story = {
  render: () => (
    <View className='p-4'>
      <TextInput label='Text input label' state='success' placeholder='Enter text' />
    </View>
  )
};

export const Disabled: Story = {
  render: () => (
    <View className='p-4'>
      <TextInput label='Text input label' state='disabled' placeholder='Enter text' />
    </View>
  )
};
