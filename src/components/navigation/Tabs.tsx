import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Homepage from '../../screens/Homepage';
import LoginScreen from '../../screens/LoginScreen';
const Tab = createBottomTabNavigator();

const Tabs = () =>  (
    <Tab.Navigator
      initialRouteName="Homepage"
      tabBarOptions={{
        activeTintColor: '#00ABF7',
      }}
    >
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarLabel: 'Homepage',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Homepage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );

  export default Tabs;