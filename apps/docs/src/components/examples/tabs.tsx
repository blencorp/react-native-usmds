"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/usa/components/ui/card";

export function TabsPreview() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
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
            <CardDescription>
              Make changes to your account here.
            </CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <p className="text-sm">
              Update your account settings and preferences.
            </p>
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
            <p className="text-sm">After saving, you'll be logged out.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
