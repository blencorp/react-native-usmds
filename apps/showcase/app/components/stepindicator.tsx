import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { StepIndicator } from '../../../storybook/components/StepIndicator/StepIndicator';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function StepIndicatorScreen() {
  // Basic step indicator
  const [currentStep1, setCurrentStep1] = useState(3);
  const [currentStep2, setCurrentStep2] = useState(2);
  
  // Form wizard example
  const [wizardStep, setWizardStep] = useState(1);
  const wizardSteps = ['Personal Info', 'Contact Details', 'Preferences', 'Review', 'Complete'];
  
  // Onboarding example
  const [onboardingStep, setOnboardingStep] = useState(2);
  const onboardingSteps = ['Welcome', 'Profile Setup', 'Notifications', 'Tutorial', 'Ready'];
  
  // Checkout example
  const [checkoutStep, setCheckoutStep] = useState(3);
  const checkoutSteps = ['Cart', 'Shipping', 'Payment', 'Review', 'Confirmation'];

  const nextStep = (current: number, max: number, setter: (step: number) => void) => {
    if (current < max) setter(current + 1);
  };

  const prevStep = (current: number, setter: (step: number) => void) => {
    if (current > 1) setter(current - 1);
  };

  const resetStep = (setter: (step: number) => void) => {
    setter(1);
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Step Indicators */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Step Indicators</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Default Size</Text>
              <StepIndicator 
                steps={6} 
                currentStep={currentStep1} 
                title='Account Setup' 
                size='default'
              />
              <View className='flex-row gap-2 mt-4'>
                <Button 
                  size='sm' 
                  variant='outline' 
                  onPress={() => prevStep(currentStep1, setCurrentStep1)}
                  disabled={currentStep1 === 1}
                >
                  <Text>Previous</Text>
                </Button>
                <Button 
                  size='sm'
                  onPress={() => nextStep(currentStep1, 6, setCurrentStep1)}
                  disabled={currentStep1 === 6}
                >
                  <Text>Next</Text>
                </Button>
                <Button 
                  size='sm' 
                  variant='outline' 
                  onPress={() => resetStep(setCurrentStep1)}
                >
                  <Text>Reset</Text>
                </Button>
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Small Size</Text>
              <StepIndicator 
                steps={5} 
                currentStep={currentStep2} 
                title='Quick Setup' 
                size='small'
              />
              <View className='flex-row gap-2 mt-4'>
                <Button 
                  size='sm' 
                  variant='outline' 
                  onPress={() => prevStep(currentStep2, setCurrentStep2)}
                  disabled={currentStep2 === 1}
                >
                  <Text>Previous</Text>
                </Button>
                <Button 
                  size='sm'
                  onPress={() => nextStep(currentStep2, 5, setCurrentStep2)}
                  disabled={currentStep2 === 5}
                >
                  <Text>Next</Text>
                </Button>
                <Button 
                  size='sm' 
                  variant='outline' 
                  onPress={() => resetStep(setCurrentStep2)}
                >
                  <Text>Reset</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>

        {/* Different Step Counts */}
        <View>
          <Text className='text-lg font-bold mb-4'>Different Step Counts</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>3 Steps</Text>
              <StepIndicator steps={3} currentStep={2} title='Simple Process' />
            </View>
            <View>
              <Text className='text-sm font-medium mb-3'>4 Steps</Text>
              <StepIndicator steps={4} currentStep={1} title='Getting Started' />
            </View>
            <View>
              <Text className='text-sm font-medium mb-3'>7 Steps</Text>
              <StepIndicator steps={7} currentStep={4} title='Detailed Setup' />
            </View>
            <View>
              <Text className='text-sm font-medium mb-3'>8 Steps</Text>
              <StepIndicator steps={8} currentStep={6} title='Comprehensive Guide' />
            </View>
          </View>
        </View>

        {/* Form Wizard Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Form Wizard Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <StepIndicator 
              steps={5} 
              currentStep={wizardStep} 
              title={wizardSteps[wizardStep - 1]} 
            />
            
            <View className='mt-6 p-4 bg-muted rounded-lg'>
              <Text className='text-sm font-medium mb-2'>Current Step: {wizardSteps[wizardStep - 1]}</Text>
              <Text className='text-xs text-muted-foreground'>
                {wizardStep === 1 && 'Enter your personal information including name, date of birth, and ID number.'}
                {wizardStep === 2 && 'Provide your contact details such as email, phone number, and address.'}
                {wizardStep === 3 && 'Set your preferences for notifications, privacy, and account settings.'}
                {wizardStep === 4 && 'Review all the information you\'ve provided before submitting.'}
                {wizardStep === 5 && 'Your account has been created successfully! Welcome aboard.'}
              </Text>
            </View>
            
            <View className='flex-row gap-2 mt-4'>
              <Button 
                variant='outline' 
                onPress={() => prevStep(wizardStep, setWizardStep)}
                disabled={wizardStep === 1}
              >
                <Text>Back</Text>
              </Button>
              <Button 
                onPress={() => nextStep(wizardStep, 5, setWizardStep)}
                disabled={wizardStep === 5}
              >
                <Text>{wizardStep === 4 ? 'Complete' : 'Continue'}</Text>
              </Button>
              {wizardStep === 5 && (
                <Button 
                  variant='outline' 
                  onPress={() => resetStep(setWizardStep)}
                >
                  <Text>Start Over</Text>
                </Button>
              )}
            </View>
          </View>
        </View>

        {/* Onboarding Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Onboarding Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <StepIndicator 
              steps={5} 
              currentStep={onboardingStep} 
              title={onboardingSteps[onboardingStep - 1]}
              size='small'
            />
            
            <View className='mt-6 p-4 bg-info-lighter rounded-lg'>
              <Text className='text-sm font-medium mb-2'>Welcome to the App!</Text>
              <Text className='text-xs text-info'>
                {onboardingStep === 1 && 'Welcome! Let\'s get you started with a quick tour of the features.'}
                {onboardingStep === 2 && 'Set up your profile with a photo and basic information.'}
                {onboardingStep === 3 && 'Choose how you\'d like to receive notifications from the app.'}
                {onboardingStep === 4 && 'Take a quick tutorial to learn how to use the main features.'}
                {onboardingStep === 5 && 'You\'re all set! Start exploring and enjoy the experience.'}
              </Text>
            </View>
            
            <View className='flex-row gap-2 mt-4'>
              <Button 
                size='sm'
                variant='outline' 
                onPress={() => prevStep(onboardingStep, setOnboardingStep)}
                disabled={onboardingStep === 1}
              >
                <Text>Previous</Text>
              </Button>
              <Button 
                size='sm'
                onPress={() => nextStep(onboardingStep, 5, setOnboardingStep)}
                disabled={onboardingStep === 5}
              >
                <Text>{onboardingStep === 5 ? 'Get Started' : 'Next'}</Text>
              </Button>
              <Button 
                size='sm'
                variant='outline' 
                onPress={() => resetStep(setOnboardingStep)}
              >
                <Text>Restart</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* E-commerce Checkout */}
        <View>
          <Text className='text-lg font-bold mb-4'>E-commerce Checkout</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <StepIndicator 
              steps={5} 
              currentStep={checkoutStep} 
              title={checkoutSteps[checkoutStep - 1]}
            />
            
            <View className='mt-6 p-4 bg-green-50 rounded-lg'>
              <Text className='text-sm font-medium mb-2'>Checkout Process</Text>
              <Text className='text-xs text-green-800'>
                {checkoutStep === 1 && 'Review the items in your shopping cart and update quantities if needed.'}
                {checkoutStep === 2 && 'Enter your shipping address and select a delivery method.'}
                {checkoutStep === 3 && 'Add your payment information and billing address.'}
                {checkoutStep === 4 && 'Review your order details, shipping, and payment information.'}
                {checkoutStep === 5 && 'Order confirmed! You\'ll receive an email with tracking information.'}
              </Text>
            </View>
            
            <View className='flex-row gap-2 mt-4'>
              <Button 
                variant='outline' 
                onPress={() => prevStep(checkoutStep, setCheckoutStep)}
                disabled={checkoutStep === 1}
              >
                <Text>Back</Text>
              </Button>
              <Button 
                onPress={() => nextStep(checkoutStep, 5, setCheckoutStep)}
                disabled={checkoutStep === 5}
              >
                <Text>
                  {checkoutStep === 1 ? 'Checkout' : 
                   checkoutStep === 4 ? 'Place Order' : 
                   checkoutStep === 5 ? 'Continue Shopping' : 'Continue'}
                </Text>
              </Button>
              <Button 
                variant='outline' 
                onPress={() => resetStep(setCheckoutStep)}
              >
                <Text>Start Over</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Progress States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Progress States</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Beginning (Step 1 of 6)</Text>
              <StepIndicator steps={6} currentStep={1} title='Getting Started' />
            </View>
            
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Middle (Step 3 of 6)</Text>
              <StepIndicator steps={6} currentStep={3} title='In Progress' />
            </View>
            
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Near End (Step 5 of 6)</Text>
              <StepIndicator steps={6} currentStep={5} title='Almost Done' />
            </View>
            
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Completed (Step 6 of 6)</Text>
              <StepIndicator steps={6} currentStep={6} title='Completed' />
            </View>
          </View>
        </View>

        {/* Interactive Demo */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Demo</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Try different step counts and positions</Text>
            
            <View className='space-y-4'>
              <StepIndicator steps={3} currentStep={1} title='Quick Start' size='small' />
              <StepIndicator steps={4} currentStep={2} title='Setup Process' />
              <StepIndicator steps={5} currentStep={3} title='Configuration' size='small' />
              <StepIndicator steps={6} currentStep={4} title='Installation' />
              <StepIndicator steps={8} currentStep={6} title='Advanced Setup' />
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Step Indicators:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Multi-step forms and wizards</Text>
              <Text className='text-xs'>• Onboarding and setup processes</Text>
              <Text className='text-xs'>• E-commerce checkout flows</Text>
              <Text className='text-xs'>• Installation and configuration processes</Text>
              <Text className='text-xs'>• Any sequential workflow with clear stages</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Use 3-8 steps for optimal user experience</Text>
              <Text className='text-xs'>• Provide clear, descriptive titles for each step</Text>
              <Text className='text-xs'>• Allow users to navigate back to previous steps</Text>
              <Text className='text-xs'>• Show progress clearly with filled/unfilled segments</Text>
              <Text className='text-xs'>• Consider using small size for compact layouts</Text>
              <Text className='text-xs'>• Validate each step before allowing progression</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}