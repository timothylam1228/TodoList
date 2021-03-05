import { name as appName } from './app.json';
import { StyleSheet, Text, View, AppRegistry, Platform } from 'react-native';
import AppiOS from './AppIOS';
import AppAndroid from './AppAndroid';
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FFA31A',
      accent: 'black',
    },
  };

// export const Body = Platform.select({
//     ios: AppiOS,
//     android: AppiOS,
// });
const Body =()=> {
        return(
            <PaperProvider theme={theme}>
            <AppiOS />
          </PaperProvider>
    )
}

AppRegistry.registerComponent('TodoList', () => Body);