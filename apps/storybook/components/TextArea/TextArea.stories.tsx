import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { View } from 'react-native';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <View className='p-4'>
        <TextArea 
          label='Text input label' 
          placeholder='Enter your text here'
          value={value}
          onChangeText={setValue}
        />
      </View>
    );
  }
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <View className='p-4'>
        <TextArea 
          label='Text input label' 
          helperText='Helper text' 
          placeholder='Enter your text here'
          value={value}
          onChangeText={setValue}
        />
      </View>
    );
  }
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <View className='p-4'>
        <TextArea 
          label='Text input label' 
          helperText='Error message' 
          error={true} 
          placeholder='Enter your text here'
          value={value}
          onChangeText={setValue}
        />
      </View>
    );
  }
};

export const WithCharacterLimit: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <View className='p-4'>
        <TextArea 
          label='Text input label' 
          placeholder='Enter your text here'
          maxLength={100}
          value={value}
          onChangeText={setValue}
        />
      </View>
    );
  }
};

export const Disabled: Story = {
  render: () => (
    <View className='p-4'>
      <TextArea 
        label='Text input label' 
        placeholder='This field is disabled' 
        editable={false}
        value="This is disabled text"
      />
    </View>
  )
};