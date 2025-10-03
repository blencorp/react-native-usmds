import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextClassContext } from './Text';
import { View, ScrollView } from 'react-native';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ],
  args: {
    children: 'Sample Text'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'code', 'lead', 'large', 'small', 'muted'],
      description: 'Text style variant'
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes'
    },
    asChild: {
      control: 'boolean',
      description: 'Use Slot component instead of RNText'
    }
  }
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text'
  }
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1'
  }
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2'
  }
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3'
  }
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4'
  }
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph of text with proper spacing and line height for comfortable reading.'
  }
};

export const Blockquote: Story = {
  args: {
    variant: 'blockquote',
    children: 'This is a blockquote with italic styling and a left border.'
  }
};

export const Code: Story = {
  args: {
    variant: 'code',
    children: 'const example = true;'
  }
};

export const Lead: Story = {
  args: {
    variant: 'lead',
    children: 'This is lead text, larger and muted for introductory content.'
  }
};

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large text for emphasis'
  }
};

export const Small: Story = {
  args: {
    variant: 'small',
    children: 'Small text for captions'
  }
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: 'Muted text for secondary information'
  }
};

export const WithContext: Story = {
  render: () => (
    <TextClassContext.Provider value='text-primary font-bold'>
      <Text>This text inherits styles from context</Text>
      <Text className='text-secondary mt-2'>This overrides the context color</Text>
    </TextClassContext.Provider>
  )
};

export const AllVariants: Story = {
  render: () => (
    <ScrollView className="bg-background">
      <View className='gap-6 p-4 bg-background'>
        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Heading 1</Text>
          <Text variant='h1'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Heading 2</Text>
          <Text variant='h2'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Heading 3</Text>
          <Text variant='h3'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Heading 4</Text>
          <Text variant='h4'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Paragraph</Text>
          <Text variant='p'>The quick brown fox jumps over the lazy dog. This is a paragraph with proper spacing and line height.</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Blockquote</Text>
          <Text variant='blockquote'>The quick brown fox jumps over the lazy dog.</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Code</Text>
          <Text variant='code'>const example = true;</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Lead</Text>
          <Text variant='lead'>The quick brown fox jumps over the lazy dog.</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Large</Text>
          <Text variant='large'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Small</Text>
          <Text variant='small'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Muted</Text>
          <Text variant='muted'>The quick brown fox</Text>
        </View>

        <View>
          <Text className='text-sm font-medium mb-2 text-muted-foreground'>Default</Text>
          <Text>The quick brown fox</Text>
        </View>
      </View>
    </ScrollView>
  )
};
