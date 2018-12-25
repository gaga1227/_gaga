import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Login from './Login';
import Logout from './Logout';
import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';
import PrivateRoute from './PrivateRoute';

import '../styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Switch>
        {/* need to use exact match here for root */}
        <Route exact path='/' render={() => (
          <Redirect to='/albums'/>
        )}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        <PrivateRoute path='/albums' component={AlbumsContainer}/>
      </Switch>
    </div>
  </div>
);

export default App;
