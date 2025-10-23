"use client";

import React from "react";
import { Separator } from "@/registry/usa/components/ui/separator";
import { Text } from "@/registry/usa/components/ui/text";

export function SeparatorPreview() {
  return (
    <div className="w-full max-w-md flex flex-col">
      <div className="gap-1 flex flex-col">
        <Text className="text-sm font-medium">React Native USMDS</Text>
        <Text className="text-sm text-muted-foreground">
          An open-source UI component library.
        </Text>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <Text>Blog</Text>
        <Separator orientation="vertical" />
        <Text>Docs</Text>
        <Separator orientation="vertical" />
        <Text>Source</Text>
      </div>
    </div>
  );
}
