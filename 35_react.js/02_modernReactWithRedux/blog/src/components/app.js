import React, { Component } from 'react';

/**
 * React Router:
 * - make sure 'children' is render in parent route components
 */
export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				Common header...
				{this.props.children}
				Common footer...
			</div>
		);
	}
}
