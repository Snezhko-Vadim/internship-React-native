import React from 'react';
import { useSelector } from 'react-redux';
import { AppNavigatorView } from './AppNavigatorView';
import { RootState } from './types';

export const AppNavigator: React.FC = () => {
  const isEnabledDarkTheme = useSelector(
    (state: RootState) => state.settingsReducer.isEnabledDarkTheme,
  );

  return <AppNavigatorView isEnabledDarkTheme={isEnabledDarkTheme} />;
};
