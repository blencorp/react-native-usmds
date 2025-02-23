import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Checkbox>;

export default meta;

export const AllStates: StoryObj<typeof Checkbox> = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);

    return (
      <View className='p-5 border border-dashed border-[#7B61FF] flex flex-col gap-2.5'>
        <Checkbox label='Unchecked' checked={checked1} onCheckedChange={setChecked1} />
        <Checkbox label='Checked' checked={checked2} onCheckedChange={setChecked2} />
        <Checkbox label='Disabled unchecked' checked={false} disabled onCheckedChange={() => {}} />
        <Checkbox label='Disabled checked' checked={true} disabled onCheckedChange={() => {}} />
      </View>
    );
  }
};

export const Default: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <View className='p-5 border border-dashed border-[#7B61FF] rounded'>
        <Checkbox label='Checkbox item' checked={false} onCheckedChange={() => {}} />
      </View>
    );
  }
};

export const Checked: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <View className='p-5 border border-dashed border-[#7B61FF] rounded'>
        <Checkbox label='Checkbox item' checked={true} onCheckedChange={() => {}} />
      </View>
    );
  }
};

export const Disabled: StoryObj<typeof Checkbox> = {
  render: () => {
    return (
      <View className='p-5 border border-dashed border-[#7B61FF] rounded'>
        <Checkbox label='Checkbox item' disabled checked={false} onCheckedChange={() => {}} />
      </View>
    );
  }
};
