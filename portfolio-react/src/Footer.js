import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);

const Navbar = props => {
  return (
    <div className="ui inverted gray vertical footer segment">
      <div className="ui center aligned container">
        <h4 className="ui inverted header">
          &copy; Copyright 2019 | All rights reserved | Aime
        </h4>
        <a href="https://github.com/aime77" target="_blank">
          <i className="fa fa-github icon big fa-fw" />
        </a>
        &nbsp; Github
        <a href="https://www.linkedin.com/" target="_blank">
          <i className="linkedin square icon big" />
        </a>
        &nbsp; LinkedIn
        <a href="mailto:aime.urquieta@outlook.com">
          <i className="fa fa-envelope icon big fa-fw" />
        </a>
        &nbsp; E-Mail
      </div>
    </div>
  );
};
export default Navbar;
