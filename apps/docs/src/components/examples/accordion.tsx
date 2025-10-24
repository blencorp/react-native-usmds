"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/usa/components/ui/accordion";
import { Text } from "@/registry/usa/components/ui/text";

export function AccordionPreview() {
  return (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Text>Is it accessible?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Text>Is it styled?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with default styles that match the USWDS design
            system.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <Text>Is it animated?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It's animated by default using React Native Reanimated.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
