import { Button } from '@registry/usa/components/ui/button';
import { Text } from '@registry/usa/components/ui/text';
import { Link, Stack } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Not found' }} />
      <View className="flex-1 items-center justify-center gap-6 px-6">
        <View className="items-center gap-3">
          <Text className="text-6xl">🤔</Text>
          <Text className="text-center text-2xl font-semibold text-foreground">
            Page not found
          </Text>
          <Text className="text-center text-base text-muted-foreground max-w-sm">
            Sorry, the page you were looking for doesn’t exist or has been moved.
          </Text>
        </View>
        <Link href="/" asChild>
          <Button>
            <Text>Go home</Text>
          </Button>
        </Link>
      </View>
    </>
  );
}
