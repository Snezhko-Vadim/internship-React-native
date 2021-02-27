import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from 'screens/HomeScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import { styles } from './styles';
import { screenNames } from './types';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.labelStyle,
        tabStyle: styles.tabStyle,
      }}
    >
      <Tab.Screen name={screenNames.home} component={HomeScreen} />
      <Tab.Screen name={screenNames.screen} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
