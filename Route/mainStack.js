import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../MainApp/Home';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
   
    );
  }

  export default MainStack;