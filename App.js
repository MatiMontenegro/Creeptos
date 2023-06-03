import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import  store  from './src/store';
import Api from './src/components/API';

export default function App() {

  const [loaded] = useFonts({
    carlito:require("../creeptos/src/assets/styling/fonts/Carlito-Regular.ttf"),
    jost:require('../creeptos/src/assets/styling/fonts/Jost-Regular.ttf'),
    outfit:require('../creeptos/src/assets/styling/fonts/Outfit-Regular.ttf')
  });

  if (!loaded) return(<Text>Loading...</Text>)


  return (
    <Provider store={store}>
    <NavigationContainer screenOptions={{headerShown:false}}>
      <BottomTabNavigation/>
    </NavigationContainer>
    </Provider>
  );
}