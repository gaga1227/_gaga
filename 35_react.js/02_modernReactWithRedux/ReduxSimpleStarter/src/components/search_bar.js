/**
 * search bar component
 */

// ES6: exports module default to React and also exports 'Component' property from React
import React, { Component } from 'react';

// React:
// - class based component inherits React.Component
// ES6: class
class SearchBar extends Component {
	// ES6: class method
	// React: class based component must contain 'render' method that returns react.element
	render() {
		return <input />;
	}
}

// export 'SearchBar' component as default
export default SearchBar;