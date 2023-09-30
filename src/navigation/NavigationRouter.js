import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants'

import { OnboardingPage, SingIn } from '../screens/auth';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationRouter;