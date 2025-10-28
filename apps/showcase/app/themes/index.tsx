import { Text } from '@registry/usa/components/ui/text';
import { cn } from '@registry/usa/lib/utils';
import { AgencyLogo } from '@showcase/components/agency-logo';
import { AVAILABLE_THEMES, useTheme, type ThemeId } from '@showcase/lib/theme-context';
import { Check } from 'lucide-react-native';
import * as React from 'react';
import { View, ScrollView, Pressable, Platform } from 'react-native';

type ThemeCardProps = {
  themeId: ThemeId;
  isSelected: boolean;
  onSelect: () => void;
};

function ThemeCard({ themeId, isSelected, onSelect }: ThemeCardProps) {
  const theme = AVAILABLE_THEMES[themeId];

  return (
    <Pressable
      onPress={onSelect}
      className={cn(
        'rounded-2xl border-2 bg-card p-6 shadow-sm shadow-black/5',
        isSelected ? 'border-primary' : 'border-border',
        Platform.select({
          web: 'transition-all hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        })
      )}>
      <View className="gap-4">
        {/* Agency Logo */}
        <View className="flex-row items-center justify-between">
          <AgencyLogo themeId={themeId} size="md" />
          {isSelected && (
            <View className="rounded-full bg-primary p-1.5">
              <Check size={16} color="white" strokeWidth={3} />
            </View>
          )}
        </View>

        {/* Header with name */}
        <View className="gap-1">
          <Text className="text-xl font-bold text-foreground">{theme.name}</Text>
          <Text className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {theme.type === 'federal' ? 'Federal Agency' : 'State Government'}
          </Text>
        </View>

        {/* Description */}
        <Text className="text-sm leading-5 text-muted-foreground">{theme.description}</Text>

        {/* Typography info */}
        <View className="gap-1 rounded-lg bg-muted/50 p-3">
          <Text className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Typography
          </Text>
          <Text className="text-sm text-foreground">
            {theme.fonts.primary}
            {theme.fonts.secondary && ` / ${theme.fonts.secondary}`}
          </Text>
        </View>

        {/* Links */}
        <View className="flex-row flex-wrap gap-2">
          <View className="rounded-md bg-accent/30 px-2 py-1">
            <Text className="text-xs text-foreground">Design System</Text>
          </View>
          <View className="rounded-md bg-accent/30 px-2 py-1">
            <Text className="text-xs text-foreground">Color Palette</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default function ThemesScreen() {
  const { currentTheme, setTheme } = useTheme();

  const federalThemes: ThemeId[] = ['usa', 'va', 'usda', 'cms', 'cdc'];
  const stateThemes: ThemeId[] = ['maryland', 'california', 'utah'];

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="px-4 pb-8"
      showsVerticalScrollIndicator={false}>
      <View className="web:p-4 mx-auto w-full max-w-3xl gap-6 pt-6">
        {/* Info Card */}
        <View className="rounded-2xl border border-border bg-card/50 p-4">
          <Text className="text-sm leading-6 text-muted-foreground">
            Select a theme to apply that agency's design system (colors and typography) to the
            showcase app. Theme definitions are being implemented in issue #200.
          </Text>
        </View>

        {/* Federal Agencies Section */}
        <View className="gap-4">
          <Text className="text-2xl font-bold text-foreground">Federal Agencies</Text>
          {federalThemes.map((themeId) => (
            <ThemeCard
              key={themeId}
              themeId={themeId}
              isSelected={currentTheme === themeId}
              onSelect={() => setTheme(themeId)}
            />
          ))}
        </View>

        {/* State Governments Section */}
        <View className="gap-4">
          <Text className="text-2xl font-bold text-foreground">State Governments</Text>
          {stateThemes.map((themeId) => (
            <ThemeCard
              key={themeId}
              themeId={themeId}
              isSelected={currentTheme === themeId}
              onSelect={() => setTheme(themeId)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
