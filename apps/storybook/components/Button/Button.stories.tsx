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
      <View className='w-full max-w-[393px] p-4 bg-background'>
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
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'Button style variant'
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
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
  args: {
    children: <Text>Default</Text>
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: <Text>Secondary</Text>
  }
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: <Text>Destructive</Text>
  }
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: <Text>Outline</Text>
  }
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: <Text>Ghost</Text>
  }
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: <Text>Link</Text>
  }
};

export const Sizes: Story = {
  render: () => (
    <View className='flex-1 gap-4'>
      <Button size='sm'>
        <Text>Small</Text>
      </Button>
      <Button size='default'>
        <Text>Default</Text>
      </Button>
      <Button size='lg'>
        <Text>Large</Text>
      </Button>
      <Button size='icon'>
        <Mail />
      </Button>
    </View>
  )
};

export const WithIcon: Story = {
  render: () => (
    <View className='flex-1 gap-4'>
      <Button>
        <Mail className='mr-2' />
        <Text>With Icon</Text>
      </Button>
      <Button>
        <Text>With Icon</Text>
        <ArrowRight className='ml-2' />
      </Button>
    </View>
  )
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <Text>Disabled</Text>
  }
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView className="bg-background">
      <View className='gap-8 p-4 bg-background'>
        {/* Default */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Default</Text>
          <Button>
            <Text>Default</Text>
          </Button>
        </View>

        {/* Secondary */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Secondary</Text>
          <Button variant='secondary'>
            <Text>Secondary</Text>
          </Button>
        </View>

        {/* Destructive */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Destructive</Text>
          <Button variant='destructive'>
            <Text>Destructive</Text>
          </Button>
        </View>

        {/* Outline */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Outline</Text>
          <Button variant='outline'>
            <Text>Outline</Text>
          </Button>
        </View>

        {/* Ghost */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Ghost</Text>
          <Button variant='ghost'>
            <Text>Ghost</Text>
          </Button>
        </View>

        {/* Link */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Link</Text>
          <Button variant='link'>
            <Text>Link</Text>
          </Button>
        </View>

        {/* Sizes */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Sizes</Text>
          <View className='gap-3'>
            <Button size='sm'>
              <Text>Small</Text>
            </Button>
            <Button size='default'>
              <Text>Default</Text>
            </Button>
            <Button size='lg'>
              <Text>Large</Text>
            </Button>
            <Button size='icon'>
              <Mail />
            </Button>
          </View>
        </View>

        {/* Disabled */}
        <View>
          <Text className='text-sm font-medium mb-2 text-foreground'>Disabled</Text>
          <View className='gap-3'>
            <Button disabled>
              <Text>Disabled Default</Text>
            </Button>
            <Button variant='secondary' disabled>
              <Text>Disabled Secondary</Text>
            </Button>
            <Button variant='outline' disabled>
              <Text>Disabled Outline</Text>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  )
};
