"use client";

import React from "react";
import { ButtonGroup } from "@/registry/usa/components/ui/buttongroup";
import { Button } from "@/registry/usa/components/ui/button";
import { Text } from "@/registry/usa/components/ui/text";

export function ButtonGroupPreview() {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground mb-1">Vertical</p>
        <ButtonGroup orientation="vertical" gap={8}>
          <Button variant="default">
            <Text>Primary</Text>
          </Button>
          <Button variant="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button variant="outline">
            <Text>Outline</Text>
          </Button>
        </ButtonGroup>
      </div>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground mb-1">Horizontal</p>
        <ButtonGroup orientation="horizontal" gap={8}>
          <Button variant="default">
            <Text>Save</Text>
          </Button>
          <Button variant="outline">
            <Text>Cancel</Text>
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
