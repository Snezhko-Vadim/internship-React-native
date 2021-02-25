import { combineReducers } from 'redux';

import { authReducer } from 'reducers/authReducer';
import { settingsReducer } from 'reducers/settingsReducer';

export const rootReducer = combineReducers({
  settingsReducer,
  authReducer,
});
