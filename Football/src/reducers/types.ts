import { AuthorisationTokenType } from '../actions/types';

export type AuthActionType = {
  type: string;
  token?: AuthorisationTokenType;
};

export type AuthInitialStateType = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: null | AuthorisationTokenType;
};

export type SettingsInitialStateType = {
  isEnabledDarkTheme: boolean;
};

export type SettingsActionType = {
  type: string;
};
