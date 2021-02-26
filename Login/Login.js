import React, { useState, useEffect } from 'react';
import {Image, View, Text ,StyleSheet,TextInput,TouchableOpacity,Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export default function Login({navigation}) {
  const [email, setEmail] = useState(0);
  const [password, setPassword] = useState(0);


  return(
    <View style={styles.container}>
                  <Image style={styles.logo} source={require("../resources/startScreen.png")}/>
                <TextInput
                    style={styles.inputBox}
                    value={email}
                    onChangeText={(emailinput) => setEmail({emailinput})}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={password}
                    onChangeText={(passwordinput) => setPassword({passwordinput})}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
               
            </View>
  );
}

// auth()
//   .signInWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#F6820D',
      borderColor: '#F6820D',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  }
})