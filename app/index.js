'use strict';

import './css/materialize.css';
import './css/style.css';
import './css/architect.css';
// import './js/lib/materialize';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Hero from './js/components/material-hero';
import Navbar from './js/components/material-navbar';
import ArchitectProjectHeader from './js/components/architect-project-header';
import Player from './js/components/architect-main';
import Footer from './js/components/material-footer';

const Main = () => (
  <main>
    {/*<Hero/>*/}
    <ArchitectProjectHeader
      title="Ori &amp; the Blind Forest"
      subtitle="Musical themes of the White Guardian Spirit"
      description="The voice of the Spirit Tree in the forest of Nibel narrates the story of when Ori fell from the tree during a storm as a newborn and was adopted by a creature named Naru, who raised Ori as her own. A cataclysmic event soon makes the forest and its food supply wither, and Naru dies. Newly orphaned, Ori was left to explore the forest on his own."
    />
    <Player
      title="Exploring the Sunken Glades"
      description="The forest of Nibel is dying. After a powerful storm sets a series of devastating events in motion, an unlikely hero must journey to find his courage and confront a dark nemesis to save his home. “Ori and the Blind Forest” tells the tale of a young orphan destined for heroics."
      video="https://www.youtube.com/watch?v=_yZo9wSfIYY"
    />
    <Footer/>
  </main>
);

ReactDOM.render(<Main/>, document.querySelector('#root'));
