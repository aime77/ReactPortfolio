import React from "react";

const Navbar = props => {
  return (
    <div className="ui inverted green vertical footer segment">
      <div className="ui center aligned container">
        <h4 className="ui inverted header">
          &copy; Copyright 2019 | All rights reserved | Aime
        </h4>
        <a href="https://www.facebook.com/">
          <i className="facebook square icon big" />
        </a>
        <a href="https://twitter.com/">
          <i className="twitter square icon big" />
        </a>
        <a href="https://www.linkedin.com/">
          <i className="linkedin square icon big" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
