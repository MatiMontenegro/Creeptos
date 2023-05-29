import { StyleSheet } from "react-native"
import { colors } from '../../assets/styling/colors/Colors';
const styles = StyleSheet.create({
    main_container:{
        flex: 0,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    video:{
        alignSelf:'center',
        width:'100%',
        height:'100%',
        position:'absolute',
    },
    cardContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.white,
        marginTop:300,
        padding:10,
        width: '85%',
        height: '40%',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },
    text:{
        fontFamily: 'outfit',
        fontWeight:600,
        fontSize: 30,
        padding:0,
        marginBottom:30,
    },
    input:{
        fontFamily:'outfit',
        width:'100%',
        padding:10,
        margin:20,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:colors.darkpurple,
        color:colors.lightpurple
    },
    button:{

    },
})
export default styles;