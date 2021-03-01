import { SettingsActionType } from 'actions/types';

export type ColorSchemeSwitcherPropsType = {
  colorSchemeSwitchAction(): SettingsActionType;
  isEnabledDarkTheme: boolean;
};
