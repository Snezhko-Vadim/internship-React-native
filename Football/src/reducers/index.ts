import { combineReducers } from 'redux';
import { authReducer } from '@root/reducers/authReducer';
import { settingsReducer } from '@root/reducers/settingsReducer';

export const rootReducer = combineReducers({
  authReducer,
  settingsReducer,
});
