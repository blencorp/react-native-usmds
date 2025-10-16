import { COMPONENT_MAP } from '@showcase/lib/constants';
import { Stack, useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import * as React from 'react';

export default function ShowcaseLinkScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string | string[] }>();
  const router = useRouter();

  useFocusEffect(
    React.useCallback(() => {
      const value = Array.isArray(slug) ? slug[0] : slug;
      if (value && COMPONENT_MAP[value]) {
        router.replace({ pathname: '/components/[slug]', params: { slug: value } });
      } else {
        router.replace('/');
      }
    }, [router, slug])
  );

  return <Stack.Screen options={{ headerShown: false }} />;
}
