import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabRoute } from './BottomTab.Route';
import { RootStackParamList } from './types/Main.types';

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const MainRoute = () => {
  return (
    <MainStack.Navigator initialRouteName="Main" screenOptions={{ animation: 'fade_from_bottom' }}>
      <MainStack.Screen name="Main" component={BottomTabRoute} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
};
