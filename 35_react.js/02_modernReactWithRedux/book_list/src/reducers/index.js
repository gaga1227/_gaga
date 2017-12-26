import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// Redux:
// - combine reducers data by map them into global state object
// - each reducer manages a piece of state in app
const rootReducer = combineReducers({
	books: BookReducer,
	activeBook: ActiveBookReducer
});

export default rootReducer;
