import { Button } from '@registry/usa/components/ui/button';
import { Text } from '@registry/usa/components/ui/text';
import { ThemeToggle } from '@showcase/components/theme-toggle';
import * as Updates from 'expo-updates';
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

export function HeaderRightView() {
  const { isUpdateAvailable, isUpdatePending, isDownloading } = Updates.useUpdates();

  async function onReload() {
    try {
      if (!isUpdatePending) {
        await Updates.fetchUpdateAsync();
      }
      await Updates.reloadAsync();
    } catch (error) {
      console.error(error);
    }
  }

  if (isUpdateAvailable) {
    return (
      <Button
        size="sm"
        variant="outline"
        onPress={onReload}
        disabled={isDownloading}>
        {isDownloading ? (
          <ActivityIndicator color="white" size="small" className="scale-75" />
        ) : (
          <Text className="text-primary dark:text-sky-500">Update</Text>
        )}
      </Button>
    );
  }

  return <ThemeToggle />;
}
