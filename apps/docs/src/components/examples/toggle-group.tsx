'use client';

import { Bold, Italic, Underline } from 'lucide-react-native';
import {
  ToggleGroup,
  ToggleGroupIcon,
  ToggleGroupItem,
} from '@/registry/components/ui/toggle-group';
import * as React from 'react';

export function ToggleGroupPreview() {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <ToggleGroup value={value} onValueChange={setValue} variant="outline" type="multiple">
      <ToggleGroupItem isFirst value="bold" aria-label="Toggle bold">
        <ToggleGroupIcon as={Bold} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ToggleGroupIcon as={Italic} />
      </ToggleGroupItem>
      <ToggleGroupItem isLast value="strikethrough" aria-label="Toggle strikethrough">
        <ToggleGroupIcon as={Underline} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
