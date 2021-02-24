import React, { FC } from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { FootballDarkTheme } from '../../themes';
import { StackNavigator } from '../StackNavigator';
import { AppNavigatorViewProps } from './types';

export const AppNavigatorView: FC<AppNavigatorViewProps> = (props) => {
  const { isEnabledDarkTheme } = props;
  return (
    <NavigationContainer theme={isEnabledDarkTheme ? FootballDarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
