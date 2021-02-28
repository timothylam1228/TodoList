import { name as appName } from './app.json';
import { StyleSheet, Text, View, AppRegistry, Platform } from 'react-native';
import AppiOS from './AppIOS';
import AppAndroid from './AppAndroid';
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';

export const Body = Platform.select({
    ios: AppiOS,
    android: AppAndroid
});

AppRegistry.registerComponent('todoListiOS', () => Body);