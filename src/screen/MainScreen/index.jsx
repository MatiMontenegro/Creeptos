import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import Card from '../../components/Card';
export default function MainScreen ({route}) {
//TODO: Create cards as a recursive component to display the user's wallet showing the main value in Local Currency and USD using the core Component,
//and also an equation that gets the actual value of the totals using an API call.
//TODO: Create a new search component that allows us to search for certain crypto values and make a validation that if we count with money, then we can buy Crypto.
//Here it receives the params given from another prop.
const data = route.params;

  return (
  <View style={styles.background}>
    <Text style={styles.mainscreentitle}>Welcome! {/*HerecomesTheUser*/} , this is your wallet, at a glance:</Text>
        <View style={styles.cardContainer}>
            <Card otherStyles={styles.card}>
                <Text style={styles.mainScreenText}>Total Value: {/*HerecomesTheLocalValueAndCryptoValue*/}</Text>
            </Card>
        </View>
    <Text style={styles.secondaryTitle}>This are today's top trending Cryptos</Text>
        <View style={styles.cardContainer}>
            <Card otherStyles={styles.card}>
                <Text style={styles.mainScreenText}>Top Trending Cryptos: {/*HereComesTheTopTrendingCryptos*/} </Text>
            </Card>
        </View>
  </View>
  )
}