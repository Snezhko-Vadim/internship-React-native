import { AuthTokenType, SIGN_IN, SIGN_OUT, RESTORE_TOKEN } from './types';

export const signIn = (token: AuthTokenType) => {
  return {
    type: SIGN_IN,
    token: token,
  };
};

export const signOut = (token: AuthTokenType) => {
  return {
    type: SIGN_OUT,
    token: token,
  };
};

export const restoreToken = (token: AuthTokenType) => {
  return {
    type: RESTORE_TOKEN,
    token: token,
  };
};
