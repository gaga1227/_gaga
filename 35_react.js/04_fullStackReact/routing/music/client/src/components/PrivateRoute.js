import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { client } from '../Client';

const PrivateRoute = ({component, ...rest}) => {
  const isLoggedIn = client.isLoggedIn();

  // high order component should always render a component
  // here is <Route> component
  return <Route
    {...rest}
    render={props => (
      isLoggedIn
        ? (
          // render whatever component with whatever props passed from parent
          React.createElement(component, props)
        )
        : (
          // render redirect as intercept
          <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location // pass original requested location before auth to 'Login'
              }
            }
          } />
        )
    )} />;
};

export default PrivateRoute;
