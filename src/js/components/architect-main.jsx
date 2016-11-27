'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import _util_ from '../lib/utilities';

const Architect = React.createClass({
  render : function() {
    return  (
      <section className="container">
        <div className="row">
          <div className="architect col s12">
            <div className="video-container">
              <iframe width="853" height="480" src={_util_.handleURL(this.props.video)} frameBorder="0"></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="architect col s7">
          </div>
          <div className="architect col s5">
            <h1 className="full-width">{this.props.title}</h1>
            <p className="full-width">{this.props.description}</p>
          </div>
        </div>
      </section>
    )
  }
});

export default Architect;
