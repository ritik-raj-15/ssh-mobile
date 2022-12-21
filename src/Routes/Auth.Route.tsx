import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../Pages';

const AuthStack = createNativeStackNavigator();

export const AuthRoute = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};
