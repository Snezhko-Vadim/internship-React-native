import { AuthTokenType } from '../actions/types';

export type AuthInitialStateType = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: null | AuthTokenType;
};

export type SettingsInitialStateType = {
  isEnabledDarkTheme: boolean;
};
