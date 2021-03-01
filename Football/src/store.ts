<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

type reducersType = typeof rootReducer;

export type appStateType = ReturnType<reducersType>;

export { store };
=======
import { createStore } from 'redux';
import { rootReducer } from '@root/reducers';

export const store = createStore(rootReducer);
>>>>>>> main
