/* eslint-disable no-use-before-define */
export const FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST';
function fetchPeopleRequest () {
  return {type: FETCH_PEOPLE_REQUEST};
}

export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
// action creator functions, returns object of action type
// plus data for the reducer to update data store
function fetchPeopleSuccess (people) {
  return {type: FETCH_PEOPLE_SUCCESS, people};
}

export const SAVE_PEOPLE_REQUEST = 'SAVE_PEOPLE_REQUEST';
function savePeopleRequest () {
  return {type: SAVE_PEOPLE_REQUEST};
}

export const SAVE_PEOPLE_FAILURE = 'SAVE_PEOPLE_FAILURE';
function savePeopleFailure (error) {
  return {type: SAVE_PEOPLE_FAILURE, error};
}

export const SAVE_PEOPLE_SUCCESS = 'SAVE_PEOPLE_SUCCESS';
function savePeopleSuccess (people) {
  return {type: SAVE_PEOPLE_SUCCESS, people};
}

// async action creators, returns function that dispatch actions
// rather than just action object (action type plus data)
// not supported bu redux by default, need to use middleware wrapper
export function fetchPeople () {
  return function (dispatch) {
    // to update fetching state, dispatch action object
    dispatch(fetchPeopleRequest());
    // update state when async op complete
    apiClient.loadPeople().then((people) => {
      dispatch(fetchPeopleSuccess(people)); // dispatch action object
    });
  };
}

export function savePeople (people) {
  return function (dispatch) {
    // to update fetching state, dispatch action object
    dispatch(savePeopleRequest());
    // update state when async op complete
    apiClient.savePeople(people)
      .then((resp) => { dispatch(savePeopleSuccess(people)); }) // dispatch action object
      .catch((err) => { dispatch(savePeopleFailure(err)); }); // dispatch action object
  };
}

// async calls
const apiClient = {
  loadPeople: function () {
    return {
      then: function (cb) {
        setTimeout( () => {
          cb(JSON.parse(localStorage.people || '[]'));
        }, 1000);
      }
    };
  },

  savePeople: function (people) {
    const success = !!(this.count++ % 2);

    return new Promise(function (resolve, reject) {
      setTimeout( () => {
        if (!success) return reject({success});

        localStorage.people = JSON.stringify(people);
        resolve({success});
      }, 1000);
    });
  },

  count: 1
};
