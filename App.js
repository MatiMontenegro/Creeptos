import { View, Text } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {

  const [loaded] = useFonts({
    carlito:require("../creeptos/src/assets/styling/fonts/Carlito-Regular.ttf"),
    jost:require('../creeptos/src/assets/styling/fonts/Jost-Regular.ttf'),
    outfit:require('../creeptos/src/assets/styling/fonts/Outfit-Regular.ttf')
  });

  if (!loaded) return(<Text>Loading...</Text>)


  return (
    <View style={styles.container}>
      <MainNavigation/>
    </View>
  );
}