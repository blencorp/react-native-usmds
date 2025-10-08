'use client';

import { Toggle, ToggleIcon } from '@/registry/components/ui/toggle';
import { Bold } from 'lucide-react-native';
import * as React from 'react';

export function TogglePreview() {
  const [pressed, setPressed] = React.useState(false);

  return (
    <Toggle aria-label="Toggle italic" pressed={pressed} onPressedChange={setPressed}>
      <ToggleIcon as={Bold} />
    </Toggle>
  );
}
