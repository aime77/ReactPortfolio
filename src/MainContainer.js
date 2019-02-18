import React, { Component } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import ContactForm from "./ContactF";
import { Icon, Container, Grid, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <div className="cd-scrolling-bg cd-scrolling-bg--color-4"  id="home">
          <AboutMe />
        </div>
        <div
          className="cd-scrolling-bg cd-scrolling-bg--color-3"
          
        >
          
            <div id="portfolio">
              <h3 className="mt-3 subTitleFont"  style={{textAlign:"center"}}>Portfolio</h3>
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
              <Container>
              <Card.Group itemsPerRow={2} >
              <Projects />
              </Card.Group>
              </Container>
            </div>
          </div>
      
       
          <div className="cd-scrolling-bg__content" id="contactMe">
            <ContactForm />
          </div>
        
      </div>
    );
  }
}

export default MainContainer;
