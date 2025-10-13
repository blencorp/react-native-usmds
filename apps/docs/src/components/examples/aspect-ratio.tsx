'use client';

import React from 'react';
import { AspectRatio } from '@/registry/usa/components/ui/aspect-ratio';
import { View } from 'react-native';

export function AspectRatioPreview() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-md">
      <View className="bg-muted rounded-md w-full h-full items-center justify-center">
        <div className="text-sm text-muted-foreground">16:9 Aspect Ratio</div>
      </View>
    </AspectRatio>
  );
}
