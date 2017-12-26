// Redux:
// - reducer function takes two params, current state and action object
// - 'state' is not app state, it is only the state reducer is responsible for
// - 'action' is the object returned by action creator
// - reducer cannot return undefined state, requires default value (used null here)
// - must return new state object, current state cannot be mutated

export default function(state = null, action) {
	// return state data based on action type
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload; // selected book data object
		default:
			return state;
	}
};