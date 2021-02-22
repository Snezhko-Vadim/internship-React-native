import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { settingsReducer } from './settingsReducer';
import { competitionsReducer } from './competitionsReducer';

export const rootReducer = combineReducers({
  authReducer,
  settingsReducer,
  competitionsReducer,
});
