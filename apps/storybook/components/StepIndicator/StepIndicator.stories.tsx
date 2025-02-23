import { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from './StepIndicator';

const meta = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof StepIndicator>;

export default meta;

export const Default: StoryObj<typeof StepIndicator> = {
  args: {
    steps: 6,
    currentStep: 3,
    title: 'Title',
    size: 'default'
  }
};

export const Small: StoryObj<typeof StepIndicator> = {
  args: {
    steps: 6,
    currentStep: 3,
    title: 'Title',
    size: 'small'
  }
};
