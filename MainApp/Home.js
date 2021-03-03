import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View, Text, ImageBackground,TouchableOpacity,Image, TouchableOpacityBase} from 'react-native';
import 'react-native-gesture-handler';
import BottomTabs from './Componment/BottomNav/BottomNav';
import auth from '@react-native-firebase/auth';
import AddButton from './Componment/AddButton';
export default function Home () {
  function signout() {
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }
    return (
      <View style={styles.container}>
      <StatusBar style="auto" />
        <Text>asd</Text>
        <Text>asd</Text>
        <Text>asd</Text>
        <AddButton></AddButton>
        <Text>asd</Text>
        <TouchableOpacity style={styles.button} onPress={signout}>
                    <Text style={styles.buttonText}>signout</Text>
                </TouchableOpacity>
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