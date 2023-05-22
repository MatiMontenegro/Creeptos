import { View, Text, Image } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import Card from '../Card'

const Api = () => {

//set of api url to call it later - Shows the Trending Cryptos.
const API_URL_TREND = 'https://api.coingecko.com/api/v3/search/trending'

//prepare the variable rates to use it later.
const [rates, setRates] = useState([]);

useEffect(() => {

fetch(API_URL_TREND)
//case api responds we save data to rates variable
.then((response) => response.json())
.then((data) => {setRates(data.coins.map(coin => coin.item))})
//case api not available we report it on same screen.
.catch((e) =>(setRates(e)))

}, [30000])
return (
<View>
    <Card>
    <Text>
        This are the top trending market values💸
    </Text>
    {/* We'll map the entire values to show in a card //TODO: Styles*/}
    <Card>
        {rates.map(rates => 
        <>
        {/* //TODO: fix the parent warning and sort by market_cap_rank */}
        {/* <Image source={rates.small} /> */}
        <Text >Crypto Name: {rates?.name}</Text>
        <Text >Crypto Value: {rates?.price_btc}</Text>
        <Text >Top Rank: {rates?.market_cap_rank}</Text>
        </>
        )}
    </Card>
    </Card>
    {/* Case of error we'll return this text. and due to fech updating every minute, it'll update. */}
    <View>
        <Card>
        <Text>{rates.error ? 'We are sorry 🥲 Values are not available, but no worries, it will refresh itself within minutes.' : ''}</Text>
        </Card>
    </View>
</View>
)
}
export default Api