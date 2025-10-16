'use client';

import React from 'react';
import { View } from 'react-native';
import { BiometricSignIn } from '@registry/usa/components/ui/biometricsignin';

export function BiometricSignInPreview() {
  const [faceIdEnabled, setFaceIdEnabled] = React.useState(true);
  const [touchIdEnabled, setTouchIdEnabled] = React.useState(false);

  return (
    <View className="w-full max-w-sm gap-4">
      <BiometricSignIn
        biometricType="faceId"
        checked={faceIdEnabled}
        onCheckedChange={setFaceIdEnabled}
      />
      <BiometricSignIn
        biometricType="touchId"
        checked={touchIdEnabled}
        onCheckedChange={setTouchIdEnabled}
      />
      <BiometricSignIn
        biometricType="biometric"
        disabled
        checked={false}
        onCheckedChange={() => {}}
      />
    </View>
  );
}
