import React from "react";
import ReactDOM from "react-dom";
import PortfolioCards from "./PortfolioCards";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import ContactForm from "./ContactF";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="cd-scrolling-bg cd-scrolling-bg--color-4" id="about">
        <AboutMe />
      </div>

      <div className="cd-scrolling-bg cd-scrolling-bg--color-3" id="portfolio">
        <div className="cd-scrolling-bg__content">
          <div>
            <h3 className="mt-3">Portfolio</h3>
            <hr />
            <PortfolioCards />
          </div>
        </div>
      </div>
      <div className="cd-fixed-bg cd-fixed-bg--3" />
      <div className="cd-scrolling-bg cd-scrolling" id="contactBG">
        <div className="cd-scrolling-bg__content">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
