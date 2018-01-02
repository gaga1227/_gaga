import axios from 'axios';

// API constants
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=justneedtobesomethingunique';

// action type constants
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// Get blog posts list
export function fetchPosts() {
	const PATH = '/posts';
	const request = axios.get(`${ROOT_URL}${PATH}${API_KEY}`); // returns a promise here

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// create new blog post
export function createPost(formData) {
	const PATH = '/posts';
	const request = axios.post(`${ROOT_URL}${PATH}${API_KEY}`, formData); // returns a promise here

	return {
		type: CREATE_POST,
		payload: request
	};
}