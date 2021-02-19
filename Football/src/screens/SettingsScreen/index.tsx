import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsScreenView } from './SettingsScreenView';

export const SettingsScreen = () => {
  const isEnabledDarkTheme = useSelector((state) => state['settingsReducer'].isEnabledDarkTheme);

  const dispatch = useDispatch();
  const colorSchemeSwitch = () => dispatch({ type: 'SWITCH_COLOR_SCHEME' });

  return (
    <SettingsScreenView
      colorSchemeSwitchAction={colorSchemeSwitch}
      isEnabledDarkTheme={isEnabledDarkTheme}
    />
  );
};
