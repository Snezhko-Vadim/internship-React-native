export type RootState = {
  settingsReducer: { isEnabledDarkTheme: boolean };
};

export type SettingsScreenViewPropsType = {
  colorSchemeSwitchAction(): { type: 'SWITCH_COLOR_SCHEME' };
  isEnabledDarkTheme: boolean;
};
