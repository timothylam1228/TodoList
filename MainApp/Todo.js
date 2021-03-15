import React from 'react';
import firestore from '@react-native-firebase/firestore';
import { List } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

function Todo({ id,complete,date,title }) {
    const user = auth().currentUser;
    console.log(id)
    console.log(user.uid)
  async function toggleComplete() {
    await firestore()
      .collection('user')
      .doc(user.uid)
      .collection('todos')
      .doc(id)
      .update({
        complete: !complete,
      });
  }

  return (
    <List.Item
      title={title}
      description={date.toDate().toLocaleDateString()}
      onPress={() => toggleComplete()}
      left={props => (
        <List.Icon {...props} icon={complete ? 'check' : 'checkbox-blank-circle-outline'} />
      )}
    />
  );
}

export default React.memo(Todo);