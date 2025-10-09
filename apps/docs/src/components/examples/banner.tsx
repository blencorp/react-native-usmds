'use client';

import React from 'react';
import { Banner } from '@/registry/components/ui/banner';
import { Bell } from 'lucide-react-native';

export function BannerPreview() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Banner
        variant="standard-app"
        link="Here's how you know"
      />
      <Banner
        variant="welcome"
        title="Welcome back, User"
        trailingIcon={<Bell color="#1B1B1B" size={24} />}
      />
    </div>
  );
}
