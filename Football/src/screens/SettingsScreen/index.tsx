import React, { FC } from 'react';
import { RootState } from '@root/reducers/types';
import { useSelector, useDispatch } from 'react-redux';
import { SettingsScreenView } from './SettingsScreenView';
import { allActions } from '@root/actions';

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
