import { combineReducers } from 'redux';
import { authReducer } from '@root/reducers/authReducer';
import { settingsReducer } from '@root/reducers/settingsReducer';
import { competitionsReducer } from '@root/reducers/competitionsReducer';

export const rootReducer = combineReducers({
  authReducer,
  settingsReducer,
  competitionsReducer,
});
