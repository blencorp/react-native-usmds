import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Textarea } from './TextArea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: () => <Textarea placeholder='Type your message here' />
};

export const WithValue: Story = {
  render: () => <Textarea placeholder='Type your message here' value='This is some pre-filled text in the textarea.' />
};

export const Disabled: Story = {
  render: () => <Textarea placeholder='This field is disabled' editable={false} value='Disabled textarea content' />
};