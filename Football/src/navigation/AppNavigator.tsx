import React from 'react';
import {connect} from 'react-redux';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {FootballDarkTheme} from '../thems';
import {appStateType} from '../store';
import {IAppNavigatorProps} from './types';
import StackNavigator from './StackNavigator';

const AppNavigator: React.FC<IAppNavigatorProps> = ({isEnabledDarkTheme}) => {
  return (
    <NavigationContainer
      theme={isEnabledDarkTheme ? FootballDarkTheme : DefaultTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: appStateType) => {
  return {
    isEnabledDarkTheme: state.settingsReducer.isEnabledDarkTheme,
  };
};

export default connect(mapStateToProps)(AppNavigator);
