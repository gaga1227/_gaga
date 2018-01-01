import React, { Component } from 'react';

/**
 * React Router:
 * - make sure 'children' is render in parent route components
 */
export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<div className="header text-xs-center">Common Header</div>
				{this.props.children}
				<div className="footer text-xs-center">Common Footer</div>
			</div>
		);
	}
}
