export const signIn = (token) => {
  return {
    type: 'SIGN_IN',
    token: token,
  };
};

export const signOut = (token) => {
  return {
    type: 'SIGN_IN',
    token: token,
  };
};

export const restoreToken = (token) => {
  return {
    type: 'RESTORE_TOKEN',
    token: token,
  };
};
