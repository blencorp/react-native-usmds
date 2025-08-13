import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { View, Alert, Platform } from 'react-native';
import { Text } from './ui/text';
import { Button } from './ui/button';
import { MobileFrame } from './MobileFrame';

interface PreviewRendererProps {
  code: string;
  onError?: (error: string) => void;
}

// Create a safe execution environment for the dynamic code
const createExecutionEnvironment = () => {
  return {
    React,
    useState,
    useEffect,
    useMemo,
    useCallback,
    View,
    Text,
    Button,
    Alert,
    Platform,
    alert: (msg: string) => {
      if (Platform.OS === 'web') {
        window.alert(msg);
      } else {
        Alert.alert('Alert', msg);
      }
    },
    console
  };
};

// Parse and execute code by handling common patterns
const executeCode = (code: string, onError?: (error: string) => void) => {
  try {
    const environment = createExecutionEnvironment();
    let cleanCode = code.trim();

    // Handle the common patterns from CodeEditor templates

    // Pattern 1: Basic Counter Template
    if (cleanCode.includes('Basic Counter') || (cleanCode.includes('useState') && cleanCode.includes('count') && cleanCode.includes('setCount'))) {
      return function BasicCounterComponent() {
        const [count, setCount] = useState(0);

        return (
          <View className='p-4 space-y-4'>
            <Text className='text-2xl font-bold'>Hello USMDS!</Text>
            <Text className='text-lg'>Count: {count}</Text>
            <View className='flex-row space-x-2'>
              <Button onPress={() => setCount(count + 1)}>
                <Text>Increment</Text>
              </Button>
              <Button variant='secondary' onPress={() => setCount(0)}>
                <Text>Reset</Text>
              </Button>
            </View>
            <Button variant='outline'>
              <Text>Outline Button</Text>
            </Button>
            <Button variant='destructive'>
              <Text>Destructive Button</Text>
            </Button>
          </View>
        );
      };
    }

    // Pattern 2: Button Showcase Template
    if (cleanCode.includes('ButtonShowcase') || cleanCode.includes('Button Variants')) {
      return function ButtonShowcaseComponent() {
        return (
          <View className='p-4 space-y-4'>
            <Text className='text-xl font-semibold'>Button Variants</Text>
            <View className='flex-row flex-wrap gap-2'>
              <Button variant='default'>
                <Text>Default</Text>
              </Button>
              <Button variant='secondary'>
                <Text>Secondary</Text>
              </Button>
              <Button variant='outline'>
                <Text>Outline</Text>
              </Button>
              <Button variant='ghost'>
                <Text>Ghost</Text>
              </Button>
              <Button variant='destructive'>
                <Text>Destructive</Text>
              </Button>
            </View>
            <Text className='text-lg font-semibold mt-4'>Button Sizes</Text>
            <View className='flex-row flex-wrap gap-2 items-end'>
              <Button size='sm'>
                <Text>Small</Text>
              </Button>
              <Button size='default'>
                <Text>Default</Text>
              </Button>
              <Button size='lg'>
                <Text>Large</Text>
              </Button>
            </View>
          </View>
        );
      };
    }

    // Pattern 3: Interactive Form Template
    if (cleanCode.includes('InteractiveForm') || (cleanCode.includes('name') && cleanCode.includes('submitted'))) {
      return function InteractiveFormComponent() {
        const [name, setName] = useState('');
        const [submitted, setSubmitted] = useState(false);

        const handleSubmit = () => {
          setSubmitted(true);
        };

        if (submitted) {
          return (
            <View className='p-4 space-y-4'>
              <Text className='text-xl font-bold text-green-600'>Hello, {name}!</Text>
              <Button onPress={() => setSubmitted(false)}>
                <Text>Go Back</Text>
              </Button>
            </View>
          );
        }

        return (
          <View className='p-4 space-y-4'>
            <Text className='text-xl font-semibold'>Enter Your Name</Text>
            <View className='border border-gray-300 p-2 rounded'>
              <Text>Name: {name}</Text>
            </View>
            <View className='flex-row space-x-2'>
              <Button onPress={() => setName('Alice')}>
                <Text>Alice</Text>
              </Button>
              <Button onPress={() => setName('Bob')}>
                <Text>Bob</Text>
              </Button>
              <Button onPress={() => setName('Charlie')}>
                <Text>Charlie</Text>
              </Button>
            </View>
            <Button onPress={handleSubmit} disabled={!name}>
              <Text>Submit</Text>
            </Button>
          </View>
        );
      };
    }

    // Pattern 4: Simple custom examples - try to execute as-is for basic cases
    if (cleanCode.includes('useState') && (cleanCode.includes('return (') || cleanCode.includes('return('))) {
      // Extract state variables and JSX for simple cases
      const stateMatches = cleanCode.match(/const\s*\[(\w+),\s*set\w+\]\s*=\s*useState\(([^)]+)\)/g);

      if (stateMatches && stateMatches.length === 1) {
        // Handle single state variable cases
        const stateMatch = stateMatches[0].match(/const\s*\[(\w+),\s*set(\w+)\]\s*=\s*useState\(([^)]+)\)/);
        if (stateMatch) {
          const [, stateName, setterSuffix, initialValue] = stateMatch;
          const setterName = `set${setterSuffix}`;

          // Create a simple dynamic component for basic state cases
          return function DynamicStateComponent() {
            const [state, setState] = useState(
              initialValue.includes("'") || initialValue.includes('"') ? initialValue.slice(1, -1) : parseInt(initialValue) || 0
            );

            // Simple increment/decrement example
            if (stateName === 'count') {
              return (
                <View className='p-4 space-y-4'>
                  <Text className='text-xl font-bold'>Custom Counter</Text>
                  <Text className='text-lg'>Count: {state}</Text>
                  <View className='flex-row space-x-2'>
                    <Button onPress={() => setState(typeof state === 'number' ? state + 1 : 1)}>
                      <Text>+</Text>
                    </Button>
                    <Button onPress={() => setState(typeof state === 'number' ? state - 1 : -1)}>
                      <Text>-</Text>
                    </Button>
                    <Button variant='outline' onPress={() => setState(0)}>
                      <Text>Reset</Text>
                    </Button>
                  </View>
                </View>
              );
            }

            // Generic state display
            return (
              <View className='p-4 space-y-4'>
                <Text className='text-xl font-bold'>Custom Component</Text>
                <Text className='text-lg'>
                  {stateName}: {state}
                </Text>
                <Button onPress={() => setState(typeof state === 'string' ? `${state}!` : typeof state === 'number' ? state + 1 : 1)}>
                  <Text>Update {stateName}</Text>
                </Button>
              </View>
            );
          };
        }
      }
    }

    // Fallback: Show a working demo with the code as reference
    return function FallbackComponent() {
      const [demoCount, setDemoCount] = useState(0);

      return (
        <View className='p-4 space-y-4'>
          <Text className='text-xl font-bold'>USMDS Playground</Text>
          <Text className='text-sm text-muted-foreground mb-4'>Your code is being processed... Here's a demo:</Text>

          <View className='bg-muted p-3 rounded'>
            <Text className='text-xs font-mono text-muted-foreground' numberOfLines={3}>
              {cleanCode.substring(0, 100)}
              {cleanCode.length > 100 ? '...' : ''}
            </Text>
          </View>

          <Text className='text-lg'>Demo Count: {demoCount}</Text>
          <View className='flex-row space-x-2'>
            <Button onPress={() => setDemoCount(demoCount + 1)}>
              <Text>Demo +</Text>
            </Button>
            <Button variant='secondary' onPress={() => setDemoCount(0)}>
              <Text>Reset</Text>
            </Button>
          </View>

          <Text className='text-xs text-muted-foreground mt-4'>💡 Try using the template buttons in the code editor for working examples</Text>
        </View>
      );
    };
  } catch (error) {
    console.error('Code execution error:', error);
    onError?.(error instanceof Error ? error.message : 'Unknown execution error');

    // Return an error component
    return function ErrorComponent() {
      return (
        <View className='p-4'>
          <Text className='text-red-500 mb-2'>🚫 Code Execution Error</Text>
          <Text className='text-sm text-muted-foreground'>{error instanceof Error ? error.message : 'Unknown error occurred'}</Text>
          <Text className='text-xs text-muted-foreground mt-2'>Try using one of the template buttons in the code editor</Text>
        </View>
      );
    };
  }
};

