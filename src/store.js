import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import beersReducer from './components/BeersList/state';

const reducer = combineReducers({
  beers: beersReducer,
  routing: routerReducer
});

export const history = createHistory();

export const store = createStore(reducer, undefined, compose(
  applyMiddleware(thunk, routerMiddleware(history)),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
