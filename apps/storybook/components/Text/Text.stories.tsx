import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@blen/react-native-usmds-ui-internal';
import { View } from 'react-native';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    )
  ],
  args: {
    children: 'Sample Text'
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional Tailwind classes'
    },
    asChild: {
      control: 'boolean',
      description: 'Use Slot component instead of RNText'
    }
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text'
  }
};

export const CustomStyle: Story = {
  args: {
    children: 'Styled Text',
    className: 'text-2xl font-bold text-blue-500'
  }
};

export const LongText: Story = {
  args: {
    children:
      'This is a longer piece of text that demonstrates how the component handles multiple lines of content. It should wrap naturally and maintain proper spacing.'
  }
};

export const WithContext: Story = {
  decorators: [
    (Story) => (
      <View className='bg-gray-100 p-4 rounded-md'>
        <Story />
      </View>
    )
  ],
  args: {
    children: 'Text with Context'
  }
};

export const Variants: Story = {
  render: () => (
    <View className='space-y-4'>
      <Text className='text-sm'>Small Text</Text>
      <Text className='text-base'>Base Text</Text>
      <Text className='text-lg'>Large Text</Text>
      <Text className='text-xl font-bold'>Bold Text</Text>
      <Text className='italic'>Italic Text</Text>
      <Text className='underline'>Underlined Text</Text>
      <Text className='text-primary'>Primary Color Text</Text>
      <Text className='text-secondary'>Secondary Color Text</Text>
    </View>
  )
};
