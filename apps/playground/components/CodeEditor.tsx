import React, { useState, useRef } from 'react';
import { View, Platform } from 'react-native';
import { Text } from './ui/text';
import { Button } from './ui/button';

// Monaco Editor for web
let MonacoEditor: any = null;
if (Platform.OS === 'web') {
  try {
    const monaco = require('@monaco-editor/react');
    MonacoEditor = monaco.Editor;
  } catch (e) {
    console.log('Monaco editor not available');
  }
}

interface CodeEditorProps {
  initialCode?: string;
  language?: string;
  onCodeChange?: (code: string) => void;
}

const DEFAULT_CODE = `function Example() {
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

const EXAMPLE_TEMPLATES = [
  {
    name: 'Basic Counter',
    code: DEFAULT_CODE
  },
  {
    name: 'Button Showcase',
    code: `function ButtonShowcase() {
  return (
    <View className="p-4 space-y-4">
      <Text className="text-xl font-semibold">Button Variants</Text>
      <View className="flex-row flex-wrap gap-2">
        <Button variant="default">
          <Text>Default</Text>
        </Button>
        <Button variant="secondary">
          <Text>Secondary</Text>
        </Button>
        <Button variant="outline">
          <Text>Outline</Text>
        </Button>
        <Button variant="ghost">
          <Text>Ghost</Text>
        </Button>
        <Button variant="destructive">
          <Text>Destructive</Text>
        </Button>
      </View>
      <Text className="text-lg font-semibold mt-4">Button Sizes</Text>
      <View className="flex-row flex-wrap gap-2 items-end">
        <Button size="sm">
          <Text>Small</Text>
        </Button>
        <Button size="default">
          <Text>Default</Text>
        </Button>
        <Button size="lg">
          <Text>Large</Text>
        </Button>
      </View>
    </View>
  );
}`
  },
  {
    name: 'Interactive Form',
    code: `function InteractiveForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View className="p-4 space-y-4">
        <Text className="text-xl font-bold text-green-600">
          Hello, {name}!
        </Text>
        <Button onPress={() => setSubmitted(false)}>
          <Text>Go Back</Text>
        </Button>
      </View>
    );
  }

  return (
    <View className="p-4 space-y-4">
      <Text className="text-xl font-semibold">Enter Your Name</Text>
      <View className="border border-gray-300 p-2 rounded">
        <Text>Name: {name}</Text>
      </View>
      <View className="flex-row space-x-2">
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
}`
  }
];

export const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode = DEFAULT_CODE, language = 'typescript', onCodeChange }) => {
  const [code, setCode] = useState(initialCode);
  const editorRef = useRef(null);

  const handleEditorChange = (value: string | undefined) => {
    const newCode = value || '';
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const loadTemplate = (template: (typeof EXAMPLE_TEMPLATES)[0]) => {
    setCode(template.code);
    onCodeChange?.(template.code);
  };

  // Web implementation with Monaco
  if (Platform.OS === 'web' && MonacoEditor) {
    return (
      <View className='flex-1 border border-border rounded-lg overflow-hidden'>
        <View className='bg-muted px-4 py-2 border-b border-border flex-row items-center justify-between'>
          <Text className='text-sm font-medium text-muted-foreground'>Code Editor</Text>
          <View className='flex-row space-x-2'>
            {EXAMPLE_TEMPLATES.map((template, index) => (
              <Button key={index} variant='ghost' size='sm' onPress={() => loadTemplate(template)} className='py-1 px-2 h-6'>
                <Text className='text-xs'>{template.name}</Text>
              </Button>
            ))}
          </View>
        </View>
        <View className='flex-1' style={{ minHeight: 400 }}>
          <MonacoEditor
            height='100%'
            language={language}
            value={code}
            onChange={handleEditorChange}
            theme='vs-dark'
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on',
              folding: true,
              bracketMatching: 'always',
              autoIndent: 'full',
              formatOnPaste: true,
              formatOnType: true
            }}
          />
        </View>
      </View>
    );
  }

  // Fallback for native
  return (
    <View className='flex-1 border border-border rounded-lg p-4'>
      <Text className='text-lg font-semibold mb-4'>Code Editor</Text>
      <Text className='text-muted-foreground mb-4'>
        The interactive code editor is only available on web. Please use the web version for full editing capabilities.
      </Text>
      <View className='space-y-2'>
        {EXAMPLE_TEMPLATES.map((template, index) => (
          <Button key={index} variant='outline' onPress={() => loadTemplate(template)}>
            <Text>Load {template.name}</Text>
          </Button>
        ))}
      </View>
    </View>
  );
};
