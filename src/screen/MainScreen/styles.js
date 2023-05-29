import { StyleSheet } from "react-native"
import { colors } from "../../assets/styling/colors/Colors";
const styles = StyleSheet.create({
    background:{
    height:"100%",
    backgroundColor:colors.white,
    },
    mainscreentitle:{
        fontFamily:'outfit',
        fontWeight:600,
        fontSize:25,
        margin:15,
        marginTop:100,
        marginLeft:20,
        color:colors.lightpink
    },
    secondaryTitle:{
        fontFamily:'outfit',
        fontWeight:600,
        fontSize:25,
        margin:10,
        marginTop:50,
        marginLeft:20,
        color:colors.lightpink
    },
    cardContainer:{
        justifyContent:'space-between',
        alignItems:'center',
        width:"100%",
        height:"35%",
        maxHeight:"35%",
    },
    card:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:colors.lightpurple,
    },
    mainScreenText:{
        fontFamily:'outfit',
        fontSize:18,
        margin:15,
        marginTop:100,
        marginLeft:20,
    },
})
export default styles;