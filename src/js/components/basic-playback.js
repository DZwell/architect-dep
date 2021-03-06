'use strict';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import _util_ from '../lib/utilities';

const Basic = React.createClass({
  propTypes: {
    desc            : React.PropTypes.string.isRequired,
    source          : React.PropTypes.string.isRequired
  },

  scrubberClicked   : false,
  duration          : '',
  audioNode         : '',
  playButton        : '',
  playHead          : '',
  timeline          : '',
  timelineWidth     : '',
  sourceDuration    : '',

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
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-pause';
    } else {
      this.audioNode.pause();
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-play';
    };
  },

  updateTime : function() {
    this.duration.innerHTML = _util_.handleTime(this.audioNode.currentTime) + ' / ' + _util_.handleTime(this.audioNode.duration);

    if (this.audioNode.currentTime === this.sourceDuration) {
      this.playButton.children[0].classList = '';
      this.playButton.children[0].classList = 'fa fa-play';
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
    let n = this.playHead.style.width;

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

export default Basic;
