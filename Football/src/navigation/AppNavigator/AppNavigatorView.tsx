import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { FootballDarkTheme } from '../../themes';
import { StackNavigator } from '../StackNavigator';
import { AppNavigatorViewProps } from './types';

export const AppNavigatorView: React.FC<AppNavigatorViewProps> = ({ isEnabledDarkTheme }) => {
  return (
    <NavigationContainer theme={isEnabledDarkTheme ? FootballDarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
