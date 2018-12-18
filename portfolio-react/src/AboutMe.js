import React from "react";

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
              style={{ listStyleType: "disc" }}
            >
              About me:
              <li className="aboutMeFont" type="square">
                Full-stack Developer
              </li>
              <li className="aboutMeFont" type="square">
                Active science researcher
              </li>
              <li className="aboutMeFont" type="square">
                Health and fitness advocate
              </li>
              <li className="aboutMeFont" type="square">
                Passionate about brain science{" "}
              </li>
              And one statement:
              <li className="aboutMeFont" type="square">
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
