import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { RadioTileGroup, RadioTile } from './RadioTile';
import { useState } from 'react';

const meta = {
  title: 'Components/RadioTile',
  component: RadioTile,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof RadioTile>;

export default meta;
type Story = StoryObj<typeof RadioTile>;

export const AllStates: Story = {
  render: () => {
    const [value1, setValue1] = useState('1');
    const [value2, setValue2] = useState('4');

    return (
      <View className='border border-dashed border-[#7B61FF] rounded flex flex-col gap-[50px] p-5'>
        <View className='flex flex-col items-center'>
          {/* Without Description */}
          <RadioTileGroup value={value1} onValueChange={setValue1}>
            <RadioTile value='1' label='Unchecked' />
            <RadioTile value='2' label='Checked' />
            <RadioTile value='3' label='Disabled' disabled />
          </RadioTileGroup>
        </View>

        <View className='flex flex-col items-center'>
          {/* With Description */}
          <RadioTileGroup value={value2} onValueChange={setValue2}>
            <RadioTile
              value='4'
              label='Unchecked with description'
              description='This is optional text that can be used to describe the label in more detail.'
            />
            <RadioTile
              value='5'
              label='Checked with description'
              description='This is optional text that can be used to describe the label in more detail.'
            />
            <RadioTile
              value='6'
              label='Disabled with description'
              description='This is optional text that can be used to describe the label in more detail.'
              disabled
            />
          </RadioTileGroup>
        </View>
      </View>
    );
  }
};

export const WithRadioTileGroup: Story = {
  render: () => {
    const [value, setValue] = useState('2');
    return (
      <View className='p-5'>
        <RadioTileGroup value={value} onValueChange={setValue}>
          <RadioTile value='1' label='Option 1' description='Description for option 1' />
          <RadioTile value='2' label='Option 2' description='Description for option 2' />
          <RadioTile value='3' label='Option 3' description='Description for option 3' />
        </RadioTileGroup>
      </View>
    );
  }
};
