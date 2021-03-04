import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import 'react-native-gesture-handler';
import Modal from 'react-native-modal';

const deviceWidth = Dimensions.get('window').width;

const deviceHeight = Dimensions.get('window').height;

const ModalForm = (props)=> {
  
  const {isVisible,toggleModal} = props;

  return (
        <Modal
          isVisible={isVisible}
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={toggleModal} >
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    borderColor:'black',
    backgroundColor:'white',
    justifyContent: 'center',
    borderRadius: 50,
    height:500
  },
});
export default ModalForm;
