'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _util_ from '../lib/utilities';

const Mosaic = React.createClass({
  propTypes: {
    durationClass : React.PropTypes.string,
    hover         : React.PropTypes.bool,
    hoverClass    : React.PropTypes.string,
    loop          : React.PropTypes.bool,
    margin        : React.PropTypes.bool,
    playClass     : React.PropTypes.string,
    playheadClass : React.PropTypes.string,
    playerClass   : React.PropTypes.string,
    playerId      : React.PropTypes.string,
    pauseClass    : React.PropTypes.string,
    source        : React.PropTypes.string.isRequired,
    timelineClass : React.PropTypes.string,
    title         : React.PropTypes.string,
    titleClass    : React.PropTypes.string
  },

  scrubberClicked : false,
  duration        : '',
  audioNode       : '',
  playButton      : '',
  playHead        : '',
  timeline        : '',
  timelineWidth   : '',
  sourceDuration  : '',

  getDefaultProps : function() {
    return {
      durationClass : 'mosaic-duration',
      hover         : false,
      hoverClass    : 'mosaic-hover',
      loop          : false,
      margin        : false,
      playClass     : 'mosaic-play-button',
      playheadClass : 'mosaic-playhead',
      playerClass   : 'mosaic-player',
      playerId      : 'mosaic-',
      pauseClass    : 'mosaic-pause-button',
      timelineClass : 'mosaic-timeline',
      titleClass    : 'mosaic-title'
    }
  },

  componentDidMount : function() {
    const that         = ReactDOM.findDOMNode(this);
    this.audioNode     = that.children[0];
    this.duration      = that.children[1].children[1].children[2];
    this.hover         = that.children[1].children[1].children[0];
    this.playButton    = that.children[1].children[0];
    this.playHead      = that.children[1].children[1].children[1];
    this.timeline      = that.children[1].children[1];
    this.timelineWidth = this.timeline.offsetWidth - this.playHead.offsetWidth;

    window.addEventListener('mouseup', this.mouseUp, false);
    this.audioNode.addEventListener('timeupdate', this.handlePlayhead, false);
    this.timeline.addEventListener('mouseover', this.handleHover, false);
  },

  addHover : function(e) {
    let positionOffset = _util_.handleOffsetParent(this.timeline);
    let newMargLeft = e.pageX - positionOffset;

    if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
      this.hover.style.width = newMargLeft + 'px';
    };

    if (newMargLeft < 0) {
      this.hover.style.width = '0px';
    };

    if (newMargLeft > this.timelineWidth) {
      this.hover.style.width = this.timelineWidth + 'px';
    };
  },

  clickPercent : function(e) {
    let positionOffset = _util_.handleOffsetParent(this.timeline);
    return (e.pageX - positionOffset) / this.timelineWidth;
  },

  returnDuration : function() {
    this.sourceDuration = this.audioNode.duration;
    this.duration.innerHTML = _util_.handleTime(this.audioNode.duration);
    this.updateTime();
  },

  play : function() {
    if (this.audioNode.paused) {
      this.audioNode.play();
      this.playButton.classList = '';
      this.playButton.classList = this.props.pauseClass;
    } else {
      this.audioNode.pause();
      this.playButton.classList = '';
      this.playButton.classList = this.props.playClass;
    };
  },

  updateTime : function() {
    this.duration.innerHTML = _util_.handleTime(this.audioNode.currentTime) + ' / ' + _util_.handleTime(this.audioNode.duration);

    if (this.audioNode.currentTime === this.sourceDuration) {
      this.playButton.classList = '';
      this.playButton.classList = this.props.playClass;
    };
  },

  handleHover : function() {
    if (this.props.hover) {
      this.timeline.addEventListener('mousemove', this.addHover, false);
      this.timeline.addEventListener('mouseout', this.removeHover, false);
    };
  },

  handlePlayhead : function() {
    let playPercent = this.timelineWidth * (this.audioNode.currentTime / this.audioNode.duration);

    if (this.props.margin) {
      this.playHead.style.marginLeft = playPercent + 'px';
    } else {
      this.playHead.style.paddingLeft = playPercent + 'px';
    };
  },

  mouseDown : function() {
    this.scrubberClicked = true;
    window.addEventListener('mousemove', this.moveplayhead, true);
    this.audioNode.removeEventListener('timeupdate', this.handlePlayhead, false);
  },

  mouseUp : function(e) {
    if (this.scrubberClicked === false) {
      return;
    };

    this.moveplayhead(e);
    window.removeEventListener('mousemove', this.moveplayhead, true);
    this.audioNode.currentTime = this.audioNode.duration * this.clickPercent(e);
    this.audioNode.addEventListener('timeupdate', this.handlePlayhead, false);
    this.scrubberClicked = false;
  },

  moveplayhead : function(e) {
    let positionOffset = _util_.handleOffsetParent(this.timeline);
    let newMargLeft = e.pageX - positionOffset;
    let n;

    if (this.props.margin) {
      n = this.playHead.style.paddingLeft;
    } else {
      n = this.playHead.style.width;
    };

    if (newMargLeft >= 0 && newMargLeft <= this.timelineWidth) {
      n = newMargLeft + 'px';
    };

    if (newMargLeft < 0) {
      n = '0px';
    };

    if (newMargLeft > this.timelineWidth) {
      n = this.timelineWidth + 'px';
    };
  },

  removeHover : function() {
    this.hover.style.width = '0px';
  },

  render : function() {
    return (
      <div className="mosaic-audio">
        <div className="mosaic-type-single">
          <div className="mosaic-gui mosaic-interface mosaic-player">
            <audio preload="auto">
              <source src="audio/1.wav"/>
            </audio>
            <ul className="mosaic-controls">
              <li>
                <a className="mosaic-play">
                  <i className="fa fa-play"></i>
                </a>
              </li>
            </ul>
            <div className="mosaic-progress">
              <div className="mosaic-seek-bar">
                <div className="mosaic-play-bar"></div>
              </div>
            </div>
            <div className="mosaic-title">
              <ul>
                <li>Winter</li>
              </ul>
            </div>
            <div className="mosaic-time-holder">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Mosaic;
