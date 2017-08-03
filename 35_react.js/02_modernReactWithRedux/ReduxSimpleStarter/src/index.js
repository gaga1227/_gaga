// ES6: import JS modules
import React from "react";
import ReactDom from "react-dom";

// ES6: 
// - 'const' declares a read only final var
// - needs to be initialised immediately
// - cannot be reassigned
// - uses lambda to replace anonymouse function
// React:
// - creates a Type or Class of a component
const App = () => {
	// JSX: new syntax that produces HTML element via React.createElement()
	return <div>Hi!</div>;
};

// React:
// - uses react-dom as renderer
// - always use component instance in ReactDom.render(), not component class
// - callback is optional
ReactDom.render(<App />, document.querySelector(".container"), () => console.log("App Rendered!"));