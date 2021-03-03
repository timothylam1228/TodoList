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
        <TouchableOpacity style={styles.button} onPress={signout}>
                    <Text style={styles.buttonText}>signout</Text>
        </TouchableOpacity>
      <View style={styles.addbutton}>
      <AddButton></AddButton>
    </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    addbutton:{
      
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 50,
     
    }

    });