import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MyStack from './Route/authStack';
import MainStack from './Route/mainStack';
import 'react-native-gesture-handler';


export default function App() {

  // Set an initializing state whilst Firebase connects

  return (
    <MyStack></MyStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  baseText: {
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
});
