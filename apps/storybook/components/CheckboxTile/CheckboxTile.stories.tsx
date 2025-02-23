import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { useState } from 'react';
import { CheckboxTile } from './CheckboxTile';

const meta = {
  title: 'Components/CheckboxTile',
  component: CheckboxTile,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof CheckboxTile>;

export default meta;

export const AllStates: StoryObj<typeof CheckboxTile> = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(true);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(true);

    return (
      <View className='p-5 border border-dashed border-[#7B61FF] rounded flex flex-col gap-2.5'>
        {/* Without Description */}
        <CheckboxTile label='Unchecked' checked={checked1} onCheckedChange={setChecked1} />
        <CheckboxTile label='Checked' checked={checked2} onCheckedChange={setChecked2} />
        <CheckboxTile label='Disabled' checked={false} disabled onCheckedChange={() => {}} />

        {/* With Description */}
        <CheckboxTile
          label='Unchecked with description'
          description='This is optional text that can be used to describe the label in more detail.'
          checked={checked3}
          onCheckedChange={setChecked3}
        />
        <CheckboxTile
          label='Checked with description'
          description='This is optional text that can be used to describe the label in more detail.'
          checked={checked4}
          onCheckedChange={setChecked4}
        />
        <CheckboxTile
          label='Disabled with description'
          description='This is optional text that can be used to describe the label in more detail.'
          checked={false}
          disabled
          onCheckedChange={() => {}}
        />
      </View>
    );
  }
};
