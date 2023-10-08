import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants'
// Auth
import { OnboardingPage, SingIn, SingUp } from '../screens/auth';
// Stack
import { Tab, Chat } from '../screens/stack';

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.BG_COLOR
    }
}

function NavigationRouter() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="onboarding" component={OnboardingPage} options={{headerShown: false}}/>
        <Stack.Screen name="singin" component={SingIn} options={{headerShown: false}}/>
        <Stack.Screen name="singup" component={SingUp} options={{headerShown: true, title: ''}}/>
        <Stack.Screen name="home" component={Tab} options={{headerShown: false, title: ''}}/>
        <Stack.Screen name="chat" component={Chat} options={{headerShown: true, title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRouter;