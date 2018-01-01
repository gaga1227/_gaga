import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route components
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

/**
 * React Router
 *
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config. Doesn't need a path, uses parent route's path.
 *
 * <IndexRoute> component still renders as children but matches parents path
 */

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex}/>
		<Route path="posts/new" component={PostsNew} />
	</Route>
);