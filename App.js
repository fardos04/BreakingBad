import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomBar } from './navigation';
import Header from './ui/Header';


export default function App() {
  return (
    <NavigationContainer>
    <Header/>
    <AppBottomBar /> 
    </NavigationContainer>
  );
}


