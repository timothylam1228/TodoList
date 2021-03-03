import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View, Text, ImageBackground,TouchableOpacity,Image, TouchableOpacityBase} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

export default function AddButton () {

    return (
      <View>
        <Icon.Button name="add-circle-outline">
        </Icon.Button>
         <Text>
      Lorem <Icon name="ios-book" color="#4F8EF7" /> Ipsum
    </Text>
        <Text>asd</Text>
        <Text>asd</Text>
    </View>
    );
}
