import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './11-redux-reducer.js';
import { fetchPeople, savePeople } from './11-redux-actions.js'; // async action creators

// redux store with middleware
// holds states object and how to update states, hence called store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// react component to connect with store
// typical react component
const Form = require('./11-redux-form.js');

// new HOC of form component connected with redux store
const ReduxForm = connect(mapStateToProps, mapDispatchToProps)(Form);

module.exports = class extends React.Component {
  static displayName = "11-redux-app";

  componentWillMount() {
    store.dispatch(fetchPeople()); // dispatch dispatching functions, only works with middleware
  }

  render() {
    return (
      <Provider store={store}>
        <ReduxForm />
      </Provider>
    );
  }
};

// mapper to map store state to props for connected component
function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    fields: state.person,
    people: state.people,
    saveStatus: state.saveStatus,
  };
}

// mapper to map dispatch to prop event handlers for connected component
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (people) => {
      dispatch(savePeople(people));
    },
  };
}
