import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// action creators
import { fetchPosts } from '../actions/index';
import { clearPost } from '../actions/index';

class PostsIndex extends Component {
	// React:
	// - called when component is about to be rendered for the first time
	componentWillMount() {
		// clear current post residue state
		this.props.clearPost();
		// call mapped action creator in props
		this.props.fetchPosts();
	}

	// React:
	// - add unique id as key value to list items
	renderPosts() {
		return this.props.posts
			.filter(post => {
			return post.title && post.title.length
		}).map(post => {
			return (
				<li
					key={post.id}
					className="list-group-item">
					<Link to={`/posts/${post.id}`}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		});
	}

	// React Router:
	// - use <Link> component to trigger route changes
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
				</div>

				<h3>Posts</h3>

				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts.all
	};
}

// Redux:
// - directly pass in dispatch mapping object rather than a mapping function
export default connect(mapStateToProps, {fetchPosts, clearPost})(PostsIndex);