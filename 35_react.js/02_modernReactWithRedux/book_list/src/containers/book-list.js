import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

// React class component (View)
class BookList extends Component {
	// React:
	// - use unique value as item keys in a list
	// - call mapped action creator function on click
	renderList() {
		const bookListElements = this.props.books.map(book => {
			return (
				<li
					key={book.title}
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}>
					{book.title}
				</li>
			);
		});
		return bookListElements;
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// Redux:
// - mapping function from Redux state to props
// - returns an object to be merged to component props object
function mapStateToProps(state) {
	// map state data to props keys
	return {
		books: state.books
	};
}

// Redux:
// - mapping function from Redux dispatch to props
// - returns an object to be merged to component props object
function mapDispatchToProps(dispatch) {
	// map action creators to props keys
	// action creator will be wrapped into dispatch call
	return bindActionCreators({
		selectBook: selectBook
	}, dispatch);
}

// Redux:
// - container / Smart Component is a component has direct connection to redux
// - returns 'Connect': a special React.component (container) that wraps around original component (BookList)
// - container has state data reference in props
// - container has dispatch function reference in props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);