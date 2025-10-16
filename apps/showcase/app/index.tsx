import { Icon } from '@registry/usa/components/ui/icon';
import { Text } from '@registry/usa/components/ui/text';
import { TextInput } from '@registry/usa/components/ui/textinput';
import { cn } from '@registry/usa/lib/utils';
import { useScrollToTop } from '@react-navigation/native';
import { FlashList, type ListRenderItemInfo } from '@shopify/flash-list';
import { COMPONENTS, type ShowcaseListItem } from '@showcase/lib/constants';
import { NAV_THEME } from '@showcase/lib/theme';
import { Link } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';
import { cssInterop, useColorScheme } from 'nativewind';
import * as React from 'react';
import { Platform, Pressable, View } from 'react-native';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

cssInterop(FlashList, { className: 'style', contentContainerClassName: 'contentContainerStyle' });

export default function ComponentsScreen() {
  const { colorScheme } = useColorScheme();
  const [search, setSearch] = React.useState('');
  const [isAtTop, setIsAtTop] = React.useState(true);
  const isAtTopRef = React.useRef(true);
  const flashListRef = React.useRef<React.ComponentRef<typeof FlashList<ShowcaseListItem>>>(null);
  useScrollToTop(flashListRef);

  const data = React.useMemo<ShowcaseListItem[]>(() => {
    if (!search.trim()) {
      return COMPONENTS;
    }

    const needle = search.toLowerCase();
    return COMPONENTS.filter((item) =>
      `${item.title} ${item.tags?.join(' ') ?? ''}`.toLowerCase().includes(needle)
    );
  }, [search]);

  const handleScrollState = React.useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const isScrollAtTop = event.nativeEvent.contentOffset.y <= 0;
    if (isScrollAtTop !== isAtTopRef.current) {
      isAtTopRef.current = isScrollAtTop;
      setIsAtTop(isScrollAtTop);
    }
  }, []);

  const onListScroll = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      handleScrollState(event);
    },
    [handleScrollState]
  );

  const renderItem = React.useCallback(
    ({ item }: ListRenderItemInfo<ShowcaseListItem>) => (
      <Link href={{ pathname: '/components/[slug]', params: { slug: item.slug } }} asChild>
        <Link.Trigger>
          <Pressable
            role="button"
            className={cn(
              'bg-card border-border/80 active:bg-accent/25 flex-row items-start justify-between gap-3 rounded-2xl border px-4 py-4 shadow-sm shadow-black/5',
              Platform.select({
                web: 'transition-colors hover:border-border hover:bg-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
              })
            )}>
            <View className="flex-1 gap-1">
              <Text className="text-lg font-semibold text-foreground">{item.title}</Text>
              {!!item.description && (
                <Text className="text-sm leading-5 text-muted-foreground">{item.description}</Text>
              )}
            </View>
            <Icon as={ChevronRight} className="mt-1 size-4 stroke-[1.5px] text-muted-foreground" />
          </Pressable>
        </Link.Trigger>
        <Link.Preview
          style={{ backgroundColor: NAV_THEME[colorScheme ?? 'light'].colors.background }}
        />
      </Link>
    ),
    [colorScheme]
  );

  return (
    <View
      className={cn(
        'web:p-4 mx-auto w-full max-w-3xl flex-1 bg-background',
        Platform.select({ android: cn('border-border/0 border-t', !isAtTop && 'border-border') })
      )}>
      <FlashList
        ref={flashListRef}
        data={data}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerClassName="px-4 pb-8 pt-4"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        onScroll={onListScroll}
        ListHeaderComponent={
          <View className="gap-4 pb-4 pt-2">
            <Text className="text-4xl font-semibold text-foreground">Showcase</Text>
            <TextInput
              placeholder="Search components"
              clearButtonMode="always"
              onChangeText={setSearch}
              autoCorrect={false}
              value={search}
              className="min-h-[48px] rounded-2xl border border-border/70 bg-background/80 px-4"
            />
          </View>
        }
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View className="h-3" />}
        ListFooterComponent={<View className="android:pb-safe h-4" />}
      />
    </View>
  );
}
