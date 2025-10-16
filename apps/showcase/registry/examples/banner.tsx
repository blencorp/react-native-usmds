'use client';

import React from 'react';
import { Text } from '@registry/usa/components/ui/text';
import { View } from 'react-native';
import { Banner } from '@registry/usa/components/ui/banner';

export function BannerPreview() {
  return (
    <View className="flex flex-col gap-6 w-full">
      <View>
        <Text className="text-sm font-semibold mb-2">Default (.gov, English)</Text>
        <Banner variant="standard-app" />
      </View>

      <View>
        <Text className="text-sm font-semibold mb-2">Spanish (.gov, Español)</Text>
        <Banner variant="standard-app" language="es" />
      </View>

      <View>
        <Text className="text-sm font-semibold mb-2">.mil Domain</Text>
        <Banner variant="standard-app" domain="mil" />
      </View>
    </View>
  );
}