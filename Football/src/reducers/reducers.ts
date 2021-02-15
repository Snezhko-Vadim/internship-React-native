import { IAction, ISettingsInitialState } from './types';

const settingsInitialState: ISettingsInitialState = {
  isEnabledDarkTheme: false,
};

const settingsReducer = (state = settingsInitialState, action: IAction) => {
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

export { settingsReducer };
