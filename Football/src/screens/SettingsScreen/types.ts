export type RootState = {
  settingsReducer: { isEnabledDarkTheme: boolean };
};

export type SettingsScreenViewPropsType = {
  colorSchemeSwitchAction: () => any;
  isEnabledDarkTheme: boolean;
};
