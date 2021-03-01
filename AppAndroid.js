/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';


export default function App() {
  Text.defaultProps.allowFontScaling = false;

  // Set an initializing state whilst Firebase connects
  return (
    <View>
      <Text >123</Text>
      </View>
  );
}