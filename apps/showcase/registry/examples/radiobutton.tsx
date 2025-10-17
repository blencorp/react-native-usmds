'use client';

import React from 'react';
import { View } from 'react-native';
import { RadioButton, RadioGroup } from '@registry/usa/components/ui/radiobutton';

const OPTIONS = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
  { value: 'disabled', label: 'Disabled', disabled: true },
];

export function RadioButtonPreview() {
  const [value, setValue] = React.useState('morning');

  return (
    <View className="w-full max-w-sm gap-3">
      <RadioGroup value={value} onValueChange={setValue}>
        {OPTIONS.map((option) => (
          <RadioButton
            key={option.value}
            value={option.value}
            label={option.label}
            disabled={option.disabled}
          />
        ))}
      </RadioGroup>
    </View>
  );
}
