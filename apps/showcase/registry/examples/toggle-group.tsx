"use client";

import React from "react";
import { Icon } from "@registry/usa/components/ui/icon";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@registry/usa/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react-native";

export function ToggleGroupPreview() {
  const [values, setValues] = React.useState<string[]>(["bold"]);

  return (
    <ToggleGroup
      type="multiple"
      value={values}
      onValueChange={setValues}
      className="gap-2"
    >
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
