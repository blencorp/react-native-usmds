'use client';

import React from 'react';
import { StepIndicator } from '@/registry/components/ui/stepindicator';
import { Button } from '@/registry/components/ui/button';
import { Text } from '@/registry/components/ui/text';

export function StepIndicatorPreview() {
  const [currentStep, setCurrentStep] = React.useState(3);
  const totalSteps = 6;

  const stepTitles = [
    'Personal Info',
    'Contact',
    'Address',
    'Payment',
    'Review',
    'Complete'
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <StepIndicator
        steps={totalSteps}
        currentStep={currentStep}
        title={stepTitles[currentStep - 1]}
        size="default"
      />

      <div className="flex flex-row gap-3">
        <Button
          variant="outline"
          onPress={handlePrevious}
          disabled={currentStep === 1}
        >
          <Text>Previous</Text>
        </Button>
        <Button
          variant="default"
          onPress={handleNext}
          disabled={currentStep === totalSteps}
        >
          <Text>Next</Text>
        </Button>
      </div>
    </div>
  );
}
