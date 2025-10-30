/**
 * Agency Fonts Loader
 * Loads all fonts required by government agency design systems
 */

import { useFonts } from 'expo-font';
import {
  SourceSansPro_200ExtraLight,
  SourceSansPro_300Light,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from '@expo-google-fonts/source-sans-pro';
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from '@expo-google-fonts/open-sans';
import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';
import {
  PublicSans_200ExtraLight,
  PublicSans_300Light,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_800ExtraBold,
  PublicSans_900Black,
} from '@expo-google-fonts/public-sans';
import {
  Bitter_200ExtraLight,
  Bitter_300Light,
  Bitter_400Regular,
  Bitter_500Medium,
  Bitter_600SemiBold,
  Bitter_700Bold,
  Bitter_800ExtraBold,
  Bitter_900Black,
} from '@expo-google-fonts/bitter';

export function useAgencyFonts() {
  return useFonts({
    // Source Sans Pro - VA, USWDS, Utah
    SourceSansPro_200ExtraLight,
    SourceSansPro_300Light,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,

    // Open Sans - CMS, Maryland
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,

    // Lato - CDC
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,

    // Public Sans - California
    PublicSans_200ExtraLight,
    PublicSans_300Light,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_800ExtraBold,
    PublicSans_900Black,

    // Bitter - VA headings
    Bitter_200ExtraLight,
    Bitter_300Light,
    Bitter_400Regular,
    Bitter_500Medium,
    Bitter_600SemiBold,
    Bitter_700Bold,
    Bitter_800ExtraBold,
    Bitter_900Black,
  });
}

/**
 * Font family mappings for each agency theme
 */
export const AGENCY_FONT_FAMILIES = {
  usa: {
    body: 'SourceSansPro_400Regular',
    heading: 'SourceSansPro_700Bold',
  },
  va: {
    body: 'SourceSansPro_400Regular',
    heading: 'Bitter_700Bold',
  },
  usda: {
    body: 'System', // Arial/Verdana are system fonts
    heading: 'System',
  },
  cms: {
    body: 'OpenSans_400Regular',
    heading: 'OpenSans_700Bold',
  },
  cdc: {
    body: 'Lato_400Regular',
    heading: 'Lato_700Bold',
  },
  maryland: {
    body: 'OpenSans_400Regular',
    heading: 'OpenSans_700Bold',
  },
  california: {
    body: 'PublicSans_400Regular',
    heading: 'PublicSans_700Bold',
  },
  utah: {
    body: 'SourceSansPro_400Regular',
    heading: 'SourceSansPro_700Bold',
  },
} as const;
