import AppAndroid from './AppAndroid';
import AppiOS from './AppIOS';
import {name as appName} from './app.json';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';

export const Body = Platform.select({
    ios: AppiOS,
    android: AppAndroid
});
