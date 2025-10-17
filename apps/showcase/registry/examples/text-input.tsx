'use client';

import React from 'react';
import { View } from 'react-native';
import { TextInput } from '@registry/usa/components/ui/textinput';
import { Label } from '@registry/usa/components/ui/label';
import { Text } from '@registry/usa/components/ui/text';

export function TextInputPreview() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState('Cannot edit this');

  return (
    <View className="flex flex-col gap-4 w-full max-w-md">
      <View className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <TextInput
          id="email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View className="flex flex-col gap-2">
        <Label htmlFor="password">Password</Label>
        <TextInput
          id="password"
          placeholder="Enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View className="flex flex-col gap-2">
        <Label htmlFor="disabled">Disabled</Label>
        <TextInput
          id="disabled"
          value={disabled}
          editable={false}
        />
      </View>
    </View>
  );
}