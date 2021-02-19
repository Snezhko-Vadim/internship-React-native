import { createStore } from 'redux';

import { rootReducer } from './reducers';

const store = createStore(rootReducer);

type reducersType = typeof rootReducer;

export type appStateType = ReturnType<reducersType>;

export { store };
