import { createStore, compose } from 'redux';
import rootReducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
/* eslint-enable */

const configStore = preloadedState =>
    createStore(rootReducers, preloadedState, composeEnhancers());

const store = configStore({});

export default store;
