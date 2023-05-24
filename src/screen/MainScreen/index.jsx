import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Card from '../../components/Card';
export default function MainScreen ({route, topCrypto}) {
//TODO: Create cards as a recursive component to display the user's wallet showing the main value in Local Currency and USD.
//Using an equation that gets the actual value of the totals using an API call.
//TODO: Create a new search component that allows us to search for certain crypto values and make a validation that if we count with money, then we can buy Crypto.
const userData = route.params;


  return (
    <View style={styles.background}>
    <Text style={styles.mainscreentitle}>Welcome! {userData.name} , this is your wallet, at a glance:</Text>
    <Card>
    <Text style={styles.mainscreentext}>Total Value: {userData.total}</Text>
    </Card>
    <Text>This are today's top trending Cryptos</Text>
    <Card>
      <Text style={styles.mainscreentext}>Total Value: </Text>
    </Card>
    </View>
  )
}