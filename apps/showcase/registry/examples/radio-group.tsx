'use client';

import React from 'react';
import { View } from 'react-native';
import { RadioGroup, RadioGroupItem } from '@registry/usa/components/ui/radiogroup';
import { Label } from '@registry/usa/components/ui/label';

export function RadioGroupPreview() {
  const [value, setValue] = React.useState('comfortable');

  return (
    <View className="flex flex-col gap-4 w-full max-w-md">
      <RadioGroup value={value} onValueChange={setValue}>
        <View className="flex flex-row items-center gap-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </View>
        <View className="flex flex-row items-center gap-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </View>
        <View className="flex flex-row items-center gap-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </View>
        <View className="flex flex-row items-center gap-2">
          <RadioGroupItem value="disabled" id="r4" disabled />
          <Label htmlFor="r4" className="opacity-50">Disabled</Label>
        </View>
      </RadioGroup>
    </View>
  );
}