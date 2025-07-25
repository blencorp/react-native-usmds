import * as Slot from '@rn-primitives/slot';
import { SlottableTextProps, TextRef } from '@rn-primitives/types';
import { createContext, forwardRef, useContext } from 'react';
import { Text as RNText } from 'react-native';

import { cn } from '../../../storybook/lib/utils';

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(({ className, asChild = false, ...props }, ref) => {
  const textClass = useContext(TextClassContext);
  const Component = asChild ? Slot.Text : RNText;

  return (
    <Component
      className={cn(
        'text-base web:select-text text-foreground',
        textClass, // Context classes take precedence
        className // Allow override if needed
      )}
      ref={ref}
      {...props}
    />
  );
});
Text.displayName = 'Text';

export { Text, TextClassContext };
