import { FETCH_POSTS } from '../actions/index'

const INITIAL_STATE = {
	all: [], // a list of blog posts
	post: null // current selected post
};

export default function(state = INITIAL_STATE, action) {
	// return state data based on action type
	switch(action.type) {
		case FETCH_POSTS:
			return {
				// ...state,
				all: [...action.payload.data],
			};
		default:
			return state;
	}
};