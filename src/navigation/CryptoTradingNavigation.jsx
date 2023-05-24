import React from 'react'
import CryptoTradingScreen from '../screen/CryptoTradingScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function CryptoTradingNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name = 'CryptoTrading' component={CryptoTradingScreen} />
        </Stack.Navigator>
    )
}