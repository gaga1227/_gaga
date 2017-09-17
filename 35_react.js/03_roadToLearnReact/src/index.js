import React from 'react';
import ReactDOM from 'react-dom';
import AppChap01 from './chap01/AppChap01';
import AppChap02 from './chap02/AppChap02B';
import AppChap03 from './chap03/AppChap03';
import AppChap04 from './chap04/AppChap04';
import './style.css';

ReactDOM.render(
  <div>
    <AppChap01 />
    <AppChap02 />
    <AppChap03 />
    <AppChap04 />
  </div>,
  document.getElementById('root')
);
