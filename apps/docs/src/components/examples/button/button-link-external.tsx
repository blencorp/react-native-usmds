'use client';

import React from 'react';
import { Button } from '@/registry/usa/components/ui/button';
import { Text } from '@/registry/usa/components/ui/text';

export function ButtonLinkExternalPreview() {
  return (
    <Button variant="link" external>
      <Text>External Link</Text>
    </Button>
  );
}
