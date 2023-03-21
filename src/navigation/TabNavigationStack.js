import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../screens/News';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
