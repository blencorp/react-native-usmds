"use client";

import React from "react";
import { View } from "react-native";
import { Checkbox } from "@registry/usa/components/ui/checkbox";
import { Text } from "@registry/usa/components/ui/text";

export function CheckboxPreview() {
  const [checked, setChecked] = React.useState(true);
  const [terms, setTerms] = React.useState(false);
  const [newsletter, setNewsletter] = React.useState(true);

  return (
    <View className="flex flex-col gap-4 w-full max-w-sm">
      <View className="flex flex-row items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Text>Accept terms and conditions</Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        <Checkbox checked={terms} onCheckedChange={setTerms} />
        <Text>Subscribe to newsletter</Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        <Checkbox checked={newsletter} onCheckedChange={setNewsletter} />
        <Text>Receive product updates</Text>
      </View>
      <View className="flex flex-row items-center gap-2">
        <Checkbox checked={false} onCheckedChange={() => {}} disabled />
        <Text className="opacity-50">Disabled option</Text>
      </View>
    </View>
  );
}