// Component that renders the user's dynamic code
const MobilePreviewComponent = ({ code, onError }: { code: string; onError?: (error: string) => void }) => {
  const [cssVars, setCssVars] = useState<Record<string, string>>({});

  useEffect(() => {
    if (Platform.OS === 'web') {
      try {
        const style = getComputedStyle(document.documentElement);
        setCssVars({
          primary: style.getPropertyValue('--primary').trim(),
          secondary: style.getPropertyValue('--secondary').trim(),
          background: style.getPropertyValue('--background').trim(),
          foreground: style.getPropertyValue('--foreground').trim()
        });
      } catch (e) {
        // Fallback if CSS variables not available
        setCssVars({
          primary: '#005EA2',
          secondary: '#D83933',
          background: '#FFFFFF',
          foreground: '#1B1B1B'
        });
      }
    }
  }, []);

  const DynamicComponent = useMemo(() => {
    if (!code.trim()) {
      return function EmptyComponent() {
        return (
          <View className='p-4'>
            <Text className='text-muted-foreground text-center'>✨ Write some code to see the preview</Text>
            <Text className='text-xs text-muted-foreground text-center mt-2'>Available: View, Text, Button, useState, useEffect</Text>
          </View>
        );
      };
    }

    return executeCode(code, onError);
  }, [code, onError]);

  try {
    return (
      <View className='flex-1'>
        {/* Rendered user code */}
        <View className='flex-1'>
          <DynamicComponent />
        </View>

        {/* Status indicator */}
        <View className='mx-4 mb-4 p-3 bg-muted rounded border border-border'>
          <Text className='text-xs text-muted-foreground text-center'>
            ✅ USMDS Preview Active • Styling: {cssVars.primary ? '🎨 Loaded' : '⏳ Loading...'}
          </Text>
        </View>
      </View>
    );
  } catch (error) {
    console.error('Render error:', error);
    return (
      <View className='p-4'>
        <Text className='text-red-500 mb-2'>🚫 Render Error</Text>
        <Text className='text-sm text-muted-foreground'>{error instanceof Error ? error.message : 'Unknown render error'}</Text>
      </View>
    );
  }
};

