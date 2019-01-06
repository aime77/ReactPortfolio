import React from "react";

import { Animated } from "react-animated-css";

const AboutMe = props => {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
      <div className="container">
        <div className="row">
          <div className="mx-4 col-lg-5 col-md-5 col-sm-5 mx-auto">
            <p className="aboutMeFont">Hello.</p>
            <p className="mx-auto aboutMeFont">My name is Aime</p>
            <ul
              className="mx-auto aboutMeFont"
            >
              About me:
              <li className="aboutMeFont">
                Full-stack Developer
              </li>
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <li className="aboutMeFont">
                  Active science researcher
                </li>
              </Animated>
              <li className="aboutMeFont">
                Health and fitness advocate
              </li>
              <li className="aboutMeFont">
                Passionate about brain science{" "}
              </li>
              And one statement:
              <li className="aboutMeFont">
                I LOVE TO LEARN!
              </li>
            </ul>
          </div>
          <div className="mx-auto col-lg-5 col-md-5 col-sm-5">
            <img className="mx-auto" src="../images/Pictureau3.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
