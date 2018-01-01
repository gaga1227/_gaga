import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// action creators
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
	// React:
	// - called when component is about to be rendered for the first time
	componentWillMount() {
		// call mapped action creator in props
		this.props.fetchPosts();
	}

	// React Router:
	// - use <Link> component to trigger route changes
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>
				{JSON.stringify(this.props.posts)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}

// Redux:
// - directly pass in dispatch mapping object rather than a mapping function
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);