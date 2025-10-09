'use client';

import React from 'react';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';

export function ButtonLinkPreview() {
  return (
    <Button variant="link">
      <Text>Link</Text>
    </Button>
  );
}