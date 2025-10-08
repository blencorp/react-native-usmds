'use client';

import { Label } from '@/registry/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/registry/components/ui/radio-group';
import * as React from 'react';
import { View } from 'react-native';

export function RadioGroupPreview() {
  const [value, setValue] = React.useState('comfortable');

  return (
    <RadioGroup value={value} onValueChange={setValue}>
      <View className="flex flex-row items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1" onPress={() => setValue('default')}>
          Default
        </Label>
      </View>
      <View className="flex flex-row items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2" onPress={() => setValue('comfortable')}>
          Comfortable
        </Label>
      </View>
      <View className="flex flex-row items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3" onPress={() => setValue('compact')}>
          Compact
        </Label>
      </View>
    </RadioGroup>
  );
}
