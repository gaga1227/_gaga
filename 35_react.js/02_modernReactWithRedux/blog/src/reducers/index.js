import { combineReducers } from 'redux';

// reducers
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	posts: PostsReducer
});

export default rootReducer;
