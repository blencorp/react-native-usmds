'use client';

import React from 'react';
import { View } from 'react-native';
import { Tag } from '@registry/usa/components/ui/tag';

export function TagPreview() {
  return (
    <View className="flex flex-col gap-6 w-full max-w-md items-center">
      <View className="flex flex-row gap-2 flex-wrap justify-center">
        <Tag label="new" />
        <Tag label="beta" />
        <Tag label="pro" />
        <Tag label="sale" />
      </View>

      <View className="flex flex-row gap-2 flex-wrap justify-center">
        <Tag label="premium" size="big" />
        <Tag label="verified" size="big" />
        <Tag label="trending" size="big" />
      </View>
    </View>
  );
}