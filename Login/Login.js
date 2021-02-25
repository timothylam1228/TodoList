import React, { useState, useEffect } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';


export default function Login() {
  return(
    <View  style={styles.login_container}>
      <Text>Login Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  login_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
}

});