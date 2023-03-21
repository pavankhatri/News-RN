import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewsDetails from '../screens/NewsDetails';
import TabNavigator from './TabNavigationStack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTransparent: true}}>
        <Stack.Screen name="Screens" component={TabNavigator} />
        <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
