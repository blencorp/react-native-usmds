'use client';

import React from 'react';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';

export function ButtonDestructivePreview() {
  return (
    <Button variant="destructive">
      <Text>Destructive</Text>
    </Button>
  );
}