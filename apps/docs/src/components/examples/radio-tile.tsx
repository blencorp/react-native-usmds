'use client';

import React from 'react';
import { View } from 'react-native';
import { RadioTile, RadioTileGroup } from '@/registry/usa/components/ui/radiotile';

export function RadioTilePreview() {
  const [value, setValue] = React.useState('option1');

  return (
    <RadioTileGroup value={value} onValueChange={setValue}>
      <RadioTile value="option1" label="Option 1" />
      <RadioTile value="option2" label="Option 2" description="With additional description text" />
      <RadioTile value="option3" label="Option 3" description="Another option with description" />
      <RadioTile value="option4" label="Disabled Option" disabled />
    </RadioTileGroup>
  );
}
