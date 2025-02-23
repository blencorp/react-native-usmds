import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <View className='p-4'>
      <TextArea label='Text input label' placeholder='Enter your text here' />
    </View>
  )
};

export const WithHelperText: Story = {
  render: () => (
    <View className='p-4'>
      <TextArea label='Text input label' helperText='Helper text' placeholder='Enter your text here' />
    </View>
  )
};

export const WithError: Story = {
  render: () => (
    <View className='p-4'>
      <TextArea label='Text input label' helperText='Error message' error={true} placeholder='Enter your text here' />
    </View>
  )
};

export const Disabled: Story = {
  render: () => (
    <View className='p-4'>
      <TextArea label='Text input label' placeholder='This field is disabled' editable={false} />
    </View>
  )
};
