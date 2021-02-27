import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,View, Text, ImageBackground,TouchableOpacity,Image, TouchableOpacityBase} from 'react-native';
import auth from '@react-native-firebase/auth';
import MyStack from './Route/authStack';
import MainStack from './Route/mainStack';
import 'react-native-gesture-handler';


export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function signOut(){
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }
  if (initializing) return null;
  if (!user) {
    return (
      <MyStack></MyStack>
    );
  }

  return (
    <MainStack></MainStack>
    // <MyStack></MyStack>

  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  login_container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  logo:{
    width:300,
    height:400,
    resizeMode:'contain'
  },

  inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    baseText: {
      fontFamily: "Arial"
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


 
  });