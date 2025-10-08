'use client';

import { Label } from '@/registry/components/ui/label';
import { Switch } from '@/registry/components/ui/switch';
import * as React from 'react';
import { View } from 'react-native';

export function SwitchPreview() {
  const [checked, setChecked] = React.useState(false);

  return (
    <View className="flex-row items-center gap-2">
      <Switch
        checked={checked}
        onCheckedChange={setChecked}
        id="airplane-mode"
        nativeID="airplane-mode"
      />
      <Label nativeID="airplane-mode" htmlFor="airplane-mode" onPress={() => setChecked((prev) => !prev)}>
        Airplane Mode
      </Label>
    </View>
  );
}
