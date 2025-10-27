"use client";

import React from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/usa/components/ui/toggle-group";
import { Text } from "@/registry/usa/components/ui/text";
import { Bold, Italic, Underline } from "lucide-react-native";
import { Icon } from "@/registry/usa/components/ui/icon";

export function ToggleGroupPreview() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Icon as={Bold} size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Icon as={Italic} size={16} />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Icon as={Underline} size={16} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
