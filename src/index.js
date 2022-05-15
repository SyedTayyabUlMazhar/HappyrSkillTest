import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Search } from './screens';
import { Colors } from './theme';

const Stack = createStackNavigator();


const ScreenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: Colors.screenBackground
  }
};

const searchScreenOptions = {
  ...TransitionPresets.ModalFadeTransition,
  presentation: 'transparentModal',
  cardStyle:{},
};

export default App = () =>
{
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={ScreenOptions}>

        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={searchScreenOptions}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};
