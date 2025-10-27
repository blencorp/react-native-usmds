"use client";

import React from "react";
import { Toggle, ToggleIcon } from "@/registry/usa/components/ui/toggle";
import { Text } from "@/registry/usa/components/ui/text";
import { Bold, Italic, Underline } from "lucide-react-native";

export function TogglePreview() {
  const [bold, setBold] = React.useState(false);
  const [italic, setItalic] = React.useState(false);
  const [underline, setUnderline] = React.useState(false);

  return (
    <div className="flex flex-col gap-6 w-full max-w-md items-center">
      <div className="flex flex-row gap-2">
        <Toggle pressed={bold} onPressedChange={setBold} variant="outline">
          <ToggleIcon as={Bold} />
        </Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic} variant="outline">
          <ToggleIcon as={Italic} />
        </Toggle>
        <Toggle
          pressed={underline}
          onPressedChange={setUnderline}
          variant="outline"
        >
          <ToggleIcon as={Underline} />
        </Toggle>
      </div>

      <div className="flex flex-row gap-2">
        <Toggle pressed={bold} onPressedChange={setBold}>
          <ToggleIcon as={Bold} />
          <Text>Bold</Text>
        </Toggle>
        <Toggle pressed={italic} onPressedChange={setItalic}>
          <ToggleIcon as={Italic} />
          <Text>Italic</Text>
        </Toggle>
      </div>
    </div>
  );
}
