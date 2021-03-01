import { AuthTokenType } from '@root/actions/types';
import { rootReducer } from './index';

export type AuthInitialStateType = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: undefined | AuthTokenType;
};

export type SettingsInitialStateType = {
  isEnabledDarkTheme: boolean;
};

export type RootState = ReturnType<typeof rootReducer>;
