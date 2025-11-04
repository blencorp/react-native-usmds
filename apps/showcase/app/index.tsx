import { Text } from '@registry/usa/components/ui/text';
import { Icon } from '@registry/usa/components/ui/icon';
import { cn } from '@registry/usa/lib/utils';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import * as React from 'react';
import { Image, Platform, Pressable, View } from 'react-native';
import { useComponentRegistry } from '@showcase/lib/registry-context';
import { usePackageVersion } from '@showcase/hooks/use-package-version';

type CardProps = {
  title: string;
  subtitle: string;
  count: number;
  href: '/components' | '/themes';
};

function LandingCard({ title, subtitle, count, href }: CardProps) {
  return (
    <Link href={href} asChild>
      <Pressable
        role='button'
        className={cn(
          'rounded-2xl border-2 border-border bg-card p-6 shadow-sm shadow-black/5',
          Platform.select({
            web: 'transition-all hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
          })
        )}
      >
        <View className='gap-4'>
          {/* Header with count badge */}
          <View className='flex-row items-center justify-between'>
            <View className='rounded-full bg-primary/10 px-3 py-1'>
              <Text className='text-lg font-bold'>{count}</Text>
            </View>
          </View>

          {/* Title and subtitle */}
          <View className='gap-1'>
            <Text className='text-2xl font-bold text-foreground'>{title}</Text>
            <Text className='text-sm leading-5 text-muted-foreground'>{subtitle}</Text>
          </View>

          {/* Arrow indicator */}
          <View className='flex-row items-center justify-end'>
            <Icon as={ChevronRight} className='size-5 stroke-[2px] text-muted-foreground' />
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export default function LandingScreen() {
  const { components } = useComponentRegistry();
  const { packageVersion, appVersion } = usePackageVersion();

  const componentsCount = components.length;
  // 5 federal agencies + 4 state governments = 9 themes total
  const themesCount = 9;

  return (
    <View className='flex-1 bg-background'>
      <View className='web:p-4 mx-auto w-full max-w-3xl flex-1 justify-between px-4 pb-8 pt-6'>
        {/* Top content */}
        <View className='gap-6'>
          {/* Logo and Versions */}
          <View className='items-center gap-3'>
            <Image source={require('@showcase/assets/images/adaptive-icon.png')} style={{ width: 120, height: 120 }} resizeMode='contain' />

            {/* Version Info */}
            <View className='items-center gap-1'>
              <Text className='text-sm text-muted-foreground'>
                USMDS version {packageVersion}
              </Text>
              <Text className='text-sm text-muted-foreground'>
                Showcase app version {appVersion}
              </Text>
            </View>
          </View>

          {/* Cards */}
          <View className='gap-4'>
            <LandingCard title='Components' subtitle='Explore all components' count={componentsCount} href='/components' />

            <LandingCard title='Themes' subtitle='Try different themes' count={themesCount} href='/themes' />
          </View>
        </View>

        {/* Blen Logo at bottom */}
        <View className='items-center pb-4'>
          <Image source={require('@showcase/assets/images/b_logo.png')} style={{ width: 60, height: 60 }} resizeMode='contain' />
        </View>
      </View>
    </View>
  );
}
