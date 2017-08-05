/**
 * App
 */

// ES6: import JS modules
// libs
import React from 'react'; // uses namespace under node_modules
import ReactDom from 'react-dom';
// components
import SearchBar from './components/search_bar'; // use file reference

// ES6: 
// - 'const' declares a read only final var
// - needs to be initialised immediately
// - cannot be reassigned
const API_KEY = 'AIzaSyDERiwBdJI2c7SQ7-rz1dzqEouhnyY5B2g';

// React:
// - creates a Type or Class of a component
// - functional component: one function that returns react.element
const App = () => {
	// ES6: uses lambda to replace anonymouse function
	// JSX: new syntax that produces HTML element via React.createElement()
	// - use () to return multiline JSX template
	const reactElement = (
		<div>
			<SearchBar />
		</div>
	);
	return reactElement;
};

// React:
// - uses react-dom as renderer
// - always use component instance in ReactDom.render(), not component class
// - callback is optional
ReactDom.render(
	<App />, // component instance
	document.querySelector('.container'), // target root
	() => console.log('App Rendered!')); // successful render callback