export interface IAction {
  type: string;
  payload?: any;
}

export interface ISettingsInitialState {
  isEnabledDarkTheme: boolean;
}
