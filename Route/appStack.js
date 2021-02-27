import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"   component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
   
    );
  }

  export default MyStack;