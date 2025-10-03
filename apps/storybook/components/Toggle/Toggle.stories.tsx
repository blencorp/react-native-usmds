import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Toggle, ToggleIcon } from './Toggle';
import { Text } from '../Text/Text';
import { Bold, Italic, Underline } from 'lucide-react-native';
import { useState } from 'react';

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (Story) => (
      <View className='w-full max-w-[393px] p-4 bg-background'>
        <Story />
      </View>
    )
  ]
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle aria-label='Toggle italic' pressed={pressed} onPressedChange={setPressed}>
        <ToggleIcon as={Bold} />
      </Toggle>
    );
  }
};

export const Outline: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle variant='outline' pressed={pressed} onPressedChange={setPressed}>
        <ToggleIcon as={Italic} />
      </Toggle>
    );
  }
};

export const WithText: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false);
    return (
      <Toggle pressed={pressed} onPressedChange={setPressed}>
        <ToggleIcon as={Bold} />
        <Text>Bold</Text>
      </Toggle>
    );
  }
};

export const Disabled: Story = {
  render: () => (
    <Toggle disabled>
      <ToggleIcon as={Underline} />
    </Toggle>
  )
};

export const TextFormatting: Story = {
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    return (
      <View className='flex-row gap-2'>
        <Toggle variant='outline' pressed={bold} onPressedChange={setBold}>
          <ToggleIcon as={Bold} />
        </Toggle>
        <Toggle variant='outline' pressed={italic} onPressedChange={setItalic}>
          <ToggleIcon as={Italic} />
        </Toggle>
        <Toggle variant='outline' pressed={underline} onPressedChange={setUnderline}>
          <ToggleIcon as={Underline} />
        </Toggle>
      </View>
    );
  }
};
