import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Card>;

export default meta;

const defaultArgs = {
  title: 'Card title',
  description:
    'Smiley was monstrous proud of his frog, and well he might be, for fellers that had traveled and been everywheres, all said he laid over any frog that ever they see.',
  buttonText: 'Button',
  mediaUrl: 'https://picsum.photos/329/188'
};

export const Default: StoryObj<typeof Card> = {
  args: {
    ...defaultArgs,
    variant: 'default',
    showMedia: false
  }
};

export const MediaFirst: StoryObj<typeof Card> = {
  args: {
    ...defaultArgs,
    variant: 'media-first',
    showMedia: true
  }
};

export const Inset: StoryObj<typeof Card> = {
  args: {
    ...defaultArgs,
    variant: 'inset',
    showMedia: true
  }
};
