import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { FontAwesome } from '@expo/vector-icons';
import { View } from './components/Themed';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View>
        <Text>
          Hello world
          <FontAwesome name = "rocket" size={30} color="#900" />
        </Text>
      </View>      
    );
  }
}
