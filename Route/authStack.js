import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthHome from '../AuthHome/AuthHome';
import Login from '../Login/Login'
import Signup from '../Login/Signup';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AuthHome" component={AuthHome} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
   
    );
  }

  export default MyStack;