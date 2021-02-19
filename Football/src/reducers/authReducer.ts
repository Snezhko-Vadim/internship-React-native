const authInitialState = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isSignOut: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignOut: true,
        userToken: null,
      };
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
  }
  return state;
};
