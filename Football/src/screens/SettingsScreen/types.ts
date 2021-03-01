import { SettingsActionType } from '@root/actions/types';

export type SettingsScreenViewPropsType = {
  colorSchemeSwitchAction(): SettingsActionType;
  isEnabledDarkTheme: boolean;
};
