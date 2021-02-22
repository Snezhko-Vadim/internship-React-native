import { SettingsInitialStateType } from './types';
import { SettingsActionType } from '../actions/types';

const settingsInitialState: SettingsInitialStateType = {
  isEnabledDarkTheme: false,
};

export const settingsReducer = (state = settingsInitialState, action: SettingsActionType) => {
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
