'use client';

import { Checkbox } from '@/registry/components/ui/checkbox';
import { Label } from '@/registry/components/ui/label';
import * as React from 'react';
import { View } from 'react-native';

export function LabelPreview() {
  const [checked, setChecked] = React.useState(false);

  return (
    <View className="flex-row items-center gap-2">
      <Checkbox
        aria-labelledby="terms-checkbox"
        id="terms-checkbox"
        checked={checked}
        onCheckedChange={setChecked}
      />
      <Label
        nativeID="terms-checkbox"
        htmlFor="terms-checkbox"
        onPress={() => setChecked((prev) => !prev)}>
        Accept terms and conditions
      </Label>
    </View>
  );
}
