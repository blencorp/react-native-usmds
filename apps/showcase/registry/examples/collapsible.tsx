'use client';

import React from 'react';
import { View } from 'react-native';
import { Button } from '@registry/usa/components/ui/button';
import { Text } from '@registry/usa/components/ui/text';
import { ChevronsUpDown } from 'lucide-react-native';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@registry/usa/components/ui/collapsible';
import { Icon } from '@registry/usa/components/ui/icon';

export function CollapsiblePreview() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] gap-2">
      <View className="flex flex-row items-center justify-between gap-4 rounded-md border border-border px-4 py-2">
        <Text className="text-sm font-semibold text-foreground">
          @peduarte starred 3 repositories
        </Text>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            <Icon as={ChevronsUpDown} className="text-foreground" />
            <Text className="sr-only">Toggle</Text>
          </Button>
        </CollapsibleTrigger>
      </View>
      <View className="rounded-md border border-border px-4 py-2">
        <Text className="text-sm text-foreground">@radix-ui/primitives</Text>
      </View>
      <CollapsibleContent className="gap-2">
        <View className="rounded-md border border-border px-4 py-2">
          <Text className="text-sm text-foreground">@radix-ui/react</Text>
        </View>
        <View className="rounded-md border border-border px-4 py-2">
          <Text className="text-sm text-foreground">@stitches/core</Text>
        </View>
      </CollapsibleContent>
    </Collapsible>
  );
}
