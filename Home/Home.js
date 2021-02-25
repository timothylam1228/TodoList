import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,TouchableOpacity,Image} from "react-native";


function Home ({navigation}) {
      return (
        <View style={styles.container}>
        <StatusBar style="auto" />
              <View style={styles.login_container}>
                  <StatusBar style="auto" />
                  <Image style={styles.logo} source={require("../resources/startScreen.png")}/>
                  <TouchableOpacity style={styles.loginBtn} onPress={()=>
                    navigation.navigate('Login', { name: 'Login' })}>
                   <Text style={styles.loginBtnText}>LOGIN HERE</Text>
                  </TouchableOpacity>
              </View>
      </View>
      );
            
}

export default Home;
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