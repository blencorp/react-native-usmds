#!/usr/bin/env node

/**
 * Generate QR code for the USMDS Showcase app
 * This script generates a QR code SVG that points to the latest update on the showcase branch
 */

const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Configuration from showcase app
const PROJECT_ID = '0e88c5ff-0082-4757-b0fc-5f63ba337b72';
const RUNTIME_VERSION = '1.0.0';
const CHANNEL_NAME = 'showcase';

// Generate the Expo Go URL
const SHOWCASE_URL = `exp://u.expo.dev/${PROJECT_ID}?runtime-version=${RUNTIME_VERSION}&channel-name=${CHANNEL_NAME}`;

// Output path
const OUTPUT_PATH = path.join(__dirname, '../public/images/showcase-qr.svg');

console.log('Generating QR code...');
console.log('URL:', SHOWCASE_URL);
console.log('Output:', OUTPUT_PATH);

// Generate QR code as SVG
QRCode.toString(
  SHOWCASE_URL,
  {
    type: 'svg',
    width: 512,
    margin: 2,
    color: {
      dark: '#000000',
      light: '#ffffff',
    },
  },
  (err, svg) => {
    if (err) {
      console.error('Error generating QR code:', err);
      process.exit(1);
    }

    // Write to file
    fs.writeFileSync(OUTPUT_PATH, svg);
    console.log('✅ QR code generated successfully!');
    console.log('Scan this QR code to open the showcase app in Expo Go');
  }
);
