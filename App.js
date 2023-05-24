import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {

  const [loaded] = useFonts({
    carlito:require("../creeptos/src/assets/styling/fonts/Carlito-Regular.ttf"),
    jost:require('../creeptos/src/assets/styling/fonts/Jost-Regular.ttf'),
    outfit:require('../creeptos/src/assets/styling/fonts/Outfit-Regular.ttf')
  });

  if (!loaded) return(<Text>Loading...</Text>)


  return (
    <NavigationContainer>

      <BottomTabNavigation/>

    </NavigationContainer>
  );
}