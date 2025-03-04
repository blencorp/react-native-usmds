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

        <View>
          <Text className='text-sm mb-2'>Hover</Text>
          <Button variant='default' className='bg-primary-hover'>
            <Text>Default</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Active</Text>
          <Button variant='default' className='bg-primary-active'>
            <Text>Default</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Focus</Text>
          <Button variant='default' className='ring-2 ring-focus-ring ring-offset-2'>
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

        <View>
          <Text className='text-sm mb-2'>Hover</Text>
          <Button variant='secondary' className='bg-secondary-hover'>
            <Text>Secondary</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Active</Text>
          <Button variant='secondary' className='bg-secondary-active'>
            <Text>Secondary</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Focus</Text>
          <Button variant='secondary' className='ring-2 ring-focus-ring ring-offset-2'>
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

        <View>
          <Text className='text-sm mb-2'>Hover</Text>
          <Button variant='accent-cool' className='bg-accent-cool-hover'>
            <Text>Accent Cool</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Active</Text>
          <Button variant='accent-cool' className='bg-accent-cool-active'>
            <Text>Accent Cool</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Focus</Text>
          <Button variant='accent-cool' className='ring-2 ring-focus-ring ring-offset-2'>
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

        <View>
          <Text className='text-sm mb-2'>Hover</Text>
          <Button variant='accent-warm' className='bg-accent-warm-hover'>
            <Text>Accent Warm</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Active</Text>
          <Button variant='accent-warm' className='bg-accent-warm-active'>
            <Text>Accent Warm</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Focus</Text>
          <Button variant='accent-warm' className='ring-2 ring-focus-ring ring-offset-2'>
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

        <View>
          <Text className='text-sm mb-2'>Hover</Text>
          <Button variant='base' className='bg-base-hover'>
            <Text>Base</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Active</Text>
          <Button variant='base' className='bg-base-active'>
            <Text>Base</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Focus</Text>
          <Button variant='base' className='ring-2 ring-focus-ring ring-offset-2'>
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

        <View>
          <Text className='text-sm mb-2'>Hover</Text>
          <Button variant='outline'>
            <Text>Outline</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Active</Text>
          <Button variant='outline'>
            <Text>Outline</Text>
          </Button>
        </View>

        <View>
          <Text className='text-sm mb-2'>Focus</Text>
          <Button
            variant='outline'
            className='ring-4 ring-blue-vivid-40v' // #2491FF
          >
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

            <View>
              <Text className='text-sm mb-2 text-white'>Hover</Text>
              <Button variant='inverse'>
                <Text>Inverse</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2 text-white'>Active</Text>
              <Button variant='inverse'>
                <Text>Inverse</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2 text-white'>Focus</Text>
              <Button variant='inverse' className='ring-4 ring-blue-vivid-40v'>
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
      <View className='space-y-4'>
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
          <Mail />
        </Button>
      </View>
    </ScrollView>
  )
};

export const WithIcons: Story = {
  render: () => (
    <ScrollView>
      <View className='space-y-4'>
        <Button startIcon={<Mail />}>
          <Text>Start Icon</Text>
        </Button>
        <Button endIcon={<ArrowRight />}>
          <Text>End Icon</Text>
        </Button>
        <Button startIcon={<Mail />} endIcon={<ArrowRight />}>
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

            <View>
              <Text className='text-sm mb-2'>Hover</Text>
              <Button variant='default'>
                <Text>Primary</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Active</Text>
              <Button variant='default'>
                <Text>Primary</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Focus</Text>
              <Button variant='default' focus>
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

            <View>
              <Text className='text-sm mb-2'>Hover</Text>
              <Button variant='secondary'>
                <Text>Secondary</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Active</Text>
              <Button variant='secondary'>
                <Text>Secondary</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Focus</Text>
              <Button variant='secondary' focus>
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

            <View>
              <Text className='text-sm mb-2'>Hover</Text>
              <Button variant='accent-cool'>
                <Text>Accent Cool</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Active</Text>
              <Button variant='accent-cool'>
                <Text>Accent Cool</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Focus</Text>
              <Button variant='accent-cool' focus>
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

            <View>
              <Text className='text-sm mb-2'>Hover</Text>
              <Button variant='accent-warm' className='bg-accent-warm-hover'>
                <Text>Accent Warm</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Active</Text>
              <Button variant='accent-warm' className='bg-accent-warm-active'>
                <Text>Accent Warm</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Focus</Text>
              <Button variant='accent-warm' className='ring-2 ring-focus-ring ring-offset-2'>
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

            <View>
              <Text className='text-sm mb-2'>Hover</Text>
              <Button variant='base'>
                <Text>Base</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Active</Text>
              <Button variant='base'>
                <Text>Base</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Focus</Text>
              <Button variant='base' focus>
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

            <View>
              <Text className='text-sm mb-2'>Hover</Text>
              <Button variant='outline'>
                <Text>Outline</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Active</Text>
              <Button variant='outline'>
                <Text>Outline</Text>
              </Button>
            </View>

            <View>
              <Text className='text-sm mb-2'>Focus</Text>
              <Button variant='outline' focus>
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

              <View>
                <Text className='text-sm mb-2 text-white'>Hover</Text>
                <Button variant='inverse'>
                  <Text>Inverse</Text>
                </Button>
              </View>

              <View>
                <Text className='text-sm mb-2 text-white'>Active</Text>
                <Button variant='inverse'>
                  <Text>Inverse</Text>
                </Button>
              </View>

              <View>
                <Text className='text-sm mb-2 text-white'>Focus</Text>
                <Button variant='inverse' focus>
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
    children: (state) => <Text>{state.pressed ? 'Pressing!' : state.hovered ? 'Hovering!' : 'Interactive'}</Text>
  }
};
