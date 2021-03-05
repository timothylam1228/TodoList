import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default function CloseButton() {
  return (
      <View style={styles.closeButton}>
       <Text>Confirm</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 1,
    height: 40,
    width: '100%',
    borderRadius: 20,
    
   
  },
});
