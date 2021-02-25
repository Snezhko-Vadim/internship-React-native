import { SettingsActionType } from '../../actions/types';

export type SettingsScreenViewPropsType = {
  colorSchemeSwitchAction(): SettingsActionType;
  isEnabledDarkTheme: boolean;
};
