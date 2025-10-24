"use client";

import React from "react";
import { Skeleton } from "@/registry/usa/components/ui/skeleton";

export function SkeletonPreview() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <div className="flex items-center gap-4">
        <Skeleton className="size-12 rounded-full" />
        <div className="flex flex-col flex-1 gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
