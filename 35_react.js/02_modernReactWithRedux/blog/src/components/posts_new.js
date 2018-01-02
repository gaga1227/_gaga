import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// action creators
import { createPost } from '../actions/index';

class PostsNew extends Component {
	// React:
	// - define router context type to get access to react router
	// - react will go through parents until find the 'router' context and map it to 'this.context.router'
	static contextTypes = {
		router: PropTypes.object
	};

	// on submit handler
	onSubmit(formData) {
		const promise = this.props.createPost(formData); // action creator returns a promise via 'react-promise' middleware
		promise.then(() => {
			// navigate to index by pushing new URL to history
			this.context.router.push('/');
		});
	}

	render() {
		// Redux Form:
		// - get redux form helpers from 'ConnectedForm' component (this) props
		// - pass in mapped form submission action creator to 'handleSubmit'
		// - spread helper objects onto each field to hand over control

		const {
			handleSubmit,
			fields: { title, categories, content }
		} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create a new post</h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">{title.touched ? title.error : ''}</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">{categories.touched ? categories.error : ''}</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help">{content.touched ? content.error : ''}</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to={'/'} className="btn btn-danger btn-cancel">Cancel</Link>
			</form>
		);
	}
}

// Redux Form:
// - validate function returns an error object with field names as error keys
// - reduxForm arguments: 'config, mapStateToProps, mapDispatchToProps, mergeProps, options'
// - Wraps app form component in 'reduxForm' and returns a 'ConnectedForm' react component
// - 'ConnectedForm' react component provides helper objects for fields and submission mapped into props

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = "Enter title";
	}
	if (!values.categories) {
		errors.categories = "Enter categories";
	}
	if (!values.content) {
		errors.content = "Enter content";
	}
	return errors;
}

const formConfig = {
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
};

export default reduxForm(formConfig, null, { createPost })(PostsNew);