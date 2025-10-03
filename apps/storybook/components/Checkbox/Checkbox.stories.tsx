import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { useState } from 'react';
import { Checkbox } from './Checkbox';
import { Text } from '../Text/Text';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <View className="flex-row items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Text>Accept terms and conditions</Text>
      </View>
    );
  }
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <View className="flex-row items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Text>Checked by default</Text>
      </View>
    );
  }
};

export const Disabled: Story = {
  render: () => (
    <View className="flex-row items-center gap-2">
      <Checkbox disabled />
      <Text className="text-muted-foreground">Disabled checkbox</Text>
    </View>
  )
};

export const AllStates: Story = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
      <View className='flex flex-col gap-4'>
        <View className="flex-row items-center gap-2">
          <Checkbox checked={checked1} onCheckedChange={setChecked1} />
          <Text>Unchecked</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Checkbox checked={checked2} onCheckedChange={setChecked2} />
          <Text>Checked</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Checkbox disabled checked={false} />
          <Text className="text-muted-foreground">Disabled unchecked</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Checkbox disabled checked={true} />
          <Text className="text-muted-foreground">Disabled checked</Text>
        </View>
      </View>
    );
  }
};
