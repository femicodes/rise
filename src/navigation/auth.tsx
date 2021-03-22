import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login" headerMode="none">
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
