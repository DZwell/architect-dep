'use strict';

import React from 'react';

const Navbar = React.createClass({
  render : function() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-background">
          <div className="nav-wrapper">
            <div className="container">
              <a href="." className="brand-logo">Л r c h i t e c t</a>
              <ul className="right hide-on-med-and-down">
                <li><a href=".">About</a></li>
                <li><a href=".">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
});

export default Navbar;
