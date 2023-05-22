import { View, Text } from 'react-native'
import React, { useState } from 'react'

const UserWallet = () => {
//We start by setting wallets by null, untill some value it's save to the wallets itself.
const [arsWallet, setArsWallet] = useState(null);
const [usdWallet, setusdWallet] = useState(null);
//In this case in particular, crypto will be an array due to all quantity of differents cryptos
//That user would be able to buy in particular, I'll try to set it to differents cryptos, bue otherwise it'll be BTC.
const [crypto, setCrypto] = useState([]);


return (
    <View>
        <Text>

        </Text>
    </View>
)
}

export default UserWallet