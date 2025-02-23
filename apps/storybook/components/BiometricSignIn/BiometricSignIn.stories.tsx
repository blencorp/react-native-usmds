import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { useState } from 'react';
import { BiometricSignIn } from './BiometricSignIn';

const meta = {
  title: 'Components/BiometricSignIn',
  component: BiometricSignIn,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof BiometricSignIn>;

export default meta;

export const Default: StoryObj<typeof BiometricSignIn> = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <View className='flex-1 items-center justify-center'>
        <BiometricSignIn checked={checked} onCheckedChange={setChecked} biometricType='faceId' />
      </View>
    );
  }
};

export const AllTypes: StoryObj<typeof BiometricSignIn> = {
  render: () => {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);

    return (
      <View className='flex-1 items-center justify-center gap-4'>
        <BiometricSignIn checked={checked1} onCheckedChange={setChecked1} biometricType='faceId' />
        <BiometricSignIn checked={checked2} onCheckedChange={setChecked2} biometricType='touchId' />
        <BiometricSignIn checked={checked3} onCheckedChange={setChecked3} biometricType='biometric' />
      </View>
    );
  }
};
