"use client";

import React from "react";
import { Text } from "@/registry/usa/components/ui/text";

export function TextPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl">
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="p">
        This is a paragraph with proper spacing and line height for improved
        readability.
      </Text>
      <Text variant="lead">
        This is lead text, typically used for introductory paragraphs.
      </Text>
      <Text variant="large">Large Text</Text>
      <Text variant="default">Default Text</Text>
      <Text variant="small">Small Text</Text>
      <Text variant="muted">Muted text with reduced emphasis.</Text>
      <Text variant="code">const hello = "world";</Text>
      <Text variant="blockquote">
        "This is a blockquote with italic styling and a left border."
      </Text>
    </div>
  );
}
