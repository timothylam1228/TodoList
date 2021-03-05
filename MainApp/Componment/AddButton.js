import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

export default function AddButton() {
  return (
    <View style={styles.addButton}>
      <Icon
        name="add-sharp"
        size={30}
        backgroundColor="black"
        color="black"></Icon>
    </View>
  );
}
const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#FFA31A',
    backgroundColor: '#FFA31A',
    height: 60,
    width: 60,
    borderRadius: 50,
    right: 30,
    bottom: 50,
  },
});
