import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { View } from 'react-native';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const InfoDefault: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='info'
        alertStyle='default'
        title='Alert message'
        description={{
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const InfoNoHeader: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='info'
        alertStyle='no-header'
        description={{
          title: 'Short alert message.',
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const InfoList: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='info'
        alertStyle='list'
        title='Alert message'
        description={{
          messages: [
            {
              text: 'The primary emergency message and ',
              link: 'a link',
              suffix: ' for supporting context.'
            },
            {
              text: 'Another message, and ',
              link: 'another link',
              suffix: '.'
            },
            {
              text: 'A final emergency message.'
            }
          ]
        }}
      />
    </View>
  )
};

export const InfoSlim: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='info'
        alertStyle='slim'
        description={{
          title: 'Short alert message.',
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const InfoNoIcon: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='info'
        alertStyle='no-icon'
        description={{
          title: 'Short alert message.',
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const EmergencyDefault: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='emergency'
        alertStyle='default'
        title='Alert message'
        description={{
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const EmergencyNoHeader: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='emergency'
        alertStyle='no-header'
        description={{
          title: 'Short alert message.',
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const EmergencyList: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='emergency'
        alertStyle='list'
        title='Alert message'
        description={{
          messages: [
            {
              text: 'The primary emergency message and ',
              link: 'a link',
              suffix: ' for supporting context.'
            },
            {
              text: 'Another message, and ',
              link: 'another link',
              suffix: '.'
            },
            {
              text: 'A final emergency message.'
            }
          ]
        }}
      />
    </View>
  )
};

export const EmergencySlim: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='emergency'
        alertStyle='slim'
        description={{
          title: 'Short alert message.',
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};

export const EmergencyNoIcon: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <Alert
        variant='emergency'
        alertStyle='no-icon'
        description={{
          title: 'Short alert message.',
          body: 'Additional context and followup information including ',
          link: 'a link'
        }}
      />
    </View>
  )
};
