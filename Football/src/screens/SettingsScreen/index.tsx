import React from 'react';
import { RootState } from './types';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsScreenView } from './SettingsScreenView';

export const SettingsScreen = () => {
  const isEnabledDarkTheme = useSelector(
    (state: RootState) => state.settingsReducer.isEnabledDarkTheme,
  );

  const dispatch = useDispatch();
  const colorSchemeSwitch = () => dispatch({ type: 'SWITCH_COLOR_SCHEME' });

  return (
    <SettingsScreenView
      colorSchemeSwitchAction={colorSchemeSwitch}
      isEnabledDarkTheme={isEnabledDarkTheme}
    />
  );
};
