import { AuthorisationTokenType } from './types';

const SIGN_IN = 'SIGN_IN';
const RESTORE_TOKEN = 'RESTORE_TOKEN';
const SIGN_OUT = 'SIGN_OUT';

export const signIn = (token: AuthorisationTokenType) => {
  return {
    type: SIGN_IN,
    token: token,
  };
};

export const signOut = (token: AuthorisationTokenType) => {
  return {
    type: SIGN_OUT,
    token: token,
  };
};

export const restoreToken = (token: AuthorisationTokenType) => {
  return {
    type: RESTORE_TOKEN,
    token: token,
  };
};
