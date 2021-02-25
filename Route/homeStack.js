import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home/Home';
import Login from '../Login/Login'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
           options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
   
    );
  }

  export default MyStack;