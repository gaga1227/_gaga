import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  SAVE_PEOPLE_REQUEST,
  SAVE_PEOPLE_FAILURE,
  SAVE_PEOPLE_SUCCESS
} from './11-redux-actions.js'; // action types for different reducers

// state to reduce from
const initialState = {
  people: [],
  isLoading: false,
  saveStatus: 'READY',
  person: {
    name: '',
    email: '',
    course: null,
    department: null
  },
};

// single reducer for all action types
export function reducer (state = initialState, action) {
  switch (action.type) {

  // start loading people, update loading state only
  case FETCH_PEOPLE_REQUEST:
    return Object.assign({}, state, {
      isLoading: true
    });

  // done loading people, update people list
  case FETCH_PEOPLE_SUCCESS:
    return Object.assign({}, state, {
      people: action.people, // get people data from action object
      isLoading: false // set loading completed
    });

  // start saving people list, update saving state only
  case SAVE_PEOPLE_REQUEST:
    return Object.assign({}, state, {
      saveStatus: 'SAVING'
    });

  // error on saving people, update error state only
  case SAVE_PEOPLE_FAILURE:
    return Object.assign({}, state, {
      saveStatus: 'ERROR'
    });

  // done saving people, update people list plus reset others
  case SAVE_PEOPLE_SUCCESS:
    return Object.assign({}, state, {
      people: action.people,
      person: {
        name: '',
        email: '',
        course: null,
        department: null
      },
      saveStatus: 'SUCCESS' // update saving state as well
    });

  // default, passing through current state
  default:
    return state;
  }
}
