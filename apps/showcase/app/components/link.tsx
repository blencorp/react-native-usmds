import { ScrollView, View } from 'react-native';
import { Link } from '../../../storybook/components/Link/Link';
import { Text } from '../../../storybook/components/Text/Text';
import { useState } from 'react';

export default function LinkScreen() {
  // Track visited links for demo
  const [visitedLinks, setVisitedLinks] = useState<Set<string>>(new Set());

  const handleLinkPress = (linkId: string) => {
    setVisitedLinks(prev => new Set([...prev, linkId]));
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Links</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-3'>
            <Link 
              href='#' 
              label='Default Link' 
              onPress={() => handleLinkPress('basic1')}
              visited={visitedLinks.has('basic1')}
            />
            <Link 
              href='#' 
              label='Another Link' 
              onPress={() => handleLinkPress('basic2')}
              visited={visitedLinks.has('basic2')}
            />
            <Link 
              href='#' 
              label='Third Link' 
              onPress={() => handleLinkPress('basic3')}
              visited={visitedLinks.has('basic3')}
            />
          </View>
        </View>

        {/* Link States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Link States</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-3'>
            <View>
              <Text className='text-xs text-muted-foreground mb-1'>Default State</Text>
              <Link href='#' label='Unvisited Link' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-1'>Visited State</Text>
              <Link href='#' label='Visited Link' visited />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-1'>Focus State (press and hold)</Text>
              <Link href='#' label='Focusable Link' />
            </View>
            <View>
              <Text className='text-xs text-muted-foreground mb-1'>Always Focused</Text>
              <Link href='#' label='Focused Link' focus />
            </View>
          </View>
        </View>

        {/* External Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>External Links</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-3'>
            <Link href='https://www.example.com' label='Visit Website' external />
            <Link href='https://docs.example.com' label='Documentation' external />
            <Link href='https://github.com' label='GitHub Repository' external />
            <Link 
              href='https://support.example.com' 
              label='Support Portal' 
              external 
              visited 
            />
          </View>
          <View className='mt-2 bg-muted/20 rounded p-2'>
            <Text className='text-xs text-muted-foreground'>
              External links display an icon indicating they open in a new window
            </Text>
          </View>
        </View>

        {/* Links on Dark Background */}
        <View>
          <Text className='text-lg font-bold mb-4'>Links on Dark Background</Text>
          <View className='bg-base-darker rounded-lg p-4 space-y-3'>
            <Link href='#' label='Light Link on Dark' variant='dark-background' />
            <Link href='#' label='External Link on Dark' variant='dark-background' external />
            <Link href='#' label='Another Dark Background Link' variant='dark-background' />
            <Link href='#' label='Documentation' variant='dark-background' external />
          </View>
        </View>

        {/* Links in Content */}
        <View>
          <Text className='text-lg font-bold mb-4'>Links in Content</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm mb-2'>
              Welcome to our application. You can{' '}
              <Link href='#' label='create an account' className='inline' />
              {' '}to get started, or{' '}
              <Link href='#' label='sign in' className='inline' />
              {' '}if you already have one.
            </Text>
            <Text className='text-sm mb-2 mt-4'>
              For more information, please read our{' '}
              <Link href='#' label='Terms of Service' className='inline' />
              {' '}and{' '}
              <Link href='#' label='Privacy Policy' className='inline' />
              . If you need help, visit our{' '}
              <Link href='#' label='Support Center' external className='inline' />
              .
            </Text>
          </View>
        </View>

        {/* Navigation Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Navigation Links</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4 border-b border-border'>
              <Link href='/home' label='Home' />
            </View>
            <View className='p-4 border-b border-border'>
              <Link href='/products' label='Products' />
            </View>
            <View className='p-4 border-b border-border'>
              <Link href='/services' label='Services' />
            </View>
            <View className='p-4 border-b border-border'>
              <Link href='/about' label='About Us' />
            </View>
            <View className='p-4'>
              <Link href='/contact' label='Contact' />
            </View>
          </View>
        </View>

        {/* Footer Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Footer Links Example</Text>
          <View className='bg-base-darker rounded-lg p-6'>
            <View className='space-y-6'>
              <View>
                <Text className='text-white text-sm font-semibold mb-3'>Company</Text>
                <View className='space-y-2'>
                  <Link href='#' label='About' variant='dark-background' />
                  <Link href='#' label='Careers' variant='dark-background' />
                  <Link href='#' label='Press' variant='dark-background' />
                  <Link href='#' label='Blog' variant='dark-background' external />
                </View>
              </View>
              <View>
                <Text className='text-white text-sm font-semibold mb-3'>Resources</Text>
                <View className='space-y-2'>
                  <Link href='#' label='Documentation' variant='dark-background' external />
                  <Link href='#' label='API Reference' variant='dark-background' external />
                  <Link href='#' label='Community' variant='dark-background' external />
                  <Link href='#' label='Support' variant='dark-background' />
                </View>
              </View>
              <View>
                <Text className='text-white text-sm font-semibold mb-3'>Legal</Text>
                <View className='space-y-2'>
                  <Link href='#' label='Privacy Policy' variant='dark-background' />
                  <Link href='#' label='Terms of Service' variant='dark-background' />
                  <Link href='#' label='Cookie Policy' variant='dark-background' />
                  <Link href='#' label='License' variant='dark-background' />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Breadcrumb Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Breadcrumb Navigation</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row items-center flex-wrap'>
              <Link href='#' label='Home' />
              <Text className='mx-2 text-muted-foreground'>/</Text>
              <Link href='#' label='Products' />
              <Text className='mx-2 text-muted-foreground'>/</Text>
              <Link href='#' label='Electronics' />
              <Text className='mx-2 text-muted-foreground'>/</Text>
              <Text className='text-sm text-foreground'>Smartphones</Text>
            </View>
          </View>
        </View>

        {/* Resource Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Resource Links</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View className='flex-row items-start gap-3'>
              <View className='w-8 h-8 bg-primary/10 rounded items-center justify-center'>
                <Text className='text-xs font-bold text-primary'>PDF</Text>
              </View>
              <View className='flex-1'>
                <Link href='#' label='Annual Report 2024.pdf' external />
                <Text className='text-xs text-muted-foreground mt-1'>2.4 MB</Text>
              </View>
            </View>
            <View className='flex-row items-start gap-3'>
              <View className='w-8 h-8 bg-primary/10 rounded items-center justify-center'>
                <Text className='text-xs font-bold text-primary'>DOC</Text>
              </View>
              <View className='flex-1'>
                <Link href='#' label='User Guide.docx' external />
                <Text className='text-xs text-muted-foreground mt-1'>1.8 MB</Text>
              </View>
            </View>
            <View className='flex-row items-start gap-3'>
              <View className='w-8 h-8 bg-primary/10 rounded items-center justify-center'>
                <Text className='text-xs font-bold text-primary'>ZIP</Text>
              </View>
              <View className='flex-1'>
                <Link href='#' label='Source Code.zip' external />
                <Text className='text-xs text-muted-foreground mt-1'>15.6 MB</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Social Media Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Social Media Links</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              <Link href='https://facebook.com' label='Facebook' external />
              <Link href='https://twitter.com' label='Twitter' external />
              <Link href='https://linkedin.com' label='LinkedIn' external />
              <Link href='https://instagram.com' label='Instagram' external />
              <Link href='https://youtube.com' label='YouTube' external />
            </View>
          </View>
        </View>

        {/* Inline Text Links */}
        <View>
          <Text className='text-lg font-bold mb-4'>Various Link Contexts</Text>
          <View className='space-y-3'>
            {/* Alert with link */}
            <View className='bg-info-lighter rounded-lg p-3'>
              <Text className='text-sm text-info-darker'>
                ℹ️ New features are available.{' '}
                <Link href='#' label='Learn more' className='inline' />
                {' '}about the latest updates.
              </Text>
            </View>

            {/* Error with link */}
            <View className='bg-error-lighter rounded-lg p-3'>
              <Text className='text-sm text-error-darker'>
                ⚠️ Your session has expired.{' '}
                <Link href='#' label='Sign in again' className='inline' />
                {' '}to continue.
              </Text>
            </View>

            {/* Success with link */}
            <View className='bg-success-lighter rounded-lg p-3'>
              <Text className='text-sm text-success-darker'>
                ✓ Registration complete!{' '}
                <Link href='#' label='Go to dashboard' className='inline' />
                {' '}to get started.
              </Text>
            </View>
          </View>
        </View>

        {/* Link Lists */}
        <View>
          <Text className='text-lg font-bold mb-4'>Link Lists</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-semibold mb-3'>Quick Links</Text>
            <View className='space-y-2'>
              <View className='flex-row items-center'>
                <Text className='text-xs mr-2'>•</Text>
                <Link href='#' label='Getting Started Guide' />
              </View>
              <View className='flex-row items-center'>
                <Text className='text-xs mr-2'>•</Text>
                <Link href='#' label='API Documentation' external />
              </View>
              <View className='flex-row items-center'>
                <Text className='text-xs mr-2'>•</Text>
                <Link href='#' label='Video Tutorials' external />
              </View>
              <View className='flex-row items-center'>
                <Text className='text-xs mr-2'>•</Text>
                <Link href='#' label='Community Forum' external />
              </View>
              <View className='flex-row items-center'>
                <Text className='text-xs mr-2'>•</Text>
                <Link href='#' label='Contact Support' />
              </View>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Links:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Navigation between pages or sections</Text>
              <Text className='text-xs'>• References to external resources</Text>
              <Text className='text-xs'>• Inline text links within content</Text>
              <Text className='text-xs'>• Download links for files and documents</Text>
              <Text className='text-xs'>• Social media and contact links</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Use descriptive link text (avoid "click here")</Text>
              <Text className='text-xs'>• Indicate external links with an icon</Text>
              <Text className='text-xs'>• Show visited state for better navigation</Text>
              <Text className='text-xs'>• Ensure sufficient color contrast</Text>
              <Text className='text-xs'>• Provide focus states for accessibility</Text>
              <Text className='text-xs'>• Use appropriate variant for dark backgrounds</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}