'use strict';

import React from 'react';

const Hero = React.createClass({
  render : function() {
    return (
      <section className="hero">
        <div className="container container-wide">
          <div className="row">
            <div className="col s5">
              <h1 className="brand-logo">Architect<br/>
                <span className="subtitle">Simple &amp; shareable dynamic audio prototyping.</span>
              </h1>
              <h2>
                Simple &amp; shareable dynamic audio prototyping.  Stop struggling with Wordpress themes.
                Create a simple HTML website without thinking about content editing.
                Have content editing layer for free <b>without spending a minute</b>.
              </h2>
            </div>
            <div className="col s7"></div>
          </div>
        </div>
      </section>
    )
  }
});

export default Hero;
