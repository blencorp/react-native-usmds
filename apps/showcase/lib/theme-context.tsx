import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme, vars } from 'nativewind';
import * as React from 'react';
import { Platform, View } from 'react-native';
import { getAgencyTheme, type ThemeColors } from './agency-themes';

export type ThemeId = 'usa' | 'va' | 'usda' | 'cms' | 'cdc' | 'maryland' | 'california' | 'utah' | 'newyork';

export type ThemeInfo = {
  id: ThemeId;
  name: string;
  description: string;
  type: 'federal' | 'state';
  designSystemUrl: string;
  colorPaletteUrl: string;
  fonts: {
    primary: string;
    secondary?: string;
  };
};

export const AVAILABLE_THEMES: Record<ThemeId, ThemeInfo> = {
  usa: {
    id: 'usa',
    name: 'USA (USWDS)',
    description: 'U.S. Web Design System - The design system for the federal government',
    type: 'federal',
    designSystemUrl: 'https://designsystem.digital.gov/',
    colorPaletteUrl: 'https://designsystem.digital.gov/design-tokens/color/overview/',
    fonts: {
      primary: 'Source Sans Pro',
      secondary: 'Merriweather',
    },
  },
  va: {
    id: 'va',
    name: 'Department of Veterans Affairs',
    description: 'Design system for the Department of Veterans Affairs',
    type: 'federal',
    designSystemUrl: 'https://design.va.gov/',
    colorPaletteUrl: 'https://design.va.gov/foundation/color-palette',
    fonts: {
      primary: 'Source Sans Pro',
      secondary: 'Bitter',
    },
  },
  usda: {
    id: 'usda',
    name: 'USDA (Department of Agriculture)',
    description: 'FSA Design System for the Department of Agriculture',
    type: 'federal',
    designSystemUrl: 'https://usda-fsa.github.io/fsa-design-system/',
    colorPaletteUrl: 'https://usda-fsa.github.io/fsa-design-system/visual-style/color/',
    fonts: {
      primary: 'Arial',
      secondary: 'Verdana',
    },
  },
  cms: {
    id: 'cms',
    name: 'CMS (Centers for Medicare & Medicaid)',
    description: 'Design system for the Centers for Medicare & Medicaid Services',
    type: 'federal',
    designSystemUrl: 'https://design.cms.gov/',
    colorPaletteUrl: 'https://design.cms.gov/foundation/theme-colors/',
    fonts: {
      primary: 'Open Sans',
    },
  },
  cdc: {
    id: 'cdc',
    name: 'CDC (Centers for Disease Control)',
    description: 'WCMS Design System for the Centers for Disease Control and Prevention',
    type: 'federal',
    designSystemUrl: 'https://www.cdc.gov/wcms/',
    colorPaletteUrl: 'https://www.cdc.gov/wcms/4.0/cdc-wp/page-and-site-options/preferred-color-pairings.html',
    fonts: {
      primary: 'Lato',
      secondary: 'Arial',
    },
  },
  maryland: {
    id: 'maryland',
    name: 'Maryland',
    description: 'Design system for the State of Maryland',
    type: 'state',
    designSystemUrl: 'https://maryland.gov/',
    colorPaletteUrl: 'https://maryland.gov/',
    fonts: {
      primary: 'Open Sans',
    },
  },
  california: {
    id: 'california',
    name: 'California',
    description: 'Design system for the State of California',
    type: 'state',
    designSystemUrl: 'https://designsystem.webstandards.ca.gov/',
    colorPaletteUrl: 'https://designsystem.webstandards.ca.gov/',
    fonts: {
      primary: 'Public Sans',
    },
  },
  utah: {
    id: 'utah',
    name: 'Utah',
    description: 'Design system for the State of Utah',
    type: 'state',
    designSystemUrl: 'https://utahdesignsystem.utah.gov/',
    colorPaletteUrl: 'https://utahdesignsystem.utah.gov/',
    fonts: {
      primary: 'Source Sans Pro',
    },
  },
  newyork: {
    id: 'newyork',
    name: 'New York',
    description: 'Design system for the State of New York',
    type: 'state',
    designSystemUrl: 'https://designsystem.ny.gov/',
    colorPaletteUrl: 'https://designsystem.ny.gov/foundations/tokens/',
    fonts: {
      primary: 'Public Sans',
    },
  },
};

