import { PreviewCarousel } from "@showcase/components/preview-carousel";
import { useComponentRegistry } from "@showcase/lib/registry-context";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { Text } from "@registry/usa/components/ui/text";

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
      <View className="flex-1">
        <View className="px-4 pt-6 pb-4 gap-2">
          <Text className="text-2xl font-semibold">{entry.title}</Text>
          {entry.description ? (
            <Text className="text-muted-foreground text-base leading-5">
              {entry.description}
            </Text>
          ) : null}
        </View>
        <View className="flex-1">
          <PreviewCarousel previews={entry.previews} />
        </View>
      </View>
    </>
  );
}
