import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta/index.js';
import mock from './src/mocks/cesta';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
};

