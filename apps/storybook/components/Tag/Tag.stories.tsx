import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Tag } from './Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Tag>;

export default meta;

export const Default: StoryObj<typeof Tag> = {
  render: () => (
    <View className='flex-1 items-center justify-center gap-5'>
      <Tag label='TAG' />
      <Tag label='TAG' size='big' />
    </View>
  )
};

export const Examples: StoryObj<typeof Tag> = {
  render: () => (
    <View className='flex-1 items-center justify-center gap-5'>
      <Tag label='new' />
      <Tag label='beta' size='big' />
      <Tag label='pro' />
      <Tag label='sale' size='big' />
    </View>
  )
};
