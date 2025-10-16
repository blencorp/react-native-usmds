'use client';

import React from 'react';
import { View } from 'react-native';
import { Button } from '@/registry/usa/components/ui/button';
import { Text } from '@/registry/usa/components/ui/text';
import { ChevronDown, ChevronsUpDown } from 'lucide-react-native';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/registry/usa/components/ui/collapsible';
import { Icon } from '@/registry/usa/components/ui/icon';

export function CollapsiblePreview() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible className='flex w-[350px] flex-row flex-col gap-2'>
      <div className='flex flex-row items-center justify-between gap-4 px-4'>
        <Text className='text-foreground text-sm font-semibold'>@peduarte starred 3 repositories</Text>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='icon' className='size-8'>
            <Icon as={ChevronsUpDown} className='text-foreground' />
            <Text className='sr-only'>Toggle</Text>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className='border-border rounded-md border px-4 py-2'>
        <Text className='text-foreground text-sm'>@radix-ui/rn-primitives</Text>
      </div>
      <CollapsibleContent className='gap-2'>
        <div className='border-border rounded-md border px-4 py-2'>
          <Text className='text-foreground text-sm'>@radix-ui/react</Text>
        </div>
        <div className='border-border rounded-md border px-4 py-2'>
          <Text className='text-foreground text-sm'>@stitches/core</Text>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
