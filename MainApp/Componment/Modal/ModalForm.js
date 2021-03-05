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
import CalendarSelect from './Calendar';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const devheight=  windowHeight*0.65;

const ModalForm = (props) => {
  const {isVisible, toggleModal} = props;

  const [title, setTitle] = React.useState('');

  return (
    <Modal
      isVisible={isVisible}
      deviceWidth={windowWidth}
      deviceHeight={windowHeight}>
      <View style={styles.modalContainer}>
      <View style={styles.inputContainerStyle}>
        <TextInput
        style={styles.inputFieldStyle}
        mode='outlined'
          label="Task"
          value={title}
          onChangeText={title => setTitle(title.title)}
        />
      </View>
      <View style={styles.calendarContainer}>
      <CalendarSelect></CalendarSelect>
      </View>
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
    justifyContent: 'flex-start',
    borderRadius: 50,
    height: windowHeight*0.8,
  },
  buttonContainer: {
    position:'absolute',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: '90%',
    bottom:30,

  },
  buttonStyle: {
    width: '40%',
  },
  inputContainerStyle:{
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    top:'10%'
  },
  inputFieldStyle:{
    width:'80%%',
  },
  calendarContainer:{
    
    width:windowWidth*0.7,
    backgroundColor:'black',
    top:devheight*0.15,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
export default ModalForm;
