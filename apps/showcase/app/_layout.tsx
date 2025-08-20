import { Stack } from 'expo-router';
import { View } from 'react-native';
import '../global.css';

export default function RootLayout() {
  return (
    <View className="flex-1">
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Components Showcase' }} />
        <Stack.Screen name="components/button" options={{ title: 'Button' }} />
        <Stack.Screen name="components/text" options={{ title: 'Text' }} />
      </Stack>
    </View>
  );
}