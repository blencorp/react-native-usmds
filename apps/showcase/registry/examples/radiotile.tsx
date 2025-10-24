"use client";

import React from "react";
import { View } from "react-native";
import {
  RadioTile,
  RadioTileGroup,
} from "@registry/usa/components/ui/radiotile";

const OPTIONS = [
  {
    value: "standard",
    label: "Standard shipping",
    description: "Delivers in 5-7 business days",
  },
  {
    value: "express",
    label: "Express shipping",
    description: "Delivers in 2-3 business days",
  },
  {
    value: "overnight",
    label: "Overnight shipping",
    description: "Delivers by next business day",
  },
];

export function RadioTilePreview() {
  const [value, setValue] = React.useState("standard");

  return (
    <View className="w-full max-w-sm gap-3">
      <RadioTileGroup value={value} onValueChange={setValue}>
        {OPTIONS.map((option) => (
          <RadioTile
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
          />
        ))}
        <RadioTile value="disabled" label="Unavailable" disabled />
      </RadioTileGroup>
    </View>
  );
}
