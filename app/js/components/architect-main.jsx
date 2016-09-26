'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

const Architect = React.createClass({
  render : function() {
    return  (
      <section className="container">
        <div className="row">
          <div className="architect col s12">
            {/* VIDEO GOES HERE */}
            <h1 className="full-width">{this.props.title}</h1>
            <p className="full-width">{this.props.description}</p>
          </div>
        </div>
      </section>
    )
  }
});

export default Architect;
