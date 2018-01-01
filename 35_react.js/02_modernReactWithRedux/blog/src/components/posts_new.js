import React, { Component } from 'react';
import { connect } from 'react-redux';

// action creators
import { addPost } from '../actions/index';

class PostsNew extends Component {
	constructor(props) {
		super(props);

		// bind component event handlers requires 'this' context to component context
		this.onNewPostSubmit = this.onNewPostSubmit.bind(this);
	}

	onNewPostSubmit(e) {
		e.preventDefault();

		// call mapped action creator in props
		this.props.addPost({
			title: 'title',
			comment: 'comment'
		});
	}

	render() {
		return <div>new post form</div>;
	}
}

// Redux:
// - directly pass in dispatch mapping object rather than a mapping function
export default connect(null, {addPost})(PostsNew);