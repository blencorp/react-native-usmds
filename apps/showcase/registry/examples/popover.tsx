"use client";

import React from "react";
import { View } from "react-native";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@registry/usa/components/ui/popover";
import { Button } from "@registry/usa/components/ui/button";
import { Text } from "@registry/usa/components/ui/text";

export function PopoverPreview() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Text>Open popover</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <View className="gap-2">
          <Text className="font-medium">Popover Title</Text>
          <Text className="text-sm text-muted-foreground">
            This is a popover with some content inside.
          </Text>
        </View>
      </PopoverContent>
    </Popover>
  );
}
