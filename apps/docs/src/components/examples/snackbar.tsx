'use client';

import React from 'react';
import { Snackbar } from '@/registry/components/ui/snackbar';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';

export function SnackbarPreview() {
  const [successVisible, setSuccessVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-row gap-3">
        <Button variant="default" onPress={() => setSuccessVisible(true)}>
          <Text>Show Success</Text>
        </Button>
        <Button variant="destructive" onPress={() => setErrorVisible(true)}>
          <Text>Show Error</Text>
        </Button>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <Snackbar
          isVisible={successVisible}
          layout="one-line"
          variant="success"
          message="Message sent successfully"
          onAction={() => console.log('Action')}
          onDismiss={() => setSuccessVisible(false)}
          actionLabel="Undo"
        />

        <Snackbar
          isVisible={errorVisible}
          layout="one-line"
          variant="error"
          message="Failed to send message"
          onAction={() => console.log('Retry')}
          onDismiss={() => setErrorVisible(false)}
          actionLabel="Retry"
        />
      </div>
    </div>
  );
}
