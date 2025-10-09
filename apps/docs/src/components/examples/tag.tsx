'use client';

import React from 'react';
import { Tag } from '@/registry/components/ui/tag';

export function TagPreview() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md items-center">
      <div className="flex flex-row gap-2 flex-wrap justify-center">
        <Tag label="new" />
        <Tag label="beta" />
        <Tag label="pro" />
        <Tag label="sale" />
      </div>

      <div className="flex flex-row gap-2 flex-wrap justify-center">
        <Tag label="premium" size="big" />
        <Tag label="verified" size="big" />
        <Tag label="trending" size="big" />
      </div>
    </div>
  );
}
