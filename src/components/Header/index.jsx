import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native'

const Header = ( {title} ) => {
  return (
      <SafeAreaView>
        <View style={styles.header}>
        <Text style={styles.headertext}>{title}</Text>
        <View>
            <Text style={styles.headersubtext}>Your investments wallet, at a glance</Text>
        </View>
        </View>
      </SafeAreaView>
  )
}

export default Header