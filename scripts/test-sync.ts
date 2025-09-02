#!/usr/bin/env tsx

import { syncRegistry } from './sync-registry';

/**
 * Test script to safely test the sync functionality
 */
async function testSync() {
  console.log('🧪 Testing sync-registry script...\n');
  
  try {
    // Test 1: Dry run with all components
    console.log('Test 1: Dry run with all components');
    console.log('-'.repeat(40));
    await syncRegistry({ dryRun: true });
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Test 2: Single component dry run (using Button as example)
    console.log('Test 2: Single component dry run (Button)');
    console.log('-'.repeat(40));
    await syncRegistry({ 
      dryRun: true, 
      singleComponent: 'Button' 
    });
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Test 3: Create test output file with all components
    console.log('Test 3: Create test output file (all components)');
    console.log('-'.repeat(40));
    await syncRegistry({ 
      outputFile: './test-registry-output.ts' 
    });
    
    console.log('\n🎉 All tests completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Review the test-registry-output.ts file');
    console.log('2. If it looks good, run: npm run sync:registry');
    console.log('3. Or sync a single component: npm run sync:registry -- --component Button');
    
  } catch (error) {
    console.error('❌ Test failed:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Run tests
testSync();