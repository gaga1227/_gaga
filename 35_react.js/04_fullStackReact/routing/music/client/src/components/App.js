import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';

import '../styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      <Route path='/albums' component={AlbumsContainer}/>
      {/* need to use exact match here for root */}
      <Route exact path='/' render={() => (
        <Redirect to='/albums'/>
      )}/>
    </div>
  </div>
);

export default App;
