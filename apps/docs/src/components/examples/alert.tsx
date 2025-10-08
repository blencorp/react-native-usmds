'use client';

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/registry/components/ui/alert';
import { Text } from '@/registry/components/ui/text';
import { AlertCircle, CheckCircle2, Terminal } from 'lucide-react-native';
import { View } from 'react-native';

export function AlertPreview() {
  return (
    <div className="w-full max-w-xl">
      <div className="mb-4">
        <Alert icon={CheckCircle2}>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
        </Alert>
      </div>
      <div className="mb-4">
        <Alert icon={Terminal}>
          <AlertTitle>This Alert has no description.</AlertTitle>
        </Alert>
      </div>
      <div>
        <Alert variant="destructive" icon={AlertCircle}>
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>Please verify your billing information and try again.</AlertDescription>
          <View role="list" className="ml-0.5 pb-2 pl-6">
            <Text role="listitem" className="text-sm">
              <Text className="web:pr-2">•</Text> Check your card details
            </Text>
            <Text role="listitem" className="text-sm">
              <Text className="web:pr-2">•</Text> Ensure sufficient funds
            </Text>
            <Text role="listitem" className="text-sm">
              <Text className="web:pr-2">•</Text> Verify billing address
            </Text>
          </View>
        </Alert>
      </div>
    </div>
  );
}