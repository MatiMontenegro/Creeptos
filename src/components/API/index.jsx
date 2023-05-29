import { useState, useEffect } from 'react'
import React from 'react'

const Api = () => {

//set of api url to call it later - Shows the current exchange rates.
const API_URL_EXCHANGE = 'https://api.coingecko.com/api/v3/exchange_rates'

//set of api url to call it later - Shows the Trending Cryptos.
const API_URL_TREND = 'https://api.coingecko.com/api/v3/search/trending'

//prepare the variable rates to use it later.
const [rates, setRates] = useState([]);

useEffect(() => {

// fetch(API_URL_TREND)
// //case api responds we save data to rates variable
// .then((response) => response.json())
// .then((data) => {setRates(data.coins.map(coin => coin.item))})
// //case api not available we report it on same screen.
// .catch((e) =>(setRates(e)))

// }, [500000])

fetch(API_URL_EXCHANGE)
//case api responds we save data to rates variable
.then((response) => response.json())
.then((data) => {setRates(data.rates)})
//case api not available we report it on same screen.
.catch((e) =>(setRates(e)))

}, [500000])

useEffect(() => {
    console.log(JSON.stringify(rates));
  }, [rates]);
return (
<>
</>
)
}
export default Api