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
        <a href="https://github.com/aime77">
        
        <i className="github icon big"></i>
        </a>
        Github&nbsp;  
        <a href="https://www.linkedin.com/">
          <i className="linkedin square icon big" />
        </a>
        LinkedIn&nbsp; 
        <a href="mailto:aime.urquieta@outlook.com">
        <i className="envelope icon big"></i>
        </a>
        E-Mail&nbsp; 
      </div>
    </div>
  );
};
export default Navbar;
