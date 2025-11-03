import { Text } from '@registry/usa/components/ui/text';
import { cn } from '@registry/usa/lib/utils';
import * as React from 'react';
import { ScrollView, View } from 'react-native';

type PreviewListProps = {
  previews: { name: string; component: React.ComponentType }[];
  removeBottomSafeArea?: boolean;
};

function PreviewList({ previews, removeBottomSafeArea = false }: PreviewListProps) {
  return (
    <ScrollView
      className="flex-1"
      contentContainerClassName={cn('px-4 py-6 gap-8', !removeBottomSafeArea && 'pb-safe')}
      showsVerticalScrollIndicator={false}>
      {previews.map((item, index) => {
        const Component = item.component;
        return (
          <View key={item.name} className="gap-4">
            {/* Preview Label */}
            <View className="flex-row items-center justify-between">
              <Text className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {item.name}
              </Text>
              <Text className="text-xs text-muted-foreground">
                {index + 1} / {previews.length}
              </Text>
            </View>

            {/* Preview Component */}
            <View className="min-h-[200px] items-center justify-center rounded-2xl border border-border bg-card/50 p-6">
              <Component />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

export { PreviewList };
