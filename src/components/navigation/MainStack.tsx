import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import Tabs from './Tabs';
const Stack = createStackNavigator();

const  MainStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Tabs} />
      <Stack.Screen name="Notifications" component={LoginScreen} />

    </Stack.Navigator>
  );


export default MainStack;