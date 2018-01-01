import { ADD_POSTS } from '../actions/index'

export default function(state = {}, action) {
	// return state data based on action type
	switch(action.type) {
		case ADD_POSTS:
			return action.payload;
		default:
			return state;
	}
};