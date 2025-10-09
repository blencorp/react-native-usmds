'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { type SelectProps } from '@radix-ui/react-select';
import { getCookie, setCookie } from 'cookies-next/client';
import * as React from 'react';

const PLATFORMS = [
  { name: 'web', label: 'Web' },
  { name: 'native', label: 'Native' },
] as const;

type Platform = (typeof PLATFORMS)[number]['name'];

export function PlatformSelect(props: SelectProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // Use props directly or fall back to internal hook
  const value = props.value || 'web';
  const onValueChange = props.onValueChange || (() => {});

  return (
    <Select {...props} defaultValue="web" value={value} onValueChange={onValueChange}>
      <Button asChild variant="outline" size="sm">
        <SelectTrigger className="dark:bg-muted dark:hover:bg-muted/80 border-0 w-fit">
          <span className="text-muted-foreground flex-1 pr-1">Platform:</span>
          {!isClient ? (
            <span className="opacity-50">
              {PLATFORMS.find((p) => p.name === value)?.label || 'Web'}
            </span>
          ) : (
            <SelectValue placeholder="Select platform" />
          )}
        </SelectTrigger>
      </Button>
      <SelectContent onCloseAutoFocus={preventDefault} className="dark:bg-neutral-900">
        {PLATFORMS.map((platform) => (
          <SelectItem key={platform.name} value={platform.name} className="text-xs">
            {platform.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function usePlatform() {
  const [platform, setPlatform] = React.useState<Platform>('web');

  React.useEffect(() => {
    const stored = getCookie('user.platform') as Platform | undefined;
    if (stored) {
      setPlatform(stored);
    }
  }, []);

  function onPlatformChange(value: Platform) {
    setPlatform(value);
    setCookie('user.platform', value);
  }

  return [platform, onPlatformChange] as const;
}

function preventDefault(e: Event) {
  e.preventDefault();
}