import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { TextArea } from '../../../storybook/components/TextArea/TextArea';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function TextAreaScreen() {
  // Basic text area states
  const [basicText, setBasicText] = useState('');
  const [helperText, setHelperText] = useState('');
  const [errorText, setErrorText] = useState('Invalid input');
  const [limitedText, setLimitedText] = useState('');
  const [longText, setLongText] = useState('');
  
  // Form examples
  const [feedback, setFeedback] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation example
  const [reviewText, setReviewText] = useState('');
  const [hasError, setHasError] = useState(false);
  
  // Auto-resize example
  const [expandingText, setExpandingText] = useState('Start typing to see the text area expand...');

  const validateReview = (text: string) => {
    const isValid = text.length >= 10;
    setHasError(!isValid);
    return isValid;
  };

  const clearAll = () => {
    setBasicText('');
    setHelperText('');
    setLimitedText('');
    setLongText('');
    setFeedback('');
    setDescription('');
    setComments('');
    setMessage('');
    setReviewText('');
    setExpandingText('');
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Text Areas */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Text Areas</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Default</Text>
              <TextArea
                label='Description'
                placeholder='Enter your description here...'
                value={basicText}
                onChangeText={setBasicText}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>With Helper Text</Text>
              <TextArea
                label='Additional Information'
                helperText='Provide any additional details that might be helpful'
                placeholder='Type your additional information...'
                value={helperText}
                onChangeText={setHelperText}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>With Error</Text>
              <TextArea
                label='Required Field'
                helperText='This field is required and must contain valid information'
                error={true}
                placeholder='This field has an error...'
                value={errorText}
                onChangeText={setErrorText}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Disabled</Text>
              <TextArea
                label='Disabled Field'
                value='This text area is disabled and cannot be edited'
                disabled={true}
              />
            </View>
          </View>
        </View>

        {/* Character Limits */}
        <View>
          <Text className='text-lg font-bold mb-4'>Character Limits</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Short Limit (100 characters)</Text>
              <TextArea
                label='Brief Description'
                helperText='Keep it concise and to the point'
                placeholder='Enter a brief description...'
                maxLength={100}
                value={limitedText}
                onChangeText={setLimitedText}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Long Content (500 characters)</Text>
              <TextArea
                label='Detailed Explanation'
                helperText='Provide a detailed explanation with examples'
                placeholder='Enter detailed information...'
                maxLength={500}
                value={longText}
                onChangeText={setLongText}
              />
            </View>
          </View>
        </View>

        {/* Form Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Form Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Contact Form</Text>
              <TextArea
                label='Message'
                helperText='Tell us how we can help you'
                placeholder='What can we help you with today?'
                maxLength={300}
                value={message}
                onChangeText={setMessage}
              />
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Feedback Form</Text>
              <TextArea
                label='Your Feedback'
                helperText='Share your thoughts and suggestions'
                placeholder='We value your feedback...'
                maxLength={250}
                value={feedback}
                onChangeText={setFeedback}
              />
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Job Application</Text>
              <TextArea
                label='Cover Letter'
                helperText='Explain why you are interested in this position'
                placeholder='Tell us about yourself and why you want this job...'
                maxLength={400}
                value={description}
                onChangeText={setDescription}
              />
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Support Request</Text>
              <TextArea
                label='Issue Description'
                helperText='Describe the problem you are experiencing'
                placeholder='Please describe the issue in detail...'
                maxLength={500}
                value={comments}
                onChangeText={setComments}
              />
            </View>
          </View>
        </View>

        {/* Validation Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Validation Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Product Review (minimum 10 characters)</Text>
            <TextArea
              label='Your Review'
              helperText={hasError ? 'Review must be at least 10 characters long' : 'Share your experience with this product'}
              error={hasError}
              placeholder='Write your review here...'
              maxLength={200}
              value={reviewText}
              onChangeText={(text) => {
                setReviewText(text);
                validateReview(text);
              }}
            />
            
            <View className='flex-row gap-2 mt-4'>
              <Button 
                onPress={() => {
                  if (validateReview(reviewText)) {
                    // Submit review logic
                  }
                }}
                disabled={hasError || reviewText.length === 0}
              >
                <Text>Submit Review</Text>
              </Button>
              <Button 
                variant='outline'
                onPress={() => {
                  setReviewText('');
                  setHasError(false);
                }}
              >
                <Text>Clear</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Real-world Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Real-world Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Blog Post</Text>
              <TextArea
                label='Article Content'
                helperText='Write your blog post content here'
                placeholder='Start writing your article...'
                value={expandingText}
                onChangeText={setExpandingText}
              />
              
              <View className='mt-4 p-3 bg-muted rounded'>
                <Text className='text-xs text-muted-foreground'>
                  Word count: {expandingText.split(' ').filter(word => word.length > 0).length} words
                </Text>
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Bug Report</Text>
              <TextArea
                label='Steps to Reproduce'
                helperText='Describe the steps that led to this issue'
                placeholder='1. First, I...'
                maxLength={300}
                value=''
                onChangeText={() => {}}
              />
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Event Description</Text>
              <TextArea
                label='Event Details'
                helperText='Provide details about your event'
                placeholder='Describe the event, including date, time, location, and what attendees can expect...'
                maxLength={400}
                value=''
                onChangeText={() => {}}
              />
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Recipe Instructions</Text>
              <TextArea
                label='Cooking Instructions'
                helperText='Step-by-step cooking instructions'
                placeholder='1. Preheat the oven to...'
                maxLength={600}
                value=''
                onChangeText={() => {}}
              />
            </View>
          </View>
        </View>

        {/* Interactive Demo */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Demo</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Try different configurations</Text>
            
            <View className='space-y-4'>
              <TextArea
                label='Standard Text Area'
                placeholder='No character limit'
                value=''
                onChangeText={() => {}}
              />
              
              <TextArea
                label='With Character Limit'
                helperText='Maximum 50 characters'
                placeholder='Short message only...'
                maxLength={50}
                value=''
                onChangeText={() => {}}
              />
              
              <TextArea
                label='Required Field'
                helperText='This field is required'
                placeholder='Required information...'
                value=''
                onChangeText={() => {}}
              />
            </View>
            
            <Button 
              variant='outline' 
              onPress={clearAll}
              className='mt-4'
            >
              <Text>Clear All Fields</Text>
            </Button>
          </View>
        </View>

        {/* Common Use Cases */}
        <View>
          <Text className='text-lg font-bold mb-4'>Common Use Cases</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View className='p-3 bg-muted rounded'>
              <Text className='text-sm font-medium mb-1'>Comments and Reviews</Text>
              <Text className='text-xs text-muted-foreground'>
                Perfect for user-generated content like product reviews, blog comments, or feedback forms.
              </Text>
            </View>
            
            <View className='p-3 bg-muted rounded'>
              <Text className='text-sm font-medium mb-1'>Form Descriptions</Text>
              <Text className='text-xs text-muted-foreground'>
                Ideal for longer form fields like project descriptions, cover letters, or detailed explanations.
              </Text>
            </View>
            
            <View className='p-3 bg-muted rounded'>
              <Text className='text-sm font-medium mb-1'>Content Creation</Text>
              <Text className='text-xs text-muted-foreground'>
                Great for creating content like blog posts, articles, or documentation.
              </Text>
            </View>
            
            <View className='p-3 bg-muted rounded'>
              <Text className='text-sm font-medium mb-1'>Communication</Text>
              <Text className='text-xs text-muted-foreground'>
                Essential for contact forms, support requests, or any multi-line communication.
              </Text>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Text Areas:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Multi-line text input (more than one sentence)</Text>
              <Text className='text-xs'>• Comments, reviews, and feedback forms</Text>
              <Text className='text-xs'>• Descriptions and detailed explanations</Text>
              <Text className='text-xs'>• Content creation and editing</Text>
              <Text className='text-xs'>• Messages and correspondence</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Provide clear labels and helpful placeholder text</Text>
              <Text className='text-xs'>• Use character limits when content length matters</Text>
              <Text className='text-xs'>• Show character count for limited fields</Text>
              <Text className='text-xs'>• Provide helpful error messages and validation</Text>
              <Text className='text-xs'>• Consider the expected content length when sizing</Text>
              <Text className='text-xs'>• Use helper text to provide context and guidance</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}