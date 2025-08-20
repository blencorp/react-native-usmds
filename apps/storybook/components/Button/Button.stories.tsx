import type { Meta, StoryObj } from '@storybook/react';

import { View, ScrollView } from 'react-native';
import { Mail, ArrowRight } from 'lucide-react-native';
import { Button } from './Button';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1B1B1B' }
      ]
    }
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px]'>
        <Story />
      </View>
    )
  ],
  args: {
    children: <Text>Button</Text>
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'accent-cool', 'accent-warm', 'base', 'outline', 'inverse'],
      description: 'Button style variant'
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'big', 'icon'],
      description: 'Button size variant'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable button interactions'
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View>
          <Text className='text-sm mb-2'>Default</Text>
          <Button variant='default'>
            <Text>Default</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
};

export const Secondary: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View>
          <Text className='text-sm mb-2'>Default</Text>
          <Button variant='secondary'>
            <Text>Secondary</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
};

export const AccentCool: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View>
          <Text className='text-sm mb-2'>Default</Text>
          <Button variant='accent-cool'>
            <Text>Accent Cool</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
};

export const AccentWarm: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View>
          <Text className='text-sm mb-2'>Default</Text>
          <Button variant='accent-warm'>
            <Text>Accent Warm</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
};

export const Base: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View>
          <Text className='text-sm mb-2'>Default</Text>
          <Button variant='base'>
            <Text>Base</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
};

export const Outline: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View>
          <Text className='text-sm mb-2'>Default</Text>
          <Button variant='outline'>
            <Text>Outline</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  )
};

export const Inverse: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4 p-4'>
        <View className='bg-foreground p-4 rounded-md'>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2 text-white'>Default</Text>
              <Button variant='inverse'>
                <Text>Inverse</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

export const Sizes: Story = {
  render: () => (
    <ScrollView>
      <View className='flex-1 gap-4 p-4'>
        <Button size='sm'>
          <Text>Small Button</Text>
        </Button>
        <Button size='default'>
          <Text>Default Button</Text>
        </Button>
        <Button size='lg'>
          <Text>Large Button</Text>
        </Button>
        <Button size='big'>
          <Text>Big Button</Text>
        </Button>
        <Button size='icon'>
          <Mail className='text-primary-foreground' />
        </Button>
      </View>
    </ScrollView>
  )
};

export const WithIcons: Story = {
  render: () => (
    <ScrollView>
      <View className='flex-1 gap-4 p-4'>
        <Button startIcon={<Mail className='text-primary-foreground' />}>
          <Text>Start Icon</Text>
        </Button>
        <Button endIcon={<ArrowRight className='text-primary-foreground' />}>
          <Text>End Icon</Text>
        </Button>
        <Button startIcon={<Mail className='text-primary-foreground' />} endIcon={<ArrowRight className='text-primary-foreground' />}>
          <Text>Both Icons</Text>
        </Button>
      </View>
    </ScrollView>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Text>Disabled Button</Text>
  }
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-12 p-4 w-full max-w-[393px]'>
        {/* Primary */}
        <View>
          <Text className='text-lg font-bold mb-4'>Primary</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='default'>
                <Text>Primary</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Secondary */}
        <View>
          <Text className='text-lg font-bold mb-4'>Secondary</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='secondary'>
                <Text>Secondary</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Accent Cool */}
        <View>
          <Text className='text-lg font-bold mb-4'>Accent Cool</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='accent-cool'>
                <Text>Accent Cool</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Accent Warm */}
        <View>
          <Text className='text-lg font-bold mb-4'>Accent Warm</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='accent-warm'>
                <Text>Accent Warm</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Base */}
        <View>
          <Text className='text-lg font-bold mb-4'>Base</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='base'>
                <Text>Base</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Outline */}
        <View>
          <Text className='text-lg font-bold mb-4'>Outline</Text>
          <View className='space-y-4'>
            <View>
              <Text className='text-sm mb-2'>Default</Text>
              <Button variant='outline'>
                <Text>Outline</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Inverse */}
        <View className='w-full mb-8'>
          <Text className='text-lg font-bold mb-4'>Inverse</Text>
          <View className='bg-foreground p-4 rounded-md'>
            <View className='space-y-4'>
              <View>
                <Text className='text-sm mb-2 text-white'>Default</Text>
                <Button variant='inverse'>
                  <Text>Inverse</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};

export const Interactive: Story = {
  args: {
    children: (state) => <Text>{state.pressed ? 'Pressing!' : 'Interactive'}</Text>
  }
};
