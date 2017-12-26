import axios from 'axios';

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// export action type constants
export const FETCH_WEATHER = 'FETCH_WEATHER';

// define and export API call action creator
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},au`;
	const request = axios.get(url); // returns a promise here

	// Redux:
	// - pass promise as Redux action payload
	// - middleware (redux-promise) intercepts any dispatch with promise payload
	// - middleware (redux-promise) waits for the promise and replaces dispatch with a new dispatch resolved data as payload
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}