import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
	// renders individual city data
	static renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;

		// uses city name as element key
		return (
			<tr key={name}>
				<td>{name}</td>
				<td>{temps}</td>
				<td>{pressures}</td>
				<td>{humidities}</td>
			</tr>
		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>{this.props.weather.map(WeatherList.renderWeather)}</tbody>
			</table>
		);
	}
}

// Redux:
// - mapping function from Redux state to props
// - returns an object to be merged to component props object
function mapStateToProps({ weather }) {
	// map state data to props keys
	return { weather };
}

// Redux:
// - use 'null' mapDispatchToProps function, this component doesn't have actions
export default connect(mapStateToProps, null)(WeatherList);