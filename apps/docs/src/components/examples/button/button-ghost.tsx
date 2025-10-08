'use client';

import React from 'react';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';

export function ButtonGhostPreview() {
  return (
    <Button variant="ghost">
      <Text>Ghost</Text>
    </Button>
  );
}