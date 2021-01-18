import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainStack from './src/components/navigation/MainStack';
import { theme } from './src/core/theme';

export default function App() {
  return (
    <NavigationContainer>
    <PaperProvider theme={theme}>
        <MainStack/>
      </PaperProvider>
      </NavigationContainer>
  );
}
