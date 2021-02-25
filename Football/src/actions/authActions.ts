import { AuthTokenType, AUTH_STRINGS } from './types';

export const signIn = (token: AuthTokenType) => {
  return {
    type: AUTH_STRINGS.SIGN_IN,
    token: token,
  };
};

export const signOut = (token: AuthTokenType) => {
  return {
    type: AUTH_STRINGS.SIGN_OUT,
    token: token,
  };
};

export const restoreToken = (token: AuthTokenType) => {
  return {
    type: AUTH_STRINGS.RESTORE_TOKEN,
    token: token,
  };
};
