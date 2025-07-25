"use client";

import React from "react";
import * as USMDSWeb from "..//components-web"; // or "@/components-web" if alias works
import { LiveProvider, LiveError, LivePreview } from "react-live";

const scope = {
  React,
  ...USMDSWeb,
};

export default function LivePreviewWrapper({ code }: { code: string }) {
  return (
    <LiveProvider code={code} scope={scope}>
      <LivePreview className="p-4 bg-white border border-dashed border-gray-300 rounded shadow-md" />
      <LiveError className="text-red-500 mt-2 whitespace-pre-wrap text-sm" />
    </LiveProvider>
  );
}
