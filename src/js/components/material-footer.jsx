'use strict';

import React from 'react';

const Footer = React.createClass({
  render : function() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container text-centered">
          © 2016 Made by <a href="https://github.com/mskalandunas" target="_blank"><i className="fa fa-github"></i> Mike</a>.
          </div>
        </div>
      </footer>
    )
  }
});

export default Footer;
