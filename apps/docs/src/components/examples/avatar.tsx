'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/usa/components/ui/avatar';
import { Text } from '@/registry/usa/components/ui/text';

export function AvatarPreview() {
  return (
    <div className='flex-row flex-wrap gap-12'>
      <Avatar alt='@blencorp' className='border-background web:border-0 web:ring-2 web:ring-background rounded-lg border-2'>
        <AvatarImage source={{ uri: 'https://avatars.githubusercontent.com/u/240379?s=400&v=4' }} />
        <AvatarFallback>
          <Text>BL</Text>
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
