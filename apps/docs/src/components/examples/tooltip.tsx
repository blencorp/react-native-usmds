"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/usa/components/ui/tooltip";
import { Button } from "@/registry/usa/components/ui/button";
import { Text } from "@/registry/usa/components/ui/text";

export function TooltipPreview() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Text>Hover me</Text>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Text>Add to library</Text>
      </TooltipContent>
    </Tooltip>
  );
}
