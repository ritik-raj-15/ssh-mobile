import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Router } from './src/Routes';
import ErrorBoundary from './src/Components/errorBoundary/index';
import FallbackComponent from './src/Components/errorBoundary/FallbackComponent';

function Main() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </ErrorBoundary>
  );
}

export default Main;
