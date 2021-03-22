import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const enhancer = compose(applyMiddleware(thunk, loggerMiddleware));

export const store = createStore(reducers, composeWithDevTools(enhancer));
