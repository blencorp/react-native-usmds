"use client";

import React from "react";
import { View } from "react-native";
import { Button } from "@registry/usa/components/ui/button";
import { NativeOnlyAnimatedView } from "@registry/usa/components/ui/native-only-animated-view";
import { Text } from "@registry/usa/components/ui/text";
import { FadeInDown, FadeOutUp } from "react-native-reanimated";

export function NativeOnlyAnimatedViewPreview() {
  const [visible, setVisible] = React.useState(true);

  return (
    <View className="w-full max-w-sm items-center gap-4">
      <Button onPress={() => setVisible((prev) => !prev)} variant="outline">
        <Text>{visible ? "Hide" : "Show"} panel</Text>
      </Button>

      {visible ? (
        <NativeOnlyAnimatedView
          entering={FadeInDown.duration(250)}
          exiting={FadeOutUp.duration(250)}
          className="w-full items-center rounded-md border border-border bg-card p-4 shadow-sm"
        >
          <Text className="text-base font-medium">Animated natively</Text>
          <Text className="text-sm text-muted-foreground text-center mt-2">
            This block uses Reanimated when running on native platforms and
            falls back to a regular view on the web.
          </Text>
        </NativeOnlyAnimatedView>
      ) : null}
    </View>
  );
}
