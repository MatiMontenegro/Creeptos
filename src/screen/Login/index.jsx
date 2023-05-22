import { View, Text, Modal, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Video, ResizeMode } from 'expo-av';
import Card from '../../components/Card';
import Input from '../../components/Input'
import { colors } from '../../assets/styling/colors/Colors';

const LogIn = ({ navigation }) => {
  //This creates a video variable in order to import the video and use it later. and status get the status update fist created as an empty object.
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  //This changes the Modal Status
  const [modalVisible, setModalVisible] = useState(true)

  //FIXME: Create a Screen Validation in order to Sign up or Login that according to a validation it shows if user and password exists... it will display the main screen, otherwise it won't.
  const [valueUsername, SetValueUsername] = useState('');
  const [valueUserPassword, SetValueUserPassword] = useState('');
  const [userData, setUserData] = useState({
    name: 'Matias Montenegro',
    email: 'montenegro.matias92@gmail.com',
    password: 'ThisisMyTest232@'
  });

  //Function that Handles User's Input
  const handleInputUser= uservalue =>{
    SetValueUsername(uservalue)
  }
  //Same for Password
  const handleInputPass= passvalue =>{
    SetValueUserPassword(passvalue)
  }
  //When Sign In button is Pressed, It will perform Validation and redirect to MainScreenComponent if True.
  const LoginCredentials=()=>{
    if(valueUsername === userData.email && valueUserPassword === userData.password){
        setModalVisible(!modalVisible)
        
        return(
          navigation.navigate('MainScreen', {userData:userData})
        )
      }
      else{
        return(
          alert('Invalid Credentials')
        )
        SetValueUsername('')
        SetValueUserPassword('')
      }
  };

  return (
    <>
        <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
    <View style={[styles.container, styles.text]}>
      {/* Here Comes the Video */}
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
        {/* The entire idea here is to create a card that can be centered to login, or create a new account.
        The main Idea of it it's to be centered, yet I'll use a Modal since it looks like Overlay is no longer a good practice. */}
        <Modal animationType='fade' transparent={true} visible={modalVisible}>
        <View style={[styles.modalView]}>
          <Card otherStyles={{backgroundColor:'white'}}>
              <Text style={styles.text}> Welcome to Creeptos </Text>
              <Input 
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
              newProperty='new'
              keyboardType='email-address'
              value={valueUsername} 
              onChangeText={handleInputUser}
              placeholder='Username@Emailcompany.com'/>
              <Input
              blurOnSubmit
              autoCapitalize='none'
              autoCorrect={false}
              newProperty='new'
              secureTextEntry={true}
              value={valueUserPassword}
              onChangeText={handleInputPass}
              placeholder='HereComesThePassword'></Input>
              <Button title='Sign In' onPress={LoginCredentials}></Button>
          </Card>
        </View>
        </Modal>
      </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </>
  )
}

export default LogIn