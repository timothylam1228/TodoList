import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet,View, Text, ImageBackground,TouchableOpacity,Image} from 'react-native';
import auth from '@react-native-firebase/auth';

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
  if (initializing) return null;
  if (!user) {
    return (
    <View style={styles.container}>
      <StatusBar style="auto" />
            <View style={styles.login_container}>
              
                <StatusBar style="auto" />
                <Image style={styles.logo} source={require("./resources/startScreen.png")}/>
                <TouchableOpacity style={styles.loginBtn}>
                 <Text style={styles.loginBtnText}>LOGIN HERE</Text>
                </TouchableOpacity>
            </View>
    </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
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
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn: {
      marginVertical: 10,
          borderRadius: 10,        
          justifyContent: 'center',        
          alignItems: 'center',       
          padding: 15,       
          width: '80%',       
          backgroundColor: '#FFA31A',
          top:150
    },
    loginBtnText: {
      fontFamily: "Arial",
      fontSize: 18,
      fontWeight: '700',
      textTransform: 'uppercase',
      fontWeight: "bold"

      }
  });