/**
 * search bar component
 */

// ES6: 
// - exports module default to React
// - also exports 'Component' property from React via object destructuring assignment syntax
import React, { Component } from 'react';

// React:
// - class based component inherits React.Component
// ES6: class
class SearchBar extends Component {
	// ES6: class constructor
	// React: initialise with props
	constructor(props) {
		super(props);

		// React:
		// - 'state' is a plain JS object exists on class based component instances
		// - only class based components can have state
		// - initialise state obj in constructor
		this.state = {
			term : '',
			placeholder: 'Type something...'
		}
	}
	
	// ES6: class method
	// React: class based component must contain 'render' method that returns react.element
	render() {
		// JSX:
		// - assign state value to 'value' prop makes 'input' a controlled component, React manages the rendering, not browser
		// - pass event handler method ref as html prop value
		return (
			<div className="search-bar">
				<input
					value={this.state.term}
					placeholder={this.state.placeholder}
					onChange={this.onInputChange.bind(this)}
					/>
			</div>
		)
	}

	// event handler method
	onInputChange(e) {
		const term = e.target.value;

		// React:
		// - should always use 'setState' to update state
		// - 'setState' informs React state changes, might or might not trigger render
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

// export 'SearchBar' component as default
export default SearchBar;