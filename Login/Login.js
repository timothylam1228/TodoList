import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

function Login() {
  // Set an initializing state whilst Firebase connects
  const iosConfig = {
    clientId: 'x',
    appId: 'x',
    apiKey: 'x',
    databaseURL: 'x',
    storageBucket: 'x',
    messagingSenderId: 'x',
    projectId: 'x',
  
    // enable persistence by adding the below flag
    persistence: true,
  };
  
  // pluck values from your `google-services.json` file you created on the firebase console
  const androidConfig = {
    clientId: 'x',
    appId: 'x',
    apiKey: 'x',
    databaseURL: 'x',
    storageBucket: 'x',
    messagingSenderId: 'x',
    projectId: 'x',
  
    // enable persistence by adding the below flag
    persistence: true,
  };

  const todoList = firebase.initializeApp(
    // use platform specific firebase config
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    // name of this app
    'todoList',
  );
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  todoList.onReady().then((app) => {
    // --- ready ---
    // use `app` arg, kittensApp var or `app('kittens')` to access modules
    // and their methods. e.g:
    firebase.app('todoList').auth().signInAnonymously().then((user) => {
        console.log('todoList user ->', user.toJSON());
    });
 });
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

export default Login;