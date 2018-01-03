import axios from 'axios';

// API constants
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=justneedtobesomethingunique';

// action type constants
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const CLEAR_POST = 'CLEAR_POST';

// Get blog posts list
export function fetchPosts() {
	const PATH = '/posts';
	const request = axios.get(`${ROOT_URL}${PATH}${API_KEY}`); // returns a promise here

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

// Get single blog post
export function fetchPost(id) {
	const PATH = `/posts/${id}`;
	const request = axios.get(`${ROOT_URL}${PATH}${API_KEY}`); // returns a promise here

	return {
		type: FETCH_POST,
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

// delete blog post
export function deletePost(id) {
	const PATH = `/posts/${id}`;
	const request = axios.delete(`${ROOT_URL}${PATH}${API_KEY}`); // returns a promise here

	return {
		type: DELETE_POST,
		payload: request
	};
}

// Clear current post state in app
export function clearPost() {
	return {
		type: CLEAR_POST,
		payload: {}
	};
}