import React, { useState, useEffect } from 'react';
import {Image, View, Text ,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import Toast, {BaseToast} from 'react-native-toast-message';
import LoginStyle from './LoginStyle';

const toastConfig = {
    error: ({text1, text2, props, ...rest}) => (
        <BaseToast
        {...rest}
        style={{ borderLeftColor: 'pink' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: 'bold',
          fontFamily:'Arial'
        }}
        text2Style={{
            fontSize: 9,
          fontWeight: 'bold',
          fontFamily:'Arial'
        }}
        text1={text1}
        text2={text2}
      />
        )
  }
  

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  handleLogin = () =>{
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
           this.props.navigation.navigate('Home');
        })
        .catch(error  => { 
            console.log(String(error));
            Toast.show({
                type:'error',
                text1: 'Login Failed',
                text2:String(error),
                position:'bottom',
                autoHide:true
              });
        });
    }

  return(
    <View style={styles.container}>
                  <Image style={styles.logo} source={require("../resources/startScreen.png")}/>
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={event => setEmail(event)}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={event => setPassword(event)}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
            </View>
  );
}
