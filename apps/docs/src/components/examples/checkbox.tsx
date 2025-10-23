"use client";

import React from "react";
import { View } from "react-native";
import { Checkbox } from "@/registry/usa/components/ui/checkbox";
import { Text } from "@/registry/usa/components/ui/text";

export function CheckboxPreview() {
  const [checked, setChecked] = React.useState(true);
  const [terms, setTerms] = React.useState(false);
  const [newsletter, setNewsletter] = React.useState(true);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-row items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} />
        <Text>Accept terms and conditions</Text>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Checkbox checked={terms} onCheckedChange={setTerms} />
        <Text>Subscribe to newsletter</Text>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Checkbox checked={newsletter} onCheckedChange={setNewsletter} />
        <Text>Receive product updates</Text>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Checkbox checked={false} onCheckedChange={() => {}} disabled />
        <Text className="opacity-50">Disabled option</Text>
      </div>
    </div>
  );
}
