'use strict';

import './css/style.css';
import './css/basic-player.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AudioPlayer from './js/components/basic-player';

const PlayerContainer = () => (
  <div>
    <div>
      <AudioPlayer
        source="audio/1.wav"
      />
    </div>
  </div>
);

ReactDOM.render(<PlayerContainer/>, document.getElementById('root'));
