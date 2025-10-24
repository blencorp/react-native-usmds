"use client";

import React from "react";
import { View } from "react-native";
import { Skeleton } from "@registry/usa/components/ui/skeleton";

export function SkeletonPreview() {
  return (
    <View className="flex flex-col gap-4 w-full max-w-md">
      <View className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <View className="flex-1 gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </View>
      </View>
      <View className="gap-2">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </View>
    </View>
  );
}
