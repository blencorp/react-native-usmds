'use client';

import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/registry/components/ui/radiogroup';
import { Label } from '@/registry/components/ui/label';

export function RadioGroupPreview() {
  const [value, setValue] = React.useState('comfortable');

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="disabled" id="r4" disabled />
          <Label htmlFor="r4" className="opacity-50">Disabled</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
