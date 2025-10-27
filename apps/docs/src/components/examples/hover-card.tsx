"use client";

import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/usa/components/ui/hover-card";
import { Text } from "@/registry/usa/components/ui/text";

export function HoverCardPreview() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Text className="underline">@username</Text>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="gap-2">
          <Text className="font-semibold">@username</Text>
          <Text className="text-sm text-muted-foreground">
            User profile information appears here when you hover.
          </Text>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
