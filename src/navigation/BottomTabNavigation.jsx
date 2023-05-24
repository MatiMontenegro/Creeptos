import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainNavigation from './MainNavigation'
import CryptoTradingNavigation from './CryptoTradingNavigation'

const BottomTabs = createBottomTabNavigator()

export default BottomTabNavigation = () => {
return(
    <BottomTabs.Navigator>
        <BottomTabs.Screen name='MainNavigation' component={MainNavigation}/>
        <BottomTabs.Screen name='CryptoTrading' component={CryptoTradingNavigationr} />
    </BottomTabs.Navigator>
)
}