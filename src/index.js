import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import beerList from './components/state';

import App from './App';

const reducers = combineReducers({
    beers: beerList
});

const store = createStore(reducers, undefined, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

ReactDOM.render(<App />, document.getElementById('root'));
