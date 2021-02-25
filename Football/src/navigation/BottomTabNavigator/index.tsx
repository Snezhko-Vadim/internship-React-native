import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from 'screens/HomeScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import { styles } from './styles';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.labelStyle,
        tabStyle: styles.tabStyle,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
};
