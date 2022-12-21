import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'native-base';
import { AuthRoute } from './Auth.Route';
import { MainRoute } from './Main.Route';
import { OnboardingModal } from '../Components/modal';

export const Router = () => {
  const isAuthenticated = false;
  return (
    <NavigationContainer>
      <StatusBar />
      {isAuthenticated ? <MainRoute /> : <AuthRoute />}
      <OnboardingModal />
    </NavigationContainer>
  );
};
