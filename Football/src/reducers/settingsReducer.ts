import { IAction, ISettingsInitialState } from './types';

const settingsInitialState: ISettingsInitialState = {
  isEnabledDarkTheme: false,
};

export const settingsReducer = (state = settingsInitialState, action: IAction) => {
  switch (action.type) {
    case 'SWITCH_COLOR_SCHEME':
      const isEnabledCurrent = state.isEnabledDarkTheme;
      return {
        ...state,
        isEnabledDarkTheme: !isEnabledCurrent,
      };
  }
  return state;
};
