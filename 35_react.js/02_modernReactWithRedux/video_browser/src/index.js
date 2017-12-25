/**
 * App
 */

// ES6: import JS modules
// libs
import _ from 'lodash';
import React, { Component } from 'react'; // uses namespace under node_modules
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
// components
import SearchBar from './components/search_bar'; // use file reference
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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
			videos: [],
			selectedVideo: null
		};

		// React: Start with a initial search and update state
		this.videoSearch('cat');

		// event handlers
		// ES6:
		// - use lambda to make sure code is executed with correct 'this' context without binding
		this.onSearchTermChange = _.debounce(term => {this.videoSearch(term)}, 300);
		this.onVideoSelect = selectedVideo => this.setState({selectedVideo});
	}

	render() {
		// JSX: new syntax that produces HTML element function via React.createElement()
		// - use () to return multiline JSX template
		// - pass 'videos' array as value of 'videos' prop into 'VideoList'
		// - pass video item click handler to 'VideoList'
		return (
			<div>
				<SearchBar onSearchTermChange={this.onSearchTermChange} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
			</div>
		);
	}

	videoSearch(term) {
		YTSearch({
			term: term,
			key: API_KEY
		}, (videos) => {
			// ES6:
			// - can use 'this' here because lambda carries parent context
			// - use object literal shorthand when object key and value ref has same name
			this.setState({
				videos, // equals to 'videos: videos'
				selectedVideo: videos[0]
			});
			console.log('videos', videos);
		});
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