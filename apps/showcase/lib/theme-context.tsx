import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';

// Theme definitions will be implemented in issue #200
export type ThemeId = 'usa' | 'va' | 'usda' | 'cms' | 'cdc' | 'maryland' | 'california' | 'utah';

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
};

type ThemeContextType = {
  currentTheme: ThemeId;
  setTheme: (themeId: ThemeId) => Promise<void>;
  themeInfo: ThemeInfo;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const THEME_STORAGE_KEY = '@showcase/selected-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeId>('usa');

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

  const setTheme = React.useCallback(async (themeId: ThemeId) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, themeId);
      setCurrentTheme(themeId);

      // TODO: Apply theme colors and fonts (will be implemented in issue #200)
      // This is where we would:
      // 1. Update CSS custom properties
      // 2. Load custom fonts if needed
      // 3. Trigger app re-render with new theme
      console.log(`Theme switched to: ${themeId}`);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  }, []);

  const value = React.useMemo(
    () => ({
      currentTheme,
      setTheme,
      themeInfo: AVAILABLE_THEMES[currentTheme],
    }),
    [currentTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
