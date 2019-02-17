import React, { Component } from "react";
import PortfolioCards from "./PortfolioCards";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Navbar2 from "./NavBar2";
import ContactForm from "./ContactF";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <div className="cd-scrolling-bg cd-scrolling-bg--color-4">
          <AboutMe />
        </div>
        <div
          className="cd-scrolling-bg cd-scrolling-bg--color-3"
          
        >
          
            <div>
              <h3 className="mt-3 subTitleFont" style={{textAlign:"center"}}>Portfolio</h3>
              {/* <div>
                <Icon
                  name="github"
                  
                  target="_blank"
                >
                  GitHub Projects Repositories |
                </Icon>
                <Icon name="list ul" target="_blank">
                  See all projects
                </Icon>
              </div> */}
              <hr />
              <Projects />
            </div>
          </div>
      
       
          <div className="cd-scrolling-bg__content">
            <ContactForm />
          </div>
        
      </div>
    );
  }
}

export default MainContainer;
