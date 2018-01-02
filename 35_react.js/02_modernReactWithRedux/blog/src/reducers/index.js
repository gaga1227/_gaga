import { combineReducers } from 'redux';

// Redux form reducer
import { reducer as formReducer } from 'redux-form';

// App reducers
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
	posts: PostsReducer,
	form: formReducer // create new post reducer
});

export default rootReducer;
