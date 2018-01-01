import { combineReducers } from 'redux';

// reducers
import PostsReducer from './reducer_posts';
import NewPostReducer from './reducer_posts_new';

const rootReducer = combineReducers({
	posts: PostsReducer,
	addPost: NewPostReducer
});

export default rootReducer;
