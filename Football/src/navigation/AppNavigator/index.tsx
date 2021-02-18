import React from 'react';
import {useSelector} from 'react-redux';
import {AppNavigatorView} from './AppNavigatorView';

export const AppNavigator: React.FC = () => {
  const isEnabledDarkTheme = useSelector(
    (state) => state['settingsReducer'].isEnabledDarkTheme,
  );

  return <AppNavigatorView isEnabledDarkTheme={isEnabledDarkTheme} />;
};
