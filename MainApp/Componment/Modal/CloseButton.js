import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

export default function CloseButton() {
  return (
      <View style={styles.closeButton}>
        <Icon
        name="close"
        size={30}
        color="black"></Icon>
    </View>
  );
}
const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: 'blue',
    height: 40,
    width: '100%',
    borderRadius: 20,
    
   
  },
});
