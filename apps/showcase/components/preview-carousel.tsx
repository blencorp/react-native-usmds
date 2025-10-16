import { Button } from '@registry/usa/components/ui/button';
import { Icon } from '@registry/usa/components/ui/icon';
import { cn } from '@registry/usa/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import * as React from 'react';
import { useState } from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import { cssInterop } from 'nativewind';

const windowWidth = Dimensions.get('window').width;

cssInterop(FlatList, { className: 'style', contentContainerClassName: 'contentContainerStyle' });

type PreviewCarouselProps = {
  previews: { name: string; component: React.ComponentType }[];
  removeBottomSafeArea?: boolean;
};

function PreviewCarousel({ previews, removeBottomSafeArea = false }: PreviewCarouselProps) {
  const [index, setIndex] = useState(0);
  const ref = React.useRef<FlatList<{ name: string; component: React.ComponentType }>>(null);

  function onScroll(ev: NativeSyntheticEvent<NativeScrollEvent>) {
    const nextIndex = Math.round(ev.nativeEvent.contentOffset.x / windowWidth);
    if (Number.isFinite(nextIndex) && nextIndex !== index) {
      setIndex(nextIndex);
    }
  }

  function onPrevPress() {
    ref.current?.scrollToIndex({ index: Math.max(0, index - 1) });
  }

  function onNextPress() {
    ref.current?.scrollToIndex({ index: Math.min(previews.length - 1, index + 1) });
  }

  return (
    <>
      <FlatList
        ref={ref}
        data={previews}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        snapToInterval={windowWidth}
        decelerationRate="fast"
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName={cn(!removeBottomSafeArea && 'pb-12 mb-safe')}
      />
      {previews.length > 1 ? (
        <View className="mb-safe absolute bottom-0 left-0 right-0 h-12 flex-row items-center justify-center px-4">
          <View className="relative flex-row items-center justify-center gap-2">
            <View className="bg-background rounded-md">
              <Button variant="outline" size="icon" disabled={index === 0} onPress={onPrevPress}>
                <Icon as={ChevronLeft} className="size-4" />
              </Button>
            </View>
            <View className="bg-background rounded-md">
              <Button
                variant="outline"
                size="icon"
                disabled={index === previews.length - 1}
                onPress={onNextPress}>
                <Icon as={ChevronRight} className="size-4" />
              </Button>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
}

export { PreviewCarousel };

function renderItem({
  item,
}: ListRenderItemInfo<{
  name: string;
  component: React.ComponentType;
}>) {
  const Component = item.component;
  return (
    <View className="w-screen flex-1 items-center justify-center px-6">
      <Component />
    </View>
  );
}

function keyExtractor(item: { name: string }) {
  return item.name;
}
