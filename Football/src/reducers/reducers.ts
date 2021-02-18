import {IAction, ISettingsInitialState} from './types';

const settingsInitialState: ISettingsInitialState = {
  isEnabledDarkTheme: false,
};

const authInitialState = {
  isLoading: true,
  isSignOut: false,
  userToken: null,
};

export const settingsReducer = (
  state = settingsInitialState,
  action: IAction,
) => {
  switch (action.type) {
    case 'COLOR_SCHEME_SWITCH':
      const isEnabledCurrent = state.isEnabledDarkTheme;
      return {
        ...state,
        isEnabledDarkTheme: !isEnabledCurrent,
      };
  }
  return state;
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
