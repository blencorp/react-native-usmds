'use client';

import React from 'react';
import { Text } from '@registry/usa/components/ui/text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@registry/usa/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@registry/usa/components/ui/card';

export function TabsPreview() {
  const [value, setValue] = React.useState('account');

  return (
    <Tabs value={value} onValueChange={setValue} className="w-full max-w-md">
      <TabsList className="w-full">
        <TabsTrigger value="account" className="flex-1">
          Account
        </TabsTrigger>
        <TabsTrigger value="password" className="flex-1">
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Make changes to your account here.</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <Text className="text-sm">Update your account settings and preferences.</Text>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>Change your password here.</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <Text className="text-sm">After saving, you'll be logged out.</Text>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
