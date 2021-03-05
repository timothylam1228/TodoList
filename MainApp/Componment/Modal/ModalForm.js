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
import ConfirmButton from './ConfirmButton';
import { TextInput } from 'react-native-paper';


const deviceWidth = Dimensions.get('window').width;

const deviceHeight = Dimensions.get('window').height;

const ModalForm = (props) => {
  const {isVisible, toggleModal} = props;

  const [title, setTitle] = React.useState('');

  return (
    <Modal
      isVisible={isVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}>
      <View style={styles.modalContainer}>
      
        <TextInput
          style={styles.inputFieldStyle}
          label="Email"
          value={title}
          onChangeText={title => setTitle(title.title)}
        />
       

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={toggleModal} style={styles.buttonStyle}>
            <CloseButton> </CloseButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal} style={styles.buttonStyle}>
            <ConfirmButton> </ConfirmButton>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    height: 500,
  },
  buttonContainer: {
    position: 'absolute',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 1,
    width: '90%',
    backgroundColor:'blue'
  },
  buttonStyle: {
    width: '40%',
  },
  inputFieldStyle:{
    backgroundColor:'green',
    width:'100%',
    

  }

});
export default ModalForm;
