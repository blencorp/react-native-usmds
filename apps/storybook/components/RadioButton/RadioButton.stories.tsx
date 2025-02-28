import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { RadioGroup, RadioButton } from './RadioButton';
import { useState } from 'react';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const AllStates: Story = {
  render: () => {
    const [value, setValue] = useState('2');
    return (
      <View className='border border-dashed border-[#7B61FF] rounded'>
        <RadioGroup value={value} onValueChange={setValue}>
          <RadioButton value='1' label='Unselected' />
          <RadioButton value='2' label='Selected' />
        </RadioGroup>
        <View className='h-4' />
        <RadioGroup value='4' onValueChange={() => {}}>
          <RadioButton value='3' label='Disabled unselected' disabled />
          <RadioButton value='4' label='Disabled selected' disabled />
        </RadioGroup>
      </View>
    );
  }
};

export const WithRadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('2');
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioButton value='1' label='Option 1' />
        <RadioButton value='2' label='Option 2' />
        <RadioButton value='3' label='Option 3' />
      </RadioGroup>
    );
  }
};

export const SingleRadioButton: Story = {
  render: () => {
    const [value, setValue] = useState('1');
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioButton value='1' label='Single radio button' />
      </RadioGroup>
    );
  }
};

export const DisabledRadioButton: Story = {
  render: () => {
    const [value, setValue] = useState('1');
    return (
      <RadioGroup value={value} onValueChange={setValue}>
        <RadioButton value='1' label='Disabled radio button' disabled />
      </RadioGroup>
    );
  }
};
