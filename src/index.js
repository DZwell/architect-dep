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
        desc="This is the basic player. This is your world, whatever makes you happy you can put in it. Go crazy. It's almost like something out of a fairytale book. Let's put some happy trees and bushes back in here. Brown is such a nice color. Clouds are free. They just float around the sky all day and have fun. Just pretend you are a whisper floating across a mountain."
        source="audio/1.wav"
      />
    </div>
  </div>
);

ReactDOM.render(<PlayerContainer/>, document.getElementById('root'));
