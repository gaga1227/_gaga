import { FETCH_POSTS } from '../actions/index'
import { FETCH_POST } from '../actions/index'
import { CLEAR_POST } from '../actions/index'

const INITIAL_STATE = {
	all: [], // a list of blog posts
	post: null // current selected post
};

// Redux:
// - this reducer handles multiple action type from multiple action creators
// - each state update keeps previous state with spread operator
// - based on action type, it updates only specific part of the app state
// - this reducer does not handle 'DELETE_POST' action type due to no need
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return {
				...state,
				all: [...action.payload.data],
			};
		case FETCH_POST:
			return {
				...state,
				post: action.payload.data
			};
		case CLEAR_POST:
			return {
				...state,
				post: null
			};
		default:
			return state;
	}
};