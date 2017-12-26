import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// init component state
		this.state = {
			term: ''
		};

		// bind component event handlers requires 'this' context to component context
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({
			term: e.target.value
		});
	}

	onFormSubmit(e) {
		e.preventDefault();

		// call mapped action creator in props
		this.props.fetchWeather(this.state.term);
		// clear search term
		this.setState({
			term: ''
		});
	}

	render() {
		return (
			<form
				className="input-group"
				onSubmit={this.onFormSubmit}
			>
				<input
					type="text"
					placeholder="Get forecast for a city"
					required
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

// Redux:
// - mapping function from Redux dispatch to props
// - returns an object to be merged to component props object
function mapDispatchToProps(dispatch) {
	// map action creators to props keys, uses ES6 object literal short hand here
	// action creator will be wrapped into dispatch call
	return bindActionCreators({ fetchWeather }, dispatch);
}

// Redux:
// - use 'null' map states to props function, this component doesn't care Redux state
export default connect(null, mapDispatchToProps)(SearchBar);