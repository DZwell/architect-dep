'use strict';

import './css/materialize.css';
import './css/style.css';
// import './js/lib/materialize';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Hero from './js/components/material-hero';
import Navbar from './js/components/material-navbar';
import Player from './js/components/architect-main';
import Footer from './js/components/material-footer';

const Main = () => (
  <main>
    <Hero/>
    <Player/>
    <Footer/>
  </main>
);

ReactDOM.render(<Main/>, document.querySelector('#root'));
