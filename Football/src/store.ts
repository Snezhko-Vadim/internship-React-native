import {createStore, combineReducers} from 'redux';

import {settingsReducer, authReducer} from './reducers/reducers';

const reducers = combineReducers({
  settingsReducer,
  authReducer,
});
const store = createStore(reducers);

type reducersType = typeof reducers;

export type appStateType = ReturnType<reducersType>;

export {store};
