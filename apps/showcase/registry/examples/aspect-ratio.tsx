'use client';

import React from 'react';
import { AspectRatio } from '@registry/usa/components/ui/aspect-ratio';
import { Text } from '@registry/usa/components/ui/text';
import { View } from 'react-native';

export function AspectRatioPreview() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-md">
      <View className="bg-muted rounded-md w-full h-full items-center justify-center">
        <Text className="text-sm text-muted-foreground">16:9 Aspect Ratio</Text>
      </View>
    </AspectRatio>
  );
}
