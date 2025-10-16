'use client';

import React from 'react';
import { Banner } from '@/registry/usa/components/ui/banner';

export function BannerPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div>
        <p className="text-sm font-semibold mb-2">Default (.gov, English)</p>
        <Banner variant="standard-app" />
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">Spanish (.gov, Español)</p>
        <Banner variant="standard-app" language="es" />
      </div>

      <div>
        <p className="text-sm font-semibold mb-2">.mil Domain</p>
        <Banner variant="standard-app" domain="mil" />
      </div>
    </div>
  );
}
