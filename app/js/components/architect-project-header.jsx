'use strict';

import React from 'react';

const ArchitectProjectHeader = React.createClass({
  render : function () {
    return (
      <section className="container architect-project-header">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <p>{this.props.description}</p>
      </section>
    )
  }
});

export default ArchitectProjectHeader;
