const SIGN_IN = 'SIGN_IN';
const RESTORE_TOKEN = 'RESTORE_TOKEN';
const SIGN_OUT = 'SIGN_OUT';

export const signIn = (token) => {
  return {
    type: SIGN_IN,
    token: token,
  };
};

export const signOut = (token) => {
  return {
    type: SIGN_OUT,
    token: token,
  };
};

export const restoreToken = (token) => {
  return {
    type: RESTORE_TOKEN,
    token: token,
  };
};
