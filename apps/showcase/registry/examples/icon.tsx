'use client';

import React from 'react';
import { View } from 'react-native';
import { Icon } from '@registry/usa/components/ui/icon';
import { Text } from '@registry/usa/components/ui/text';
import { Bell, Calendar, CheckCircle2, FileText, Settings } from 'lucide-react-native';

const ICONS = [
  { name: 'Bell', glyph: Bell },
  { name: 'Calendar', glyph: Calendar },
  { name: 'Check', glyph: CheckCircle2 },
  { name: 'Document', glyph: FileText },
  { name: 'Settings', glyph: Settings },
];

export function IconPreview() {
  return (
    <View className="w-full max-w-sm items-center gap-4">
      <Text className="text-muted-foreground text-sm">Icon primitives inherit tailwind styles.</Text>
      <View className="flex flex-row flex-wrap items-center justify-center gap-6">
        {ICONS.map((icon) => (
          <View key={icon.name} className="items-center gap-2">
            <Icon as={icon.glyph} className="size-8 text-primary" />
            <Text className="text-xs">{icon.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
