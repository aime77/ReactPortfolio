import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactDOM from "react-dom";
import PortfolioCards from "./PortfolioCards";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Navbar2 from "./NavBar2";
import ContactForm from "./ContactF";
import Footer from "./Footer";
import "semantic-ui-css/semantic.min.css";

const App = () => {

  return (
    
    <div>
      
      <Navbar />
      <ScrollAnimation animateIn="fadeIn">
  <div className="cd-scrolling-bg cd-scrolling-bg--color-4" id="about">
        <AboutMe />
      </div>
</ScrollAnimation>

  

      <div className="cd-scrolling-bg cd-scrolling-bg--color-3" id="portfolio">
        <div className="cd-scrolling-bg__content">
          <div>
            <h3 className="mt-3 subTitleFont">Portfolio</h3>
            <hr />
            <PortfolioCards />
          </div>
        </div>
      </div>
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
