import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens';

const Stack = createStackNavigator();

export default App = () =>
{
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen
          name="Home"
          component={Home}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};
