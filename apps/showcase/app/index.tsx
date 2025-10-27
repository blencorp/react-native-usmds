import { Text } from '@registry/usa/components/ui/text';
import { Icon } from '@registry/usa/components/ui/icon';
import { cn } from '@registry/usa/lib/utils';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { Image, Platform, Pressable, View, ScrollView } from 'react-native';
import { useComponentRegistry } from '@showcase/lib/registry-context';
import { usePackageVersion } from '@showcase/hooks/use-package-version';
import { LinearGradient } from 'expo-linear-gradient';

const GRADIENT_COLORS = {
  blue: {
    light: ['#d9e8f6', '#aacdec'] as const, // USWDS blue-10 to blue-20
    dark: ['#005ea2', '#0b4778'] as const // USWDS blue-60v to blue-70v
  },
  red: {
    light: ['#f8eff1', '#f4d5d8'] as const, // USWDS red-5 to red-10
    dark: ['#b51d09', '#8b1303'] as const // USWDS red-60 to red-70
  },
  indigo: {
    light: ['#e7e9f5', '#c5cae9'] as const, // USWDS indigo-5 to indigo-10
    dark: ['#3d4076', '#2e2e5f'] as const // USWDS indigo-70 to indigo-80
  }
} as const;

type CardProps = {
  title: string;
  subtitle: string;
  count: number;
  href: '/components' | '/themes';
  gradient: 'blue' | 'red' | 'indigo';
};

function LandingCard({ title, subtitle, count, href, gradient }: CardProps) {
  const { colorScheme } = useColorScheme();

  const colors = GRADIENT_COLORS[gradient][colorScheme === 'dark' ? 'dark' : 'light'];

  return (
    <Link href={href} asChild>
      <Pressable
        role='button'
        className={cn(
          Platform.select({
            web: 'transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          })
        )}
      >
        <LinearGradient
          colors={colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className='min-h-[200px] overflow-hidden rounded-lg p-6 shadow-sm shadow-black/10'
        >
          {/* Count Badge */}
          <View className='mb-8 self-start rounded-full px-2 py-2'>
            <Text className='text-2xl font-bold text-foreground'>{count}</Text>
          </View>

          {/* Content */}
          <View className='flex-1 justify-end gap-1 px-2 py-2'>
            <View className='flex-row items-center justify-between'>
              <View className='flex-1'>
                <Text className='text-3xl font-bold text-foreground'>{title}</Text>
                <Text className='mt-1 text-base text-muted-foreground'>{subtitle}</Text>
              </View>
              <Icon as={ChevronRight} className='size-6 stroke-[2px] text-foreground/70' />
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Link>
  );
}

export default function LandingScreen() {
  const { components } = useComponentRegistry();
  const { version } = usePackageVersion();

  const componentsCount = components.length;
  // 5 federal agencies + 3 state governments = 8 themes total
  const themesCount = 8;

  return (
    <ScrollView className='flex-1 bg-background' contentContainerClassName='px-4 pb-8' showsVerticalScrollIndicator={false}>
      <View className='web:p-4 mx-auto w-full max-w-3xl gap-6 pt-6'>
        {/* Logo and Version */}
        <View className='items-center gap-2'>
          <Image source={require('@showcase/assets/images/b_logo.png')} style={{ width: 120, height: 120 }} resizeMode='contain' />
          <Text className='text-lg text-muted-foreground'>v{version}</Text>
        </View>

        {/* Cards */}
        <View className='gap-4'>
          <LandingCard title='Components' subtitle='Explore all components' count={componentsCount} href='/components' gradient='blue' />

          <LandingCard title='Themes' subtitle='Try different themes' count={themesCount} href='/themes' gradient='red' />
        </View>
      </View>
    </ScrollView>
  );
}
