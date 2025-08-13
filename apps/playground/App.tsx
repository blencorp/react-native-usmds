import React from 'react';
import { PlaygroundScreen } from './components/PlaygroundScreen';
import 'react-native-reanimated';
import './global.css';
import { PortalHost } from '@rn-primitives/portal';

export default function App() {
  return (
    <>
      <PortalHost />
      <PlaygroundScreen />
    </>
  );
}
