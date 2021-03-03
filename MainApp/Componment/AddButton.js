import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View, Text, ImageBackground,TouchableOpacity,Image, TouchableOpacityBase} from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

export default function AddButton () {

    return (
      <View>
         <TouchableOpacity style={styles.button}>
        <Icon.Button name="add-sharp" size={30} backgroundColor='#00000000' color='black'></Icon.Button>
        </TouchableOpacity>
    </View>
    );
}
const styles = StyleSheet.create({

  button:{
    borderRadius:1,
    borderWidth:1,
    borderColor:'black',
    height:50,
    width:50,
    borderRadius:50,
  }  
})