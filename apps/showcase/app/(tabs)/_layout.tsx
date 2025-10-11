import { Tabs } from "expo-router";

import { TabBarIcon } from "@/components/tabbar-icon";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { THEME } from "@/lib/theme";

export default function TabsLayout() {
  const { isDarkColorScheme } = useColorScheme();

  const palette = isDarkColorScheme ? THEME.dark : THEME.light;
  const inactiveTint = isDarkColorScheme
    ? THEME.dark.mutedForeground
    : THEME.light.mutedForeground;

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.primary,
        tabBarInactiveTintColor: inactiveTint,
        tabBarStyle: {
          backgroundColor: palette.background,
          borderTopColor: palette.border,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon color={color} name="home" />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="compass" />
          ),
        }}
      />
    </Tabs>
  );
}
