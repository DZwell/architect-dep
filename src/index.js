'use strict';

import './css/style.css';
import './css/basic-player.css';
import './js/lib/player-list-select';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Basic from './js/components/basic-playback';
import examples from './js/lib/example-data';

const PlayerContainer = () => (
  <div>
    <div>
      <Basic
        desc={examples[0].desc}
        source={examples[0].src}
      />
    </div>
  </div>
);

ReactDOM.render(<PlayerContainer/>, document.getElementById('root'));
