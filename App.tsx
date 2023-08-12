import { Text } from 'react-native';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import { StatusBar } from 'react-native'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      >

      </StatusBar>
      <Routes />
    </ThemeProvider>

  );
}

