import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from '../../../storybook/components/TextInput/TextInput';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';
import { Icon } from '../../../storybook/components/Icon/Icon';

export default function TextInputScreen() {
  // Basic input states
  const [basicInput, setBasicInput] = useState('');
  const [helperInput, setHelperInput] = useState('');
  const [errorInput, setErrorInput] = useState('invalid@email');
  const [successInput, setSuccessInput] = useState('valid@email.com');
  
  // Form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [weight, setWeight] = useState('');
  const [search, setSearch] = useState('');
  const [username, setUsername] = useState('');
  
  // Validation states
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phone) {
      setPhoneError('Phone number is required');
      return false;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError('Format: (123) 456-7890');
      return false;
    } else {
      setPhoneError('');
      return true;
    }
  };

  const formatPhone = (input: string) => {
    const numbers = input.replace(/\D/g, '');
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (input: string) => {
    const formatted = formatPhone(input);
    setPhone(formatted);
    validatePhone(formatted);
  };

  const handleEmailChange = (input: string) => {
    setEmail(input);
    validateEmail(input);
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAmount('');
    setWeight('');
    setSearch('');
    setUsername('');
    setEmailError('');
    setPhoneError('');
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Text Inputs */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Text Inputs</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Default</Text>
              <TextInput
                label='Full Name'
                placeholder='Enter your full name'
                value={basicInput}
                onChangeText={setBasicInput}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>With Helper Text</Text>
              <TextInput
                label='Username'
                helperText='Choose a unique username'
                placeholder='Enter username'
                value={helperInput}
                onChangeText={setHelperInput}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Error State</Text>
              <TextInput
                label='Email Address'
                state='error'
                errorMessage='Please enter a valid email address'
                helperText='We need your email for notifications'
                placeholder='your.email@example.com'
                value={errorInput}
                onChangeText={setErrorInput}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Success State</Text>
              <TextInput
                label='Verified Email'
                state='success'
                placeholder='your.email@example.com'
                value={successInput}
                onChangeText={setSuccessInput}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Disabled</Text>
              <TextInput
                label='System Generated ID'
                state='disabled'
                value='SYS-12345-AUTO'
                placeholder='This field is disabled'
              />
            </View>
          </View>
        </View>

        {/* Input Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Input Variants</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>With Prefix Icon</Text>
              <TextInput
                label='Search'
                variant='prefix'
                prefix={<Icon name='search' size={24} />}
                placeholder='Search for anything...'
                value={search}
                onChangeText={setSearch}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>With Prefix Text</Text>
              <TextInput
                label='Website URL'
                variant='prefix'
                prefix='https://'
                placeholder='example.com'
                value={username}
                onChangeText={setUsername}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>With Suffix Text</Text>
              <TextInput
                label='Weight'
                variant='suffix'
                suffix='lbs'
                placeholder='Enter weight'
                keyboardType='numeric'
                value={weight}
                onChangeText={setWeight}
              />
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Currency Input</Text>
              <TextInput
                label='Amount'
                variant='prefix'
                prefix='$'
                placeholder='0.00'
                keyboardType='numeric'
                value={amount}
                onChangeText={setAmount}
              />
            </View>
          </View>
        </View>

        {/* Form Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Complete Form Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <Text className='text-sm font-medium mb-3'>Contact Information</Text>
            
            <View className='flex-row gap-4'>
              <View className='flex-1'>
                <TextInput
                  label='First Name'
                  placeholder='John'
                  value={firstName}
                  onChangeText={setFirstName}
                  required={true}
                />
              </View>
              <View className='flex-1'>
                <TextInput
                  label='Last Name'
                  placeholder='Doe'
                  value={lastName}
                  onChangeText={setLastName}
                  required={true}
                />
              </View>
            </View>
            
            <TextInput
              label='Email Address'
              helperText='We will use this to contact you'
              placeholder='john.doe@example.com'
              keyboardType='email-address'
              state={emailError ? 'error' : email && !emailError ? 'success' : 'default'}
              errorMessage={emailError}
              value={email}
              onChangeText={handleEmailChange}
              required={true}
            />
            
            <TextInput
              label='Phone Number'
              helperText='Format: (123) 456-7890'
              placeholder='(123) 456-7890'
              keyboardType='phone-pad'
              state={phoneError ? 'error' : phone && !phoneError ? 'success' : 'default'}
              errorMessage={phoneError}
              value={phone}
              onChangeText={handlePhoneChange}
              required={true}
            />
            
            <View className='flex-row gap-2 mt-4'>
              <Button 
                onPress={() => {
                  // Submit form logic
                }}
                disabled={!firstName || !lastName || !!emailError || !!phoneError}
              >
                <Text>Submit Form</Text>
              </Button>
              <Button 
                variant='outline'
                onPress={clearForm}
              >
                <Text>Clear</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Specialized Inputs */}
        <View>
          <Text className='text-lg font-bold mb-4'>Specialized Input Types</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Login Form</Text>
              <View className='space-y-4'>
                <TextInput
                  label='Username or Email'
                  placeholder='Enter your username or email'
                  value=''
                  onChangeText={() => {}}
                />
                <TextInput
                  label='Password'
                  placeholder='Enter your password'
                  secureTextEntry={true}
                  value=''
                  onChangeText={() => {}}
                />
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Payment Information</Text>
              <View className='space-y-4'>
                <TextInput
                  label='Card Number'
                  placeholder='1234 5678 9012 3456'
                  keyboardType='numeric'
                  value=''
                  onChangeText={() => {}}
                />
                <View className='flex-row gap-4'>
                  <View className='flex-1'>
                    <TextInput
                      label='Expiry Date'
                      placeholder='MM/YY'
                      keyboardType='numeric'
                      value=''
                      onChangeText={() => {}}
                    />
                  </View>
                  <View className='flex-1'>
                    <TextInput
                      label='CVV'
                      placeholder='123'
                      keyboardType='numeric'
                      secureTextEntry={true}
                      value=''
                      onChangeText={() => {}}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Address Form</Text>
              <View className='space-y-4'>
                <TextInput
                  label='Street Address'
                  placeholder='123 Main Street'
                  value=''
                  onChangeText={() => {}}
                />
                <View className='flex-row gap-4'>
                  <View className='flex-1'>
                    <TextInput
                      label='City'
                      placeholder='New York'
                      value=''
                      onChangeText={() => {}}
                    />
                  </View>
                  <View className='flex-1'>
                    <TextInput
                      label='ZIP Code'
                      placeholder='10001'
                      keyboardType='numeric'
                      value=''
                      onChangeText={() => {}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Input Validation Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Validation Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Real-time Validation</Text>
              <View className='space-y-4'>
                <TextInput
                  label='Strong Password'
                  helperText='Must contain at least 8 characters, one uppercase, one number'
                  placeholder='Enter a strong password'
                  secureTextEntry={true}
                  value=''
                  onChangeText={() => {}}
                />
                <TextInput
                  label='Confirm Password'
                  helperText='Must match the password above'
                  placeholder='Confirm your password'
                  secureTextEntry={true}
                  value=''
                  onChangeText={() => {}}
                />
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Format Validation</Text>
              <View className='space-y-4'>
                <TextInput
                  label='Social Security Number'
                  placeholder='123-45-6789'
                  value=''
                  onChangeText={() => {}}
                />
                <TextInput
                  label='Date of Birth'
                  placeholder='MM/DD/YYYY'
                  value=''
                  onChangeText={() => {}}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Interactive Demos */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Demos</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Search with Suggestions</Text>
              <TextInput
                label='Search Products'
                variant='prefix'
                prefix={<Icon name='search' size={24} />}
                placeholder='Start typing to search...'
                value=''
                onChangeText={() => {}}
              />
              <View className='mt-2 p-3 bg-muted rounded'>
                <Text className='text-xs text-muted-foreground'>
                  Suggestions will appear here as you type
                </Text>
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Auto-complete Address</Text>
              <TextInput
                label='Address'
                helperText='Start typing your address for suggestions'
                placeholder='123 Main St...'
                value=''
                onChangeText={() => {}}
              />
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Calculator Input</Text>
              <TextInput
                label='Calculation'
                variant='suffix'
                suffix='= 0'
                placeholder='Enter math expression'
                value=''
                onChangeText={() => {}}
              />
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Text Inputs:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Single-line text entry (names, emails, passwords)</Text>
              <Text className='text-xs'>• Numeric inputs (amounts, quantities, measurements)</Text>
              <Text className='text-xs'>• Search functionality</Text>
              <Text className='text-xs'>• Form fields requiring specific formats</Text>
              <Text className='text-xs'>• Short responses that don't need multiple lines</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Use clear, descriptive labels</Text>
              <Text className='text-xs'>• Provide helpful placeholder text</Text>
              <Text className='text-xs'>• Use appropriate keyboard types (email, numeric, etc.)</Text>
              <Text className='text-xs'>• Show validation feedback in real-time when possible</Text>
              <Text className='text-xs'>• Use prefixes and suffixes to provide context</Text>
              <Text className='text-xs'>• Mark required fields clearly</Text>
              <Text className='text-xs'>• Provide helper text for complex format requirements</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}