import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconPaths } from './iconPaths';
import { View, Text } from 'react-native';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconPaths)
    },
    size: {
      control: { type: 'number' }
    },
    color: {
      control: { type: 'color' }
    }
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof Icon>;

// Basic usage
export const Default: Story = {
  args: {
    name: 'accessibility-new',
    size: 24,
    color: '#000000'
  }
};

// Show all icons
export const IconGallery: Story = {
  render: () => (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        padding: 20
      }}
    >
      {Object.keys(iconPaths).map((name) => (
        <View
          key={name}
          style={{
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            borderColor: '#eee',
            borderRadius: 4,
            width: 100
          }}
        >
          <Icon name={name as keyof typeof iconPaths} size={24} />
          <Text
            style={{
              fontSize: 12,
              marginTop: 8,
              textAlign: 'center'
            }}
          >
            {name}
          </Text>
        </View>
      ))}
    </View>
  )
};

// Different sizes
export const Sizes: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Icon name='accessibility-new' size={16} />
      <Icon name='accessibility-new' size={24} />
      <Icon name='accessibility-new' size={32} />
      <Icon name='accessibility-new' size={48} />
    </View>
  )
};

// Different colors
export const Colors: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Icon name='accessibility-new' color='#000000' />
      <Icon name='accessibility-new' color='#FF0000' />
      <Icon name='accessibility-new' color='#00FF00' />
      <Icon name='accessibility-new' color='#0000FF' />
    </View>
  )
};
