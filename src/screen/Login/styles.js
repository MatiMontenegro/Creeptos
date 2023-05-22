import { StyleSheet } from "react-native"
import { colors } from '../../assets/styling/colors/Colors';
const styles = StyleSheet.create({
    text:{
        fontFamily: 'outfit',
        fontWeight:'bold',
        fontSize: 30,
        padding:0,
        marginBottom:30,
    },
    background:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'transparent',
        width:'100%',
        height:'100%'
    },
    video:{
        alignSelf:'center',
        width:'100%',
        height:'100%',
        position:'relative',
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight:300,

        margin:40,
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        }
    }
})
export default styles;