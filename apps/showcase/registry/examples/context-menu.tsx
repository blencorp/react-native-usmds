'use client';

import React from 'react';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@registry/usa/components/ui/context-menu';
import { Text } from '@registry/usa/components/ui/text';
import { View } from 'react-native';

export function ContextMenuPreview() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <View className="border-border flex h-32 w-full max-w-md items-center justify-center rounded-md border border-dashed">
          <Text className="text-sm text-muted-foreground">Right click here</Text>
        </View>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Text>Edit</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Text>Copy</Text>
        </ContextMenuItem>
        <ContextMenuItem>
          <Text>Delete</Text>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
