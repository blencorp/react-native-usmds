import { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';
import { View, Text, ScrollView } from 'react-native';
import { Bell } from 'lucide-react-native';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardApp: Story = {
  render: () => (
    <ScrollView>
      <View className='w-full max-w-[393px]'>
        <Banner variant='standard-app' title='An official app of the United States government' link="Here's how you know" />
      </View>
    </ScrollView>
  )
};

export const Welcome: Story = {
  render: () => (
    <ScrollView>
      <View className='w-full max-w-[393px] p-4'>
        <Banner variant='welcome' title='Good afternoon, Daniel' trailingIcon={<Bell color='#1B1B1B' size={24} />} />
      </View>
    </ScrollView>
  )
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-8 w-full max-w-[393px]'>
        <View>
          <Text className='text-lg font-bold mb-4'>Standard App Banner</Text>
          <Banner variant='standard-app' title='An official app of the United States government' link="Here's how you know" />
        </View>

        <View>
          <Text className='text-lg font-bold mb-4'>Welcome Banner</Text>
          <Banner variant='welcome' title='Good afternoon, Daniel' trailingIcon={<Bell color='#1B1B1B' size={24} />} />
        </View>
      </View>
    </ScrollView>
  )
};
