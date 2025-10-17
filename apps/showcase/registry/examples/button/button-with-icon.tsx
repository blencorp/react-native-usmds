'use client';

import React from 'react';
import { Button } from '@registry/usa/components/ui/button';
import { Text } from '@registry/usa/components/ui/text';
import { Mail } from 'lucide-react-native';

export function ButtonWithIconPreview() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" color="white" />
      <Text>Login with Email</Text>
    </Button>
  );
}