"use client";

import React from "react";
import { View } from "react-native";
import { CheckboxTile } from "@registry/usa/components/ui/checkboxtile";

export function CheckboxTilePreview() {
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(true);
  const [option3, setOption3] = React.useState(false);

  return (
    <View className="flex flex-col gap-4 w-full max-w-md">
      <CheckboxTile
        label="Basic option"
        checked={option1}
        onCheckedChange={setOption1}
      />
      <CheckboxTile
        label="Option with description"
        description="This provides additional context about the option"
        checked={option2}
        onCheckedChange={setOption2}
      />
      <CheckboxTile
        label="Another option"
        description="Select this to enable the feature"
        checked={option3}
        onCheckedChange={setOption3}
      />
      <CheckboxTile
        label="Disabled option"
        description="This option is currently unavailable"
        checked={false}
        onCheckedChange={() => {}}
        disabled
      />
    </View>
  );
}
