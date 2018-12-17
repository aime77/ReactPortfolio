import React from "react";

const AboutMe = props => {
  return (
    <div class="cd-scrolling-bg__content">
      <div className="col-lg-12 col-md-12 col-sm-12 col-sx-12">
        <div className="col s12 m12">
          
          <div className="row">
            <div className="mx-auto">
            <p className="header">Hello.</p>
              <img className="mx-auto" src="../images/profilePict.jpg"/>
            </div>
            <div className="mx-4">
              <p className="mx-auto">My name is Aime</p>
              <ul className="mx-auto" style={{ listStyleType: "disc" }}>
                About me:
                <li type="square">Full-stack Developer</li>
                <li type="square">Active science researcher</li>
                <li type="square">Health and fitness advocate</li>
                <li type="square">Passionate about brain science </li>
                And one statement:
                <li type="square">I LOVE TO LEARN!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
