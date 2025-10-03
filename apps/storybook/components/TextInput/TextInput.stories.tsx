import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { TextInput } from './TextInput';

const meta = {
  title: 'Components/Input',
  component: TextInput,
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
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => <TextInput placeholder='Email' />
};

export const WithValue: Story = {
  render: () => <TextInput placeholder='Email' value='john@example.com' />
};

export const Disabled: Story = {
  render: () => <TextInput placeholder='Email' editable={false} value='Disabled input' />
};

export const Password: Story = {
  render: () => <TextInput placeholder='Password' secureTextEntry />
};
