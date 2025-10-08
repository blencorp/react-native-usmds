'use client';

import React from 'react';
import { View } from 'react-native';
import { Text } from '@/registry/components/ui/text';

export function CheckboxPreview() {
  const [checked, setChecked] = React.useState(true);

  return (
    <View className="flex flex-col gap-4">
      <View className="flex flex-row items-center gap-2">
        <View
          className="h-4 w-4 rounded border border-gray-300 bg-white"
          style={{ backgroundColor: checked ? '#3b82f6' : 'white' }}
        />
        <Text onPress={() => setChecked(!checked)}>
          Accept terms and conditions
        </Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        <View
          className="h-4 w-4 rounded border border-gray-300 bg-white"
          style={{ backgroundColor: false ? '#3b82f6' : 'white' }}
        />
        <Text className="text-gray-400">
          Enable notifications (disabled)
        </Text>
      </View>
    </View>
  );
}