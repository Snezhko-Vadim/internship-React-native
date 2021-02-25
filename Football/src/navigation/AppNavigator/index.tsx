import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { AppNavigatorView } from './AppNavigatorView';
import { RootState } from '../../reducers/types';

export const AppNavigator: FC = () => {
  const isEnabledDarkTheme = useSelector(
    (state: RootState) => state.settingsReducer.isEnabledDarkTheme,
  );

  return <AppNavigatorView isEnabledDarkTheme={isEnabledDarkTheme} />;
};
