import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
	// return state data based on action type
	switch(action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state]; // accumulated list of searched cities, in a new array
		default:
			return state;
	}
}