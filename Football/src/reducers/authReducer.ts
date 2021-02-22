import { AuthInitialStateType } from './types';
import { AuthActionType } from '../actions/types';

const authInitialState: AuthInitialStateType = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
};

export const authReducer = (state = authInitialState, action: AuthActionType) => {
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