type ThemeContextType = {
  currentTheme: ThemeId;
  setTheme: (themeId: ThemeId) => Promise<void>;
  themeInfo: ThemeInfo;
  colors: ThemeColors;
  colorScheme: 'light' | 'dark';
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = '@showcase/selected-theme';

/**
 * Convert ThemeColors to CSS variables format for NativeWind
 * Strips 'hsl()' wrapper since Tailwind config adds it back
 */
function colorsToCSSVars(colors: ThemeColors): Record<string, string> {
  const cssVars: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    if (key === 'radius') {
      cssVars['--radius'] = value;
      continue;
    }

    // Convert camelCase to kebab-case for CSS variables
    const cssKey = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();

    // Strip 'hsl()' wrapper: 'hsl(209 100% 32%)' → '209 100% 32%'
    const cssValue = value.replace(/^hsl\((.*)\)$/, '$1');

    cssVars[cssKey] = cssValue;
  }

  return cssVars;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeId>('usa');
  const { colorScheme = 'light' } = useColorScheme();

  // Load saved theme on mount
  React.useEffect(() => {
    async function loadTheme() {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && savedTheme in AVAILABLE_THEMES) {
          setCurrentTheme(savedTheme as ThemeId);
        }
      } catch (error) {
        console.warn('Failed to load saved theme:', error);
      }
    }
    loadTheme();
  }, []);

  // Get current theme colors based on agency and light/dark mode
  const colors = React.useMemo(() => {
    return getAgencyTheme(currentTheme, colorScheme);
  }, [currentTheme, colorScheme]);

  // Convert colors to CSS variables wrapped with vars() for NativeWind
  const themeVars = React.useMemo(() => {
    const cssVars = colorsToCSSVars(colors);
    return vars(cssVars);
  }, [colors]);

  // Apply CSS variables globally on web
  React.useEffect(() => {
    if (Platform.OS === 'web' && typeof document !== 'undefined') {
      const cssVars = colorsToCSSVars(colors);
      const root = document.documentElement;

      // Set all CSS variables on :root
      Object.entries(cssVars).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, [colors]);

  const setTheme = React.useCallback(async (themeId: ThemeId) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, themeId);
      setCurrentTheme(themeId);

      console.log(`Theme switched to: ${themeId} (${colorScheme} mode)`);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  }, [colorScheme]);

  const value = React.useMemo(
    () => ({
      currentTheme,
      setTheme,
      themeInfo: AVAILABLE_THEMES[currentTheme],
      colors,
      colorScheme,
    }),
    [currentTheme, setTheme, colors, colorScheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <View style={themeVars} className="flex-1 bg-background">
        {children}
      </View>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

/**
 * Hook to get the current theme's border radius value
 * Useful for applying dynamic radius on native platforms where CSS vars don't work
 */
export function useRadius() {
  const { colors } = useTheme();

  // Parse the radius value (e.g., "0.625rem" -> 10)
  const radiusRem = parseFloat(colors.radius);
  const radiusPx = radiusRem * 16; // Convert rem to px (assuming 16px = 1rem)

  return {
    // Base radius
    lg: radiusPx,
    // Medium (radius - 2px)
    md: Math.max(0, radiusPx - 2),
    // Small (radius - 4px)
    sm: Math.max(0, radiusPx - 4),
    // Extra large (radius + 4px)
    xl: radiusPx + 4,
    // Raw value
    raw: colors.radius,
  };
}