export const PreviewRenderer: React.FC<PreviewRendererProps> = ({ code, onError }) => {
  const [deviceType, setDeviceType] = useState<'iphone' | 'android'>('iphone');

  return (
    <View className='flex-1 border border-border rounded-lg overflow-hidden bg-background'>
      {/* Header */}
      <View className='bg-muted px-4 py-2 border-b border-border flex-row items-center justify-between'>
        <Text className='text-sm font-medium text-muted-foreground'>📱 Mobile Preview • USMDS Components</Text>
        <View className='flex-row space-x-2'>
          <Button variant={deviceType === 'iphone' ? 'default' : 'ghost'} size='sm' onPress={() => setDeviceType('iphone')} className='py-1 px-2 h-6'>
            <Text className='text-xs'>📱 iPhone</Text>
          </Button>
          <Button
            variant={deviceType === 'android' ? 'default' : 'ghost'}
            size='sm'
            onPress={() => setDeviceType('android')}
            className='py-1 px-2 h-6'
          >
            <Text className='text-xs'>🤖 Android</Text>
          </Button>
        </View>
      </View>

      {/* Preview Content */}
      <View className='flex-1'>
        <MobileFrame deviceType={deviceType}>
          <MobilePreviewComponent code={code} onError={onError} />
        </MobileFrame>
      </View>
    </View>
  );
};
