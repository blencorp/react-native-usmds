import '../global.css';

import { Text } from '@registry/usa/components/ui/text';
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { HeaderRightView } from '@showcase/components/header-right-view';
import { useGeistFont } from '@showcase/hooks/use-geist-font';
import { ComponentRegistryProvider } from '@showcase/lib/registry-context';
import { ThemeProvider, useTheme } from '@showcase/lib/theme-context';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

SplashScreen.preventAutoHideAsync();

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

/**
 * Inner Layout Component
 * Uses theme context to apply agency colors to navigation
 */
function AppLayout() {
  const { colors, colorScheme } = useTheme();

  // Create navigation theme from current agency colors
  const navigationTheme = React.useMemo(() => {
    const baseTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;
    return {
      ...baseTheme,
      colors: {
        ...baseTheme.colors,
        background: colors.background,
        border: colors.border,
        card: colors.card,
        notification: colors.destructive,
        primary: colors.primary,
        text: colors.foreground,
      },
    };
  }, [colors, colorScheme]);

  return (
    <NavigationThemeProvider value={navigationTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardProvider>
          <ComponentRegistryProvider>
            <Stack
              screenOptions={{
                headerBackTitle: 'Back',
                headerTitle(props) {
                  return (
                    <Text className="android:mt-1.5 text-xl font-medium">
                      {toOptions(
                        typeof props.children === 'string'
                          ? props.children.split('/').pop() ?? ''
                          : ''
                      )}
                    </Text>
                  );
                },
                headerRight: () => <HeaderRightView />,
              }}>
              <Stack.Screen
                name="index"
                options={{
                  headerTitle: 'USMDS Showcase',
                  headerShadowVisible: false,
                  headerTransparent: false,
                }}
              />
              <Stack.Screen
                name="components/index"
                options={{
                  headerTitle: 'Components',
                  headerShadowVisible: false,
                }}
              />
              <Stack.Screen
                name="themes/index"
                options={{
                  headerTitle: 'Themes',
                  headerShadowVisible: false,
                }}
              />
            </Stack>
          </ComponentRegistryProvider>
          <PortalHost />
        </KeyboardProvider>
      </GestureHandlerRootView>
    </NavigationThemeProvider>
  );
}

export default function RootLayout() {
  const [loaded, error] = useGeistFont();

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}

function toOptions(name: string) {
  const title = name
    .split('-')
    .map((str) => str.replace(/\b\w/g, (char) => char.toUpperCase()))
    .join(' ');
  return title || 'Showcase';
}
