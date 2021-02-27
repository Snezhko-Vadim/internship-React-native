import React, { FC } from 'react';
import { RootState } from 'reducers/types';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsScreenView } from './SettingsScreenView';
import { allActions } from 'actions';

export const SettingsScreen: FC = () => {
  const isEnabledDarkTheme = useSelector(
    (state: RootState) => state.settingsReducer.isEnabledDarkTheme,
  );

  const dispatch = useDispatch();
  const colorSchemeSwitch = () => dispatch(allActions.settingsActions.colorSchemeSwitch());

  return (
    <SettingsScreenView
      colorSchemeSwitchAction={colorSchemeSwitch}
      isEnabledDarkTheme={isEnabledDarkTheme}
    />
  );
};
