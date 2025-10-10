'use client';

import React from 'react';
import { Button } from '@/registry/usa/components/ui/button';
import { Text } from '@/registry/usa/components/ui/text';

export function ButtonDestructivePreview() {
  return (
    <Button variant="destructive">
      <Text>Destructive</Text>
    </Button>
  );
}