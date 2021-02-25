import { AuthInitialStateType } from './types';
import { AuthActionType, AUTH_STRINGS } from 'actions/types';

const authInitialState: AuthInitialStateType = {
  isLoading: true,
  isSignOut: false,
  userToken: undefined,
};

export const authReducer = (state = authInitialState, action: AuthActionType) => {
  switch (action.type) {
    case AUTH_STRINGS.SIGN_IN:
      return {
        ...state,
        isSignOut: false,
        userToken: action.token,
      };
    case AUTH_STRINGS.SIGN_OUT:
      return {
        ...state,
        isSignOut: true,
        userToken: undefined,
      };
    case AUTH_STRINGS.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
  }
  return state;
};
