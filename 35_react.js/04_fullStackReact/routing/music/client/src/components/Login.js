/* eslint-disable no-constant-condition */
import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { client } from '../Client';

class Login extends Component {
  state = {
    loginInProgress: false,
    shouldRedirect: false
  };

  performLogin = () => {
    this.setState({
      loginInProgress: true
    });

    client.login()
      .then(() => {
        // need to update here with 'shouldRedirect', once redirected, component is unmounted
        // and cannot update state anymore
        this.setState({
          loginInProgress: false,
          shouldRedirect: true
        });
      });
  };

  redirectPath() {
    // location state has any passed in state from redirect
    const locationState = this.props.location.state;
    // check is any from path is passed in from state
    const pathname = locationState && locationState.from && locationState.from.pathname;
    return pathname || '/albums';
  }

  render() {
    // redirect to logged in route when logged in
    if (this.state.shouldRedirect) {
      return <Redirect to={this.redirectPath()} />
    }
    // otherwise render login UI
    else {
      return (
        <div className='ui one column centered grid'>
          <div className='ten wide column'>
            <div
              className='ui raised very padded text container segment'
              style={{ textAlign: 'center' }}
            >
              <h2 className='ui green header'>
                Fullstack Music
              </h2>
              {
                this.state.loginInProgress
                  ? <div className='ui active centered inline loader' />
                  : (
                    <div
                      className='ui large green submit button'
                      onClick={this.performLogin}
                    >
                      Login
                    </div>
                  )
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
