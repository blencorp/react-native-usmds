import { PreviewList } from '@showcase/components/preview-list';
import { useComponentRegistry } from '@showcase/lib/registry-context';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { Text } from '@registry/usa/components/ui/text';

export default function ComponentDetailScreen() {
  const params = useLocalSearchParams<{ slug?: string | string[] }>();
  const { componentMap } = useComponentRegistry();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const entry = slug ? componentMap[slug] : undefined;

  if (!entry) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <Stack.Screen options={{ title: entry.title }} />
      <View className="flex-1 bg-background">
        <View className="border-b border-border bg-card px-4 py-6">
          <Text className="text-2xl font-semibold text-foreground">{entry.title}</Text>
          {entry.description ? (
            <Text className="mt-2 text-base leading-5 text-muted-foreground">
              {entry.description}
            </Text>
          ) : null}
        </View>
        <PreviewList previews={entry.previews} />
      </View>
    </>
  );
}
