'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/components/ui/avatar';
import { Text } from '@/registry/components/ui/text';

export function AvatarPreview() {
  return (
    <div className='flex-row flex-wrap gap-12'>
      <Avatar alt='@janedoe' className='border-background web:border-0 web:ring-2 web:ring-background rounded-lg border-2'>
        <AvatarImage source={{ uri: 'https://github.com/vercel.png' }} />
        <AvatarFallback>
          <Text>JD</Text>
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
