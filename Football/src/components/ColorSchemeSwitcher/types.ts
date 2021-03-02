import { SettingsActionType } from '@root/actions/types';

export type ColorSchemeSwitcherPropsType = {
  colorSchemeSwitchAction(): SettingsActionType;
  isEnabledDarkTheme: boolean;
};
