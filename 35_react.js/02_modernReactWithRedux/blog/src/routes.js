import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route components
import App from './components/app';

/**
 * React Router
 *
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */

// views for testing
const Greeting = () => {
	return <div className="app-view">Greet View!</div>;
};
const Greeting2 = () => {
	return <div className="app-view">Greet2 View!</div>;
};

export default (
	<Route path="/" component={App}>
		<Route path="greet" component={Greeting} />
		<Route path="greet2" component={Greeting2} />
	</Route>
);