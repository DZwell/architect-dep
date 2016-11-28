'use strict';

import './css/style.css';
import './css/basic-player.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Mosaic from './js/components/basic-player';

const PlayerContainer = () => (
  <section>
    <div>
      <Mosaic
        hover={true}
        margin={false}
        playClass="fa fa-play"
        pauseClass="fa fa-pause"
        source="audio/1.wav"
      />
    </div>
  </section>
);

ReactDOM.render(<PlayerContainer/>, document.getElementById('root'));
