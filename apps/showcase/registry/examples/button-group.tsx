'use client';

import React from 'react';
import { View } from 'react-native';
import { ButtonGroup } from '@registry/usa/components/ui/buttongroup';
import { Button } from '@registry/usa/components/ui/button';
import { Text } from '@registry/usa/components/ui/text';

export function ButtonGroupPreview() {
  return (
    <View className="flex flex-col items-center gap-6 w-full">
      <View className="flex flex-col items-center gap-2">
        <Text className="text-sm text-muted-foreground mb-1">Vertical</Text>
        <ButtonGroup orientation="vertical" gap={8}>
          <Button variant="default">
            <Text>Primary</Text>
          </Button>
          <Button variant="secondary">
            <Text>Secondary</Text>
          </Button>
          <Button variant="outline">
            <Text>Outline</Text>
          </Button>
        </ButtonGroup>
      </View>

      <View className="flex flex-col items-center gap-2">
        <Text className="text-sm text-muted-foreground mb-1">Horizontal</Text>
        <ButtonGroup orientation="horizontal" gap={8}>
          <Button variant="default">
            <Text>Save</Text>
          </Button>
          <Button variant="outline">
            <Text>Cancel</Text>
          </Button>
        </ButtonGroup>
      </View>
    </View>
  );
}