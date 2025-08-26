import { StyleSheet, View } from 'react-native';
import 'react-native-reanimated';
import { Button } from './components/Button/Button';
import { Text } from './components/Text/Text';

function App() {
  return (
    <View style={styles.container}>
      <Button>
        <Text>Open up App.tsx to start working on your app!</Text>
      </Button>
    </View>
  );
}

// Always load Storybook
const AppEntryPoint = require('./.rnstorybook').default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AppEntryPoint;
