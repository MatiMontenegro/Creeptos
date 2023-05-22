import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
    flexGrow:1,
    width: '100%',
    justifyContent:'center',
    alignItems: 'center',
    maxWidth: '80%',
    padding: 20,
    shadowColor: 'black',
    textShadowOffset: {width:0, height:2},
    shadowRadius: 20,
    shadowOpacity: 0.5,
    borderRadius: 15    
}
})

export default styles