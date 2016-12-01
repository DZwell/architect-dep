'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _util_ from '../lib/utilities';

const Child = React.createClass({
  propTypes: {
    source : React.PropTypes.string.isRequired,
    title  : React.PropTypes.string
  },

  audioNode         : '',
  playHead          : '',
  timeline          : '',
  timelineWidth     : ''

  componentDidMount : function() {
    const that         = ReactDOM.findDOMNode(this).children[0].children[0].children[0];
    this.audioNode     = that.children[0];
    this.duration      = that.children[3];
    this.hover         = that.children[2].children[0];
    this.playButton    = that.children[1].children[0].children[0];
    this.playHead      = that.children[2].children[0].children[0];
    this.timeline      = that.children[2];
    this.timelineWidth = this.timeline.offsetWidth - this.playHead.offsetWidth;

    window.addEventListener('mouseup', this.mouseUp, false);
    this.audioNode.addEventListener('timeupdate', this.handlePlayhead, false);
    this.timeline.addEventListener('mouseover', this.handleHover, false);
  },

  play : function() {
    if (this.audioNode.paused) {
      this.audioNode.play();
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-pause';
    } else {
      this.audioNode.pause();
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-play';
    };
  },

  render : function() {
    return (
      <div>
        <div className="mosaic-player">
          <div className="mosaic-type-single">
            <div className="mosaic-gui mosaic-interface mosaic-player">
              <audio id={_util_.newId('audio-')} preload="auto" onDurationChange={this.returnDuration} onTimeUpdate={this.updateTime} loop={this.props.loop}>
                <source src={this.props.source}/>
              </audio>
              <ul className="mosaic-controls">
                <li className="play-button-container">
                  <a className="mosaic-play" onClick={this.play}>
                    <i className="fa fa-play"></i>
                  </a>
                </li>
              </ul>
              <div className="mosaic-progress" onMouseDown={this.mouseDown}>
                <div className="mosaic-seek-bar">
                  <div className="mosaic-play-bar" onMouseDown={this.mouseDown}></div>
                </div>
              </div>
              <div className="mosaic-time-holder">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <p>{this.props.desc}</p>
      </div>
    )
  }
});

export default Child;
