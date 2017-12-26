import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducer_weather';

// Redux:
// - combine reducers data by map them into global state object
// - each reducer manages a piece of state in app
const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;
