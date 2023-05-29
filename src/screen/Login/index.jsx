import { View, Text, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Video, ResizeMode } from 'expo-av';
import Card from '../../components/Card';
import Input from '../../components/Input'
import { colors } from '../../assets/styling/colors/Colors';

const LogIn = ({ navigation }) => {
  //This creates a video variable in order to import the video and use it later. and status get the status update fist created as an empty object.
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  //Create a Screen Validation in order to Sign up or Login that according to a validation it shows if user and password exists... it will display the main screen, otherwise it won't.
  const [valueUsername, SetValueUsername] = useState('');
  const [valueUserPassword, SetValueUserPassword] = useState('');
  const [userData, setUserData] = useState({
    name: 'Matias Montenegro',
    email: 'montenegro.matias92@gmail.com',
    password: 'Password'
  });

  //FIXME: Hide the BottomTabNavigator If isSignedIn = False -> To Fix on BottomTabNavigation the Monitoring of this component.

  //Status set to avoid BottomTabNavigation
  const [isSignedIn, setIsSignedIn] = useState(false);

  //Function that Handles User's Input
  const handleInputUser= uservalue =>{
    SetValueUsername(uservalue)
  }
  //Same for Password
  const handleInputPass= passvalue =>{
    SetValueUserPassword(passvalue)
  }
  //When Sign In button is Pressed, It will perform Validation and redirect to MainScreenComponent if True and will set the user as Signed In.
  const LoginCredentials=()=>{
    if(valueUsername === userData.email && valueUserPassword === userData.password){
        setIsSignedIn(true)
        return(
          navigation.navigate('MainScreen', {data: userData})
        )
      }
      else{
        SetValueUsername('')
        SetValueUserPassword('')
        return(
          alert('Invalid Credentials')
        )
      }
  };

  return (
<KeyboardAvoidingView>
  <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
  <View style={styles.main_container}>
  <Video
    ref={video}
    style={styles.video}
    source={{
      uri: 'https://www.shutterstock.com/shutterstock/videos/30873037/preview/stock-footage-young-pretty-red-haired-woman-writing-message-using-her-smatphone-urban-night-background.webm',
    }}
    shouldPlay={true}
    resizeMode={ResizeMode.COVER}
    isLooping={true}
    onPlaybackStatusUpdate={status => setStatus(() => status)}
  />
  <View style={styles.cardContainer}>
    <Card>
      <Text style={styles.text}> Welcome to Creeptos </Text>
      <Input 
        style={styles.input}
        blurOnSubmit
        autoCapitalize='none'
        autoCorrect={false}
        newProperty='new'
        keyboardType='email-address'
        value={valueUsername} 
        onChangeText={handleInputUser}
        placeholder='Username@Emailcompany.com'/>
      <Input
        style={styles.input}
        blurOnSubmit
        autoCapitalize='none'
        autoCorrect={false}
        newProperty='new'
        secureTextEntry={true}
        value={valueUserPassword}
        onChangeText={handleInputPass}
        placeholder='Type here your password'></Input>
      <Button title='Sign In' onPress={LoginCredentials}></Button>
    </Card>
    </View>
  </View>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
  )
}

export default LogIn