import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextClassContext } from './Text';
import { View } from 'react-native';
import * as Slot from '@rn-primitives/slot';

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

export const WithContext: Story = {
  render: () => (
    <TextClassContext.Provider value='text-primary font-bold'>
      <Text>This text inherits styles from context</Text>
      <Text className='text-secondary'>This overrides the context color</Text>
    </TextClassContext.Provider>
  )
};

export const AsChild: Story = {
  render: () => (
    <Text asChild>
      <Slot.Text>This text uses Slot component</Slot.Text>
    </Text>
  )
};

export const TypographyVariants: Story = {
  render: () => (
    <View className='space-y-4'>
      <Text className='text-[40px] leading-[48px] font-bold'>Display Large</Text>
      <Text className='text-[36px] leading-[44px] font-bold'>Display Medium</Text>
      <Text className='text-[32px] leading-[40px] font-bold'>Display Small</Text>
      <Text className='text-[22px] leading-[28px]'>Heading Large</Text>
      <Text className='text-[20px] leading-[24px]'>Heading Medium</Text>
      <Text className='text-[18px] leading-[22px]'>Heading Small</Text>
      <Text className='text-[16px] leading-[20px]'>Body Large</Text>
      <Text className='text-[14px] leading-[18px]'>Body Medium</Text>
      <Text className='text-[12px] leading-[16px]'>Body Small</Text>
    </View>
  )
};

export const Colors: Story = {
  render: () => (
    <View className='space-y-2'>
      <Text className='text-base-ink'>Base Ink</Text>
      <Text className='text-primary'>Primary</Text>
      <Text className='text-secondary'>Secondary</Text>
      <Text className='text-error'>Error</Text>
      <Text className='text-success'>Success</Text>
      <Text className='text-warning'>Warning</Text>
    </View>
  )
};

export const Weights: Story = {
  render: () => (
    <View className='space-y-2'>
      <Text className='font-normal'>Normal (400)</Text>
      <Text className='font-medium'>Medium (500)</Text>
      <Text className='font-semibold'>Semibold (600)</Text>
      <Text className='font-bold'>Bold (700)</Text>
    </View>
  )
};
