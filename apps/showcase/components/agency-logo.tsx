import { Text } from '@registry/usa/components/ui/text';
import { cn } from '@registry/usa/lib/utils';
import type { ThemeId } from '@showcase/lib/theme-context';
import { Image } from 'expo-image';
import * as React from 'react';
import { View } from 'react-native';

type AgencyLogoProps = {
  themeId: ThemeId;
  size?: 'sm' | 'md' | 'lg';
};

// Official agency logo URLs from their design systems
const LOGO_URLS: Record<ThemeId, string | null> = {
  usa: 'https://pbs.twimg.com/profile_images/1055956632578998272/kVxD63U2_400x400.jpg',
  va: 'https://s3-us-gov-west-1.amazonaws.com/content.www.va.gov/img/header-logo.png',
  usda: 'https://www.usda.gov/themes/custom/usda_uswds/img/usda-symbol.svg',
  cms: 'https://www.cms.gov/themes/custom/cms_evo/logo.svg',
  cdc: 'https://www.cdc.gov/TemplatePackage/5.0/img/logo/logo2.svg',
  maryland: 'https://digital.maryland.gov/MD_Logo.svg',
  california: 'https://www.ca.gov/images/CAgov-logo.svg?v7F3A',
  utah: 'http://www.utah.gov/img/logos/utahgov-udsagency.svg'
};

// Fallback for agencies without logos yet
const LOGO_INITIALS: Record<ThemeId, string> = {
  usa: 'US',
  va: 'VA',
  usda: 'USDA',
  cms: 'CMS',
  cdc: 'CDC',
  maryland: 'MD',
  california: 'CA',
  utah: 'UT'
};

const LOGO_COLORS: Record<ThemeId, string> = {
  usa: 'bg-blue-600',
  va: 'bg-blue-700',
  usda: 'bg-green-700',
  cms: 'bg-blue-800',
  cdc: 'bg-indigo-700',
  maryland: 'bg-yellow-600',
  california: 'bg-blue-500',
  utah: 'bg-red-600'
};

export function AgencyLogo({ themeId, size = 'md' }: AgencyLogoProps) {
  const logoUrl = LOGO_URLS[themeId];

  const sizeValues = {
    sm: 40,
    md: 64,
    lg: 96
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  // If logo URL exists, show image
  if (logoUrl) {
    // VA logo needs special handling - scale it up since the image is very small
    const imageScale = themeId === 'va' ? 1.5 : 0.85;

    return (
      <View
        className="items-center justify-center rounded-lg bg-muted/20"
        style={{ width: sizeValues[size], height: sizeValues[size] }}>
        <Image
          source={{ uri: logoUrl }}
          style={{ width: sizeValues[size] * imageScale, height: sizeValues[size] * imageScale }}
          contentFit='contain'
          placeholder={{ blurhash: 'L5H2EC=PM+yV+^jYRrxuwPj[R%M|' }}
          transition={200}
          onError={(error) => {
            console.warn(`Failed to load logo for ${themeId}:`, error);
          }}
        />
      </View>
    );
  }

  // Otherwise show placeholder badge
  return (
    <View
      className={cn('items-center justify-center rounded-lg', LOGO_COLORS[themeId])}
      style={{ width: sizeValues[size], height: sizeValues[size] }}
    >
      <Text className={cn('font-bold text-white', textSizeClasses[size])}>{LOGO_INITIALS[themeId]}</Text>
    </View>
  );
}

// Official logo sources for reference:
// USA (USWDS): https://designsystem.digital.gov/
// VA: https://design.va.gov/
// USDA: https://usda-fsa.github.io/fsa-design-system/
// CMS: https://design.cms.gov/
// CDC: https://www.cdc.gov/
// Maryland: https://maryland.gov/
// California: https://designsystem.webstandards.ca.gov/
// Utah: https://utahdesignsystem.utah.gov/
