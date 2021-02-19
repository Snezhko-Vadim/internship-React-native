import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { settingsReducer } from './settingsReducer';

export const rootReducer = combineReducers({
  authReducer,
  settingsReducer,
});
