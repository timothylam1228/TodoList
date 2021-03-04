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
import auth from '@react-native-firebase/auth';
import AddButton from './Componment/AddButton';
import Modal from 'react-native-modal';
import ModalForm from './Componment/Modal/ModalForm';
const deviceWidth = Dimensions.get('window').width;

const deviceHeight = Dimensions.get('window').height;

export default function Home() {
  const [isModalVisible, setModalVisible] = useState(false);

  function toggleModal() {
    console.log('parent')
    setModalVisible(!isModalVisible);
  }
  function signout() {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  return (
    <View style={styles.container}>
    
      <View style={styles.addbuttonContain}>
        <TouchableOpacity onPress={toggleModal} style={styles.addButton}>
          <AddButton></AddButton>
        </TouchableOpacity>
      </View>
    
      <TouchableOpacity onPress={signout}>
        <Text style={styles.buttonText}>signout</Text>
      </TouchableOpacity>
        <ModalForm toggleModal={toggleModal} isVisible={isModalVisible}></ModalForm>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addbuttonContain: {
    borderColor: 1,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 50,
  },

  modalContainer: {
    alignItems: 'center',
    borderColor:'black',
    backgroundColor:'white',
    justifyContent: 'center',
    borderRadius: 50,
    height:500
  },
});
