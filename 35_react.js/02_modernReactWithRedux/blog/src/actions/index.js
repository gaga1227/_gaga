import axios from 'axios';

// API constants
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=justneedtobesomethingunique';

// action type constants
export const FETCH_POSTS = 'FETCH_POSTS';

// Get blog posts list
export function fetchPosts() {
	const PATH = '/posts';
	const request = axios.get(`${ROOT_URL}${PATH}${API_KEY}`); // returns a promise here

	return {
		type: FETCH_POSTS,
		payload: request
	};
}