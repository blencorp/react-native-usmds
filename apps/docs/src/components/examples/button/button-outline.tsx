'use client';

import React from 'react';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';

export function ButtonOutlinePreview() {
  return (
    <Button variant="outline">
      <Text>Outline</Text>
    </Button>
  );
}