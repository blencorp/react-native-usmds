import { ExpoRoot } from 'expo-router';
import { Platform } from 'react-native';

if (Platform.OS === 'web') {
  require('./global.css');
}

export default function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}