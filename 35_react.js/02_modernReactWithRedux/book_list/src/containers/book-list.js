import React, { Component } from 'react';
import { connect } from 'react-redux';

// React class component (View)
class BookList extends Component {
	// React:
	// - use unique value as item keys in a list
	renderList() {
		const bookElements = this.props.books.map(book => {
			return <li key={book.title} className="list-group-item">{book.title}</li>;
		});
		return bookElements;
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// Mapping function from state to props (App State -> Component View Model)
function mapStateToProps(state) {
	// returns an object to be merged to component props object
	return {
		books: state.books
	};
}

// Container / Smart Component is a component has direct connection to redux
// Uses 'react-redux.connect' to combine state mapping function with react component into container
// returns 'Connect': a special React.component that wraps around original component (BookList) with props mapped from state
export default connect(mapStateToProps)(BookList);