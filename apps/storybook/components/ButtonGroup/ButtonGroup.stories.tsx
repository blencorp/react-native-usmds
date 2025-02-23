import { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { View} from 'react-native';

const meta = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const VerticalDefault: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='vertical' gap={8}>
        <Button variant='base'>
          <Text>Primary Button</Text>
        </Button>
        <Button variant='default'>
          <Text>Secondary Button</Text>
        </Button>
        <Button variant='outline'>
          <Text>Outline Button</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};

export const VerticalLargeGap: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='vertical' gap={16}>
        <Button variant='base'>
          <Text>Primary Button</Text>
        </Button>
        <Button variant='default'>
          <Text>Secondary Button</Text>
        </Button>
        <Button variant='outline'>
          <Text>Outline Button</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};

export const HorizontalDefault: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='horizontal' gap={8}>
        <Button variant='base'>
          <Text>Primary</Text>
        </Button>
        <Button variant='default'>
          <Text>Secondary</Text>
        </Button>
        <Button variant='outline'>
          <Text>Outline</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};

export const HorizontalLargeGap: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='horizontal' gap={16}>
        <Button variant='base'>
          <Text>Primary</Text>
        </Button>
        <Button variant='default'>
          <Text>Secondary</Text>
        </Button>
        <Button variant='outline'>
          <Text>Outline</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};

export const WithDifferentSizes: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='vertical' gap={8}>
        <Button variant='base' size='big'>
          <Text>Big Button</Text>
        </Button>
        <Button variant='default'>
          <Text>Default Button</Text>
        </Button>
        <Button variant='outline' size='sm'>
          <Text>Small Button</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};

export const WithDifferentWidths: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='vertical' gap={8}>
        <Button variant='base' className='w-[300px]'>
          <Text>Wide Button</Text>
        </Button>
        <Button variant='default' className='w-[200px]'>
          <Text>Medium Button</Text>
        </Button>
        <Button variant='outline' className='w-[100px]'>
          <Text>Small Button</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};

export const WithMixedContent: Story = {
  render: () => (
    <View className='flex items-center justify-center'>
      <ButtonGroup orientation='vertical' gap={8}>
        <Button variant='base'>
          <Text>Regular Button</Text>
        </Button>
        <ButtonGroup orientation='horizontal' gap={8}>
          <Button variant='default'>
            <Text>Left</Text>
          </Button>
          <Button variant='default'>
            <Text>Right</Text>
          </Button>
        </ButtonGroup>
        <Button variant='outline'>
          <Text>Bottom Button</Text>
        </Button>
      </ButtonGroup>
    </View>
  )
};
