import { Link } from 'expo-router';
import { View, Text, ScrollView, Pressable } from 'react-native';

const components = [
  { name: 'Alert', path: '/components/alert' },
  { name: 'Avatar', path: '/components/avatar' },
  { name: 'Badge', path: '/components/badge' },
  { name: 'Banner', path: '/components/banner' },
  { name: 'Biometric Sign In', path: '/components/biometric' },
  { name: 'Button', path: '/components/button' },
  { name: 'Button Group', path: '/components/buttongroup' },
  { name: 'Card', path: '/components/card' },
  { name: 'Checkbox', path: '/components/checkbox' },
  { name: 'Checkbox Tile', path: '/components/checkboxtile' },
  { name: 'Collapsible', path: '/components/collapsible' },
  { name: 'Dialog', path: '/components/dialog' },
  { name: 'Icon', path: '/components/icon' },
  { name: 'Link', path: '/components/link' },
  { name: 'Pagination', path: '/components/pagination' },
  { name: 'Progress', path: '/components/progress' },
  { name: 'Radio Button', path: '/components/radiobutton' },
  { name: 'Radio Tile', path: '/components/radiotile' },
  { name: 'Snackbar', path: '/components/snackbar' },
  { name: 'Step Indicator', path: '/components/stepindicator' },
  { name: 'Tag', path: '/components/tag' },
  { name: 'Text', path: '/components/text' },
  { name: 'Text Area', path: '/components/textarea' },
  { name: 'Text Input', path: '/components/textinput' },
  { name: 'Toggle', path: '/components/toggle' },
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