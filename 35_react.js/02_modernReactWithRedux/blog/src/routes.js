import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route components
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

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
 *
 * ':id' maps to 'this.props.params.id' by react router
 */

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex}/>
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
	</Route>
);