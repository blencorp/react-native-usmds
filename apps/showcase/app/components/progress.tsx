import { ScrollView, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { Progress } from '../../../storybook/components/Progress/Progress';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function ProgressScreen() {
  // Various progress states
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(25);
  const [progress3, setProgress3] = useState(50);
  const [progress4, setProgress4] = useState(75);
  const [progress5, setProgress5] = useState(100);
  
  // Animated progress
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // File upload simulation
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  // Multi-step progress
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const stepProgress = (step / totalSteps) * 100;

  // Animate progress only when requested
  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setAnimatedProgress(prev => {
          if (prev >= 100) {
            setIsAnimating(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  // Simulate file upload
  const startUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Progress */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Progress</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>0% Progress</Text>
              <Progress value={progress1} />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>25% Progress</Text>
              <Progress value={progress2} />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>50% Progress</Text>
              <Progress value={progress3} />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>75% Progress</Text>
              <Progress value={progress4} />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>100% Progress</Text>
              <Progress value={progress5} />
            </View>
          </View>
        </View>

        {/* Progress Sizes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Progress Sizes</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Small</Text>
              <Progress value={60} size='sm' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Medium (Default)</Text>
              <Progress value={60} size='md' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Large</Text>
              <Progress value={60} size='lg' />
            </View>
          </View>
        </View>

        {/* Progress Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Progress Variants</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Default</Text>
              <Progress value={70} variant='default' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Success</Text>
              <Progress value={100} variant='success' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Error</Text>
              <Progress value={40} variant='error' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Warning</Text>
              <Progress value={60} variant='warning' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-2'>Info</Text>
              <Progress value={80} variant='info' />
            </View>
          </View>
        </View>

        {/* Animated Progress */}
        <View>
          <Text className='text-lg font-bold mb-4'>Animated Progress</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Click to Animate</Text>
            <Progress value={animatedProgress} />
            <Text className='text-xs text-muted-foreground mt-2'>{animatedProgress}%</Text>
            <Button 
              onPress={() => {
                setAnimatedProgress(0);
                setIsAnimating(true);
              }} 
              disabled={isAnimating}
              className='mt-4'
            >
              <Text>{isAnimating ? 'Animating...' : 'Start Animation'}</Text>
            </Button>
          </View>
        </View>

        {/* File Upload Progress */}
        <View>
          <Text className='text-lg font-bold mb-4'>File Upload Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='mb-4'>
              <Text className='text-sm font-medium mb-1'>document.pdf</Text>
              <Text className='text-xs text-muted-foreground'>2.4 MB</Text>
            </View>
            <Progress value={uploadProgress} variant={uploadProgress === 100 ? 'success' : 'default'} />
            <View className='flex-row justify-between items-center mt-2'>
              <Text className='text-xs text-muted-foreground'>
                {isUploading ? 'Uploading...' : uploadProgress === 100 ? 'Complete!' : 'Ready to upload'}
              </Text>
              <Text className='text-xs font-medium'>{uploadProgress}%</Text>
            </View>
            <Button 
              onPress={startUpload} 
              disabled={isUploading}
              className='mt-4'
            >
              <Text>{isUploading ? 'Uploading...' : 'Start Upload'}</Text>
            </Button>
          </View>
        </View>

        {/* Multi-step Progress */}
        <View>
          <Text className='text-lg font-bold mb-4'>Multi-step Process</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='mb-4'>
              <Text className='text-sm font-medium mb-2'>Step {step} of {totalSteps}</Text>
              <Progress value={stepProgress} variant='info' />
            </View>
            <View className='space-y-2'>
              <View className='flex-row items-center'>
                <View className={`w-6 h-6 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-muted'} items-center justify-center mr-2`}>
                  <Text className='text-xs text-white'>1</Text>
                </View>
                <Text className={`text-sm ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>Account Information</Text>
              </View>
              <View className='flex-row items-center'>
                <View className={`w-6 h-6 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-muted'} items-center justify-center mr-2`}>
                  <Text className='text-xs text-white'>2</Text>
                </View>
                <Text className={`text-sm ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>Personal Details</Text>
              </View>
              <View className='flex-row items-center'>
                <View className={`w-6 h-6 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-muted'} items-center justify-center mr-2`}>
                  <Text className='text-xs text-white'>3</Text>
                </View>
                <Text className={`text-sm ${step >= 3 ? 'text-foreground' : 'text-muted-foreground'}`}>Preferences</Text>
              </View>
              <View className='flex-row items-center'>
                <View className={`w-6 h-6 rounded-full ${step >= 4 ? 'bg-primary' : 'bg-muted'} items-center justify-center mr-2`}>
                  <Text className='text-xs text-white'>4</Text>
                </View>
                <Text className={`text-sm ${step >= 4 ? 'text-foreground' : 'text-muted-foreground'}`}>Review</Text>
              </View>
              <View className='flex-row items-center'>
                <View className={`w-6 h-6 rounded-full ${step >= 5 ? 'bg-primary' : 'bg-muted'} items-center justify-center mr-2`}>
                  <Text className='text-xs text-white'>5</Text>
                </View>
                <Text className={`text-sm ${step >= 5 ? 'text-foreground' : 'text-muted-foreground'}`}>Complete</Text>
              </View>
            </View>
            <View className='flex-row gap-2 mt-4'>
              <Button 
                variant='outline' 
                onPress={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                <Text>Previous</Text>
              </Button>
              <Button 
                onPress={() => setStep(Math.min(totalSteps, step + 1))}
                disabled={step === totalSteps}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Loading States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Loading States</Text>
          <View className='space-y-3'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-2'>Loading content...</Text>
              <Progress value={30} />
            </View>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-2'>Processing data...</Text>
              <Progress value={65} variant='info' />
            </View>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-2'>Almost done...</Text>
              <Progress value={90} variant='success' />
            </View>
          </View>
        </View>

        {/* Task Progress */}
        <View>
          <Text className='text-lg font-bold mb-4'>Task Progress</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <View className='flex-row justify-between mb-2'>
                <Text className='text-sm font-medium'>Project Setup</Text>
                <Text className='text-xs text-muted-foreground'>100%</Text>
              </View>
              <Progress value={100} variant='success' size='sm' />
            </View>
            <View>
              <View className='flex-row justify-between mb-2'>
                <Text className='text-sm font-medium'>Development</Text>
                <Text className='text-xs text-muted-foreground'>75%</Text>
              </View>
              <Progress value={75} variant='info' size='sm' />
            </View>
            <View>
              <View className='flex-row justify-between mb-2'>
                <Text className='text-sm font-medium'>Testing</Text>
                <Text className='text-xs text-muted-foreground'>40%</Text>
              </View>
              <Progress value={40} variant='warning' size='sm' />
            </View>
            <View>
              <View className='flex-row justify-between mb-2'>
                <Text className='text-sm font-medium'>Deployment</Text>
                <Text className='text-xs text-muted-foreground'>0%</Text>
              </View>
              <Progress value={0} size='sm' />
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Progress:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Show completion status of tasks</Text>
              <Text className='text-xs'>• Display file upload/download progress</Text>
              <Text className='text-xs'>• Indicate loading states for long operations</Text>
              <Text className='text-xs'>• Track multi-step processes</Text>
              <Text className='text-xs'>• Show capacity or usage levels</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Always show percentage or step info</Text>
              <Text className='text-xs'>• Use appropriate variants for context</Text>
              <Text className='text-xs'>• Animate progress changes smoothly</Text>
              <Text className='text-xs'>• Provide clear labels for what is progressing</Text>
              <Text className='text-xs'>• Consider showing time remaining for long tasks</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}