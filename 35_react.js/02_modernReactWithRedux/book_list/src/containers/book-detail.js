import React, { Component } from 'react';
import { connect } from 'react-redux';

// React class component (View)
class BookDetail extends Component {
	renderDetail() {
		const activeBook = this.props.activeBook;
		let bookDetailElement;

		// props.activeBook can be 'null' from active book reducer, requires conditional rendering
		if (activeBook) {
			bookDetailElement = (
				<div>
					<h3>Details for:</h3>
					<p>Title: {activeBook.title}</p>
					<p>Pages: {activeBook.pages}</p>
				</div>
			);
		} else {
			bookDetailElement = (
				<div>
					<h3>Please select a book!</h3>
				</div>
			);
		}

		return bookDetailElement;
	}

	render() {
		return this.renderDetail();
	}
}

// Redux:
// - mapping function from Redux state to props
// - returns an object to be merged to component props object
function mapStateToProps(state) {
	// map state data to props keys
	return {
		activeBook: state.activeBook
	};
}

// Redux:
// - container / Smart Component is a component has direct connection to redux
// - returns 'Connect': a special React.component (container) that wraps around original component (BookDetail)
// - container has state data reference in props
export default connect(mapStateToProps)(BookDetail);