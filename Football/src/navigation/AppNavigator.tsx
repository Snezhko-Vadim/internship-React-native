import React from 'react';
import { connect } from 'react-redux';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FootballDarkTheme } from '../thems';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import { StyleSheet } from 'react-native';
import { appStateType } from '../store';
import { IAppNavigatorProps } from './types';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC<IAppNavigatorProps> = ({ isEnabledDarkTheme }) => {
  return (
    <NavigationContainer theme={isEnabledDarkTheme ? FootballDarkTheme : DefaultTheme}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.labelStyle,
          tabStyle: styles.tabStyle,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  labelStyle: { fontSize: 17 },
  tabStyle: { justifyContent: 'center', alignItems: 'center' },
});

const mapStateToProps = (state: appStateType) => {
  return {
    isEnabledDarkTheme: state.settingsReducer.isEnabledDarkTheme,
  };
};

export default connect(mapStateToProps)(AppNavigator);
