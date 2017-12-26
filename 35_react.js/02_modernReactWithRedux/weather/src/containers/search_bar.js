import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		// init component state
		this.state = {
			term: ''
		};

		// bind component event handlers requires 'this' context to component context
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		this.setState({
			term: e.target.value
		});
	}

	onFormSubmit(e) {
		e.preventDefault();
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

export default SearchBar;