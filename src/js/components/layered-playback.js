'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _util_ from '../lib/utilities';

const Layered = React.createClass({
  propTypes: {
    desc   : React.PropTypes.string.isRequired,
    layer1 : React.PropTypes.string.isRequired,
    layer2 : React.PropTypes.string.isRequired
  },

  scrubberClicked   : false,
  duration          : '',
  audioNode         : '',
  playButton        : '',
  playHead          : '',
  timeline          : '',
  timelineWidth     : '',
  sourceDuration    : '',

  render : function() {
    return (

    )
  }
});
