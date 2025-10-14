'use client';

import React from 'react';
import { Link } from '@/registry/usa/components/ui/link';

export function LinkPreview() {
  const [visited1, setVisited1] = React.useState(false);
  const [visited2, setVisited2] = React.useState(false);

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Link
        href="#default"
        label="Default link"
        onPress={() => setVisited1(true)}
        visited={visited1}
      />
      <Link
        href="https://example.com"
        label="External link"
        external
        onPress={() => setVisited2(true)}
        visited={visited2}
      />
      <Link
        href="#visited"
        label="Visited link"
        visited
      />
      <Link
        href="#focus"
        label="Link with focus"
        focus
      />
    </div>
  );
}
