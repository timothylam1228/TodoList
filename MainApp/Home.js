import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  FlatList,
  TextInput
} from 'react-native';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import AddButton from './Componment/AddButton';
import ModalForm from './Componment/Modal/ModalForm';
import firestore from '@react-native-firebase/firestore';
import { Appbar } from 'react-native-paper';
import Todo from './Todo'; // we'll create this next



export default function Home() {
  const user = auth().currentUser;
  const ref = firestore().collection('user').doc(user.uid).collection('todos');
  const [isModalVisible, setModalVisible] = useState(false);
  const [ todo, setTodo ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ todos, setTodos ] = useState([]);
  useEffect(() => {
      return ref.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          const {complete,date,title} = doc.data();
          // console.log(doc.id)
          // console.log(date)
          // console.log(title)
          list.push({
            id: doc.id,
            complete,
            date,
            title,
          });
        });
        setTodos(list);
  
        if (loading) {
          setLoading(false);
        }
      });
    }, []);

  function toggleModal() {
    console.log('parent');
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
    
      <Appbar style={{paddingTop:30}}>
        <Appbar.Content title={'TODOs List'} />
      </Appbar>

      <FlatList 
        style={{flex: 1,paddingTop:30,width:'100%'}}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Todo {...item} />}
      />
    
      <TouchableOpacity onPress={signout}>
        <Text style={styles.buttonText}>signout</Text>
      </TouchableOpacity>

      <ModalForm
        toggleModal={toggleModal}
        isVisible={isModalVisible}></ModalForm>
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
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    height: 500,
  },
});
