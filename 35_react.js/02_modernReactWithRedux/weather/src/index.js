import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app'; // root app component
import reducers from './reducers'; // app data store

// Redux:
// - create Redux store enhancer with middleware chain
// - a middleware is a higher-order function that composes a dispatch function to return a new dispatch function
// - add 'ReduxPromise' middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
	// Redux:
	// - Provider is a react component wrapper that passes Redux store to react component
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.querySelector('.container'));
