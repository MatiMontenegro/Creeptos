import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login'
import MainScreen from '../screen/MainScreen';
const MainNavigation = () => {

    //Stack As Function in order to work
const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'screenOptions={{headerShown:false}}>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='MainScreen' component={MainScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation
