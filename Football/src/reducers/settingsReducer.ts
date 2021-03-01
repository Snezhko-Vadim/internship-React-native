import { SettingsInitialStateType } from './types';
import { SettingsActionType, SETTINGS_STRINGS } from 'actions/types';

const settingsInitialState: SettingsInitialStateType = {
  isEnabledDarkTheme: false,
};

export const settingsReducer = (state = settingsInitialState, action: SettingsActionType) => {
  switch (action.type) {
    case SETTINGS_STRINGS.SWITCH_COLOR_SCHEME:
      const isEnabledCurrent = state.isEnabledDarkTheme;
      return {
        ...state,
        isEnabledDarkTheme: !isEnabledCurrent,
      };
  }
  return state;
};
