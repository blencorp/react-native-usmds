'use client';

import React from 'react';
import { View } from 'react-native';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';
import { ChevronDown } from 'lucide-react-native';

export function CollapsiblePreview() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <View className="w-full max-w-sm gap-3">
      <View className="flex flex-row items-center justify-between gap-4">
        <Text className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </Text>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onPress={() => setIsOpen(!isOpen)}>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </Button>
      </View>
      {isOpen && (
        <View className="rounded-md border border-gray-200 px-4 py-3 mt-2">
          <View className="gap-2">
            <Text className="text-sm font-mono">@radix-ui/primitives</Text>
            <Text className="text-sm font-mono">@radix-ui/colors</Text>
            <Text className="text-sm font-mono">@stitches/react</Text>
          </View>
        </View>
      )}
    </View>
  );
}