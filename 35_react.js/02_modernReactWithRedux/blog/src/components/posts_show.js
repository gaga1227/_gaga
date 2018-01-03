import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends Component {
	// React:
	// - define router context type to get access to react router
	// - react will go through parents until find the 'router' context and map it to 'this.context.router'
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		// reset current post data
		this.setState({post: null});
		// fetch from remote
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick(e) {
		e.preventDefault();

		const promise = this.props.deletePost(this.props.params.id);
		promise.then(() => {
			this.context.router.push('/');
		});
	};

	// React:
	// - conditional rendering of 'null' post
	render() {
		const { post } = this.props;
		if (!post) {
			return <div>Loading post...</div>;
		}

		return (
			<div>
				<div>
					<Link to="/">Back to Index</Link>
					<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
				</div>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		post: state.posts.post
	};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);