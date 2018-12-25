import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import { client } from '../Client';

class Logout extends Component {
  constructor(props) {
    super(props);

    // need to call this here due to render is redirect right away
    client.logout();
  }

  render() {
    return <Redirect to='/login' />;
  }
}

export default Logout;
