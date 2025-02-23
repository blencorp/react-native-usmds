import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Toggle } from './Toggle';
import { useState } from 'react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <View className='p-5'>
        <Toggle pressed={pressed} onPressedChange={setPressed} />
      </View>
    );
  }
};

export const Disabled: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <View className='p-5'>
        <Toggle pressed={pressed} onPressedChange={setPressed} disabled />
      </View>
    );
  }
};

export const AllStates: Story = {
  render: () => {
    const [pressed1, setPressed1] = useState(false);
    const [pressed2, setPressed2] = useState(true);
    const [pressed3, setPressed3] = useState(false);

    return (
      <View className='p-5 border border-dashed border-[#9747FF] rounded flex flex-row gap-5'>
        <Toggle pressed={pressed1} onPressedChange={setPressed1} />
        <Toggle pressed={pressed2} onPressedChange={setPressed2} />
        <Toggle pressed={pressed3} onPressedChange={setPressed3} disabled />
      </View>
    );
  }
};
