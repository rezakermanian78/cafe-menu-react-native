import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import LoginSignupScreen from './LoginSignupScreen';
import AboutScreen from './AboutScreen';

const Stack = createStackNavigator();

function AccountNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountDetails" component={AccountScreen} />
      <Stack.Screen name="LoginSignup" component={LoginSignupScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default AccountNavigator;
