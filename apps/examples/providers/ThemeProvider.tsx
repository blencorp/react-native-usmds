import { useColorScheme } from 'nativewind';
import { createContext, useContext, useEffect } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    // Set initial theme
    setColorScheme('light');
  }, []);

  const setTheme = (theme: 'dark' | 'light') => {
    setColorScheme(theme);
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        theme: colorScheme as 'dark' | 'light',
        setTheme
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
