import React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {FootballDarkTheme} from '../../themes';
import {StackNavigator} from '../StackNavigator';

export const AppNavigatorView: React.FC = ({isEnabledDarkTheme}) => {
  return (
    <NavigationContainer
      theme={isEnabledDarkTheme ? FootballDarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
