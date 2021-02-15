import { createStore, combineReducers } from 'redux';

import { settingsReducer } from './reducers/reducers';

const reducers = combineReducers({
  settingsReducer,
});
const store = createStore(reducers);

type reducersType = typeof reducers;
export type appStateType = ReturnType<reducersType>;

export { store };
