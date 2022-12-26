import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StatusBar } from 'native-base';
import { AuthRoute } from './Auth.Route';
import { MainRoute } from './Main.Route';
import { OnboardingModal } from '../Components/modal';

const MyTheme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#FFFFFF',
  },
};

export const Router = () => {
  const isAuthenticated = !false;
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar />
      {isAuthenticated ? <MainRoute /> : <AuthRoute />}
      <OnboardingModal />
    </NavigationContainer>
  );
};
