import { useComponentRegistry } from '@showcase/lib/registry-context';
import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';

export default function ShowcaseLinkScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string | string[] }>();
  const router = useRouter();
  const { componentMap } = useComponentRegistry();

  useFocusEffect(
    React.useCallback(() => {
      const value = Array.isArray(slug) ? slug[0] : slug;
      if (value && componentMap[value]) {
        router.replace({ pathname: '/components/[slug]', params: { slug: value } });
      } else {
        router.replace('/');
      }
    }, [componentMap, router, slug])
  );

  return <Stack.Screen options={{ headerShown: false }} />;
}
