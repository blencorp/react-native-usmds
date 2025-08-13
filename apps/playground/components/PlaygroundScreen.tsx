import React, { useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Text } from './ui/text';
import { Button } from './ui/button';
import { CodeEditor } from './CodeEditor';
import { PreviewRenderer } from './PreviewRenderer';

const { width } = Dimensions.get('window');
const isTablet = width > 768;

const INITIAL_CODE = `function Example() {
  const [count, setCount] = useState(0);

  return (
    <View className="p-4 space-y-4">
      <Text className="text-2xl font-bold">Hello USMDS!</Text>
      <Text className="text-lg">Count: {count}</Text>
      <View className="flex-row space-x-2">
        <Button onPress={() => setCount(count + 1)}>
          <Text>Increment</Text>
        </Button>
        <Button 
          variant="secondary" 
          onPress={() => setCount(0)}
        >
          <Text>Reset</Text>
        </Button>
      </View>
      <Button variant="outline">
        <Text>Outline Button</Text>
      </Button>
      <Button variant="destructive">
        <Text>Destructive Button</Text>
      </Button>
    </View>
  );
}`;

export const PlaygroundScreen: React.FC = () => {
  const [code, setCode] = useState<string>(INITIAL_CODE);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  const handleCodeChange = (newCode: string) => {
    console.log('Code changed:', newCode.substring(0, 100) + '...');
    setCode(newCode);
  };

  const handleError = (error: string) => {
    console.error('Preview error:', error);
  };

  // Desktop/Tablet Layout - Side by side
  const renderDesktopLayout = () => (
    <View className='flex-1 bg-background'>
      <View className='border-b border-border px-4 py-3'>
        <Text className='text-xl font-semibold'>USMDS Playground</Text>
        <Text className='text-sm text-muted-foreground mt-1'>Write React Native code and see it rendered in real-time</Text>
      </View>

      <View className='flex-1 flex-row'>
        {/* Code Editor */}
        <View className='flex-1 p-4 border-r border-border'>
          <CodeEditor initialCode={INITIAL_CODE} onCodeChange={handleCodeChange} language='typescript' />
        </View>

        {/* Preview */}
        <View className='flex-1 p-4'>
          <PreviewRenderer code={code} onError={handleError} />
        </View>
      </View>
    </View>
  );

  // Mobile Layout - Tabbed interface
  const renderMobileLayout = () => (
    <View className='flex-1 bg-background'>
      <View className='border-b border-border px-4 py-3'>
        <Text className='text-xl font-semibold'>USMDS Playground</Text>
        <Text className='text-sm text-muted-foreground mt-1'>Write and preview React Native components</Text>
      </View>

      {/* Tab Navigation */}
      <View className='flex-row border-b border-border'>
        <Button
          variant={activeTab === 'editor' ? 'default' : 'ghost'}
          className='flex-1 rounded-none border-0'
          onPress={() => setActiveTab('editor')}
        >
          <Text>Editor</Text>
        </Button>
        <Button
          variant={activeTab === 'preview' ? 'default' : 'ghost'}
          className='flex-1 rounded-none border-0'
          onPress={() => setActiveTab('preview')}
        >
          <Text>Preview</Text>
        </Button>
      </View>

      {/* Tab Content */}
      <View className='flex-1 p-4'>
        {activeTab === 'editor' ? (
          <CodeEditor initialCode={INITIAL_CODE} onCodeChange={handleCodeChange} language='typescript' />
        ) : (
          <PreviewRenderer code={code} onError={handleError} />
        )}
      </View>
    </View>
  );

  return isTablet ? renderDesktopLayout() : renderMobileLayout();
};
