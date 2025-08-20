import { ScrollView, View } from 'react-native';
import { Text } from '../../../storybook/components/Text/Text';

export default function TextScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 p-4 gap-4">
        <Text className="text-4xl font-bold">Heading 1</Text>
        <Text className="text-3xl font-semibold">Heading 2</Text>
        <Text className="text-2xl font-semibold">Heading 3</Text>
        <Text className="text-xl font-medium">Heading 4</Text>
        <Text className="text-lg">Body Large</Text>
        <Text>Body Default</Text>
        <Text className="text-sm">Body Small</Text>
        <Text className="text-xs text-muted-foreground">Caption</Text>
        <Text className="font-mono">Monospace Text</Text>
        <Text className="italic">Italic Text</Text>
        <Text className="underline">Underlined Text</Text>
        <Text className="line-through">Strikethrough Text</Text>
        <Text className="text-primary">Primary Color</Text>
        <Text className="text-destructive">Destructive Color</Text>
        <Text className="text-muted-foreground">Muted Text</Text>
      </View>
    </ScrollView>
  );
}