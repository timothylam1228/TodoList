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
import CloseButton from './CloseButton';

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
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleModal} >
              <CloseButton> </CloseButton>
            </TouchableOpacity>
            </View>
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
  buttonContainer:{
    position: 'absolute',
    width:'80%',
    height: '5%',
    backgroundColor:'black',
  }
});
export default ModalForm;
