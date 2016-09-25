'use strict';

import './css/materialize.css';
import './css/style.css';
// import './js/lib/materialize';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Footer from './js/components/material-footer';

const Main = () => (
  <Footer/>
);

ReactDOM.render(<Main/>, document.querySelector('#root'));
