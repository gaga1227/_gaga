/**
 * App
 */

// ES6: import JS modules
// libs
import React, { Component } from 'react'; // uses namespace under node_modules
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
// components
import SearchBar from './components/search_bar'; // use file reference
import VideoList from './components/video_list';

// ES6: 
// - 'const' declares a read only final var
// - needs to be initialised immediately
// - cannot be reassigned
const API_KEY = 'AIzaSyDERiwBdJI2c7SQ7-rz1dzqEouhnyY5B2g';

// React:
// - creates a Type or Class of a component
// - class component: can have its own states and lifecycle methods
class App extends Component {
	constructor(props) {
		super(props);

		// React: initialise component state
		this.state = {
			videos: []
		};

		// React: Start with a initial search and update state
		YTSearch({
			term: 'cat',
			key: API_KEY
		}, (videos) => {
			// ES6:
			// - can use 'this' here because lambda carries parent context
			// - use object literal shorthand when object key and value ref has same name
			this.setState({ videos }); // equals to 'this.setState({ videos: videos })'
			console.log('videos', videos);
		});
	}

	render() {
		// JSX: new syntax that produces HTML element function via React.createElement()
		// - use () to return multiline JSX template
		// - passing 'videos' array as value of 'videos' prop into 'VideoList'
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// React:
// - uses react-dom as renderer
// - always use component instance in ReactDom.render(), not component class
// - callback is optional
ReactDom.render(
	<App />, // component instance
	document.querySelector('.container'), // target root
	() => console.log('App Rendered!') // successful render callback
);