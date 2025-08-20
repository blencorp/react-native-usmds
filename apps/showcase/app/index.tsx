import { Link } from 'expo-router';
import { View, Text, ScrollView, Pressable } from 'react-native';

const components = [
  { name: 'Button', path: '/components/button' },
  { name: 'Text', path: '/components/text' },
];

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-6 text-foreground">UI Components</Text>
        <View className="gap-2">
          {components.map((component) => (
            <Link key={component.name} href={component.path} asChild>
              <Pressable className="p-4 bg-card rounded-lg border border-border active:opacity-80">
                <Text className="text-lg font-medium text-card-foreground">{component.name}</Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}