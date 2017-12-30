import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

/**
 * React Router:
 *
 * <Router> is a high-level API for automatically setting up a router that
 * renders a <RouterContext> with all the props it needs each time the URL changes
 *
 * <browserHistory> Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history (URL changes), rather than hash history
 *
 * <routes> is route configurations
 */
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	, document.querySelector('.container'));
