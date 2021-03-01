import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@root/screens/HomeScreen';
import { SettingsScreen } from '@root/screens/SettingsScreen';
import { styles } from './styles';
import { SCREEN_NAMES } from './types';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.labelStyle,
        tabStyle: styles.tabStyle,
      }}
    >
      <Tab.Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
      <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};
