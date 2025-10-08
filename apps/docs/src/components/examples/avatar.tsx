'use client';

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/registry/components/ui/avatar';
import { Text } from '@/registry/components/ui/text';
import { View } from 'react-native';

export function AvatarPreview() {
  return (
    <View className="flex-row flex-wrap gap-12">
      <Avatar
        alt="@johndoe"
        className="border-background web:border-0 web:ring-2 web:ring-background border-2">
        <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
        <AvatarFallback>
          <Text>JD</Text>
        </AvatarFallback>
      </Avatar>
      <Avatar
        alt="@janedoe"
        className="border-background web:border-0 web:ring-2 web:ring-background rounded-lg border-2">
        <AvatarImage source={{ uri: 'https://github.com/vercel.png' }} />
        <AvatarFallback>
          <Text>JD</Text>
        </AvatarFallback>
      </Avatar>
      <View className="flex-row">
        <Avatar
          alt="@user1"
          className="border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2">
          <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
          <AvatarFallback>
            <Text>U1</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar
          alt="@user2"
          className="border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2">
          <AvatarImage source={{ uri: 'https://github.com/vercel.png' }} />
          <AvatarFallback>
            <Text>U2</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar
          alt="@user3"
          className="border-background web:border-0 web:ring-2 web:ring-background -mr-2 border-2">
          <AvatarImage source={{ uri: 'https://github.com/facebook.png' }} />
          <AvatarFallback>
            <Text>U3</Text>
          </AvatarFallback>
        </Avatar>
      </View>
    </View>
  );
}