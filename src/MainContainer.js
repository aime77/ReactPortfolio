import React, { Component } from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import ContactForm from "./ContactF";
import { Container, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="cd-scrolling-bg cd-scrolling-bg--color-4"
          id="home"
          style={{ paddingTop: "13%" }}
        >
          <AboutMe />
        </div>
        <div
          className="cd-scrolling-bg cd-scrolling-bg--color-3"
          id="portfolio"
        >
          <Container>
            <Card.Group centered>
              <Projects />
            </Card.Group>
          </Container>
        </div>

        <div className="cd-scrolling-bg__content" id="contactMe">
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default MainContainer;
