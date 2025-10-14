'use client';

import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/registry/usa/components/ui/alert';
import { AlertCircle, CheckCircle2, Terminal } from 'lucide-react-native';

export function AlertPreview() {
  return (
    <div className='w-full max-w-xl'>
      <div className='mb-4'>
        <Alert icon={CheckCircle2}>
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
        </Alert>
      </div>
      <div className='mb-4'>
        <Alert icon={Terminal}>
          <AlertTitle>This Alert has no description.</AlertTitle>
        </Alert>
      </div>
      <div>
        <Alert variant='destructive' icon={AlertCircle}>
          <AlertTitle>Unable to process your payment.</AlertTitle>
          <AlertDescription>Please verify your billing information and try again.</AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
