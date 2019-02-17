import React, { Component } from "react";
import { Container, Grid, Segment } from "semantic-ui-react";
import AnimatedIntro from "./AnimatedIntro";
import FullStackDev_Cards from "./FullStackDev_Cards"
import ImageChange from "./Image";
import healthPresent from "./Images/healthpresent.jpg";
import AI_Brain from "./Images/AI_Brain.jpg";
import Picture_au2 from "./Images/Picture_au2.png";


class AboutMe extends Component {
  state = { pictureOptions: null };

  options = () => {};

  renderPicture() {
    switch (this.state.pictureOptions) {
      case 1:
        return <FullStackDev_Cards />;

      case 2:
        return <ImageChange src={""} />;

      case 3:
        return <ImageChange src={healthPresent}  />;

      case 4:
        return (
          <ImageChange
            src={AI_Brain}
            size="huge"
            href="https://www.tacc.utexas.edu/-/scientists-enlist-supercomputers-machine-learning-to-automatically-identify-brain-tumors"
          />
        );

      default:
      return <ImageChange src={Picture_au2} size="medium"/>;
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <AnimatedIntro className="aboutMeFont" />

              <ul className="mx-auto aboutMeFont">
                <span style={{ color: "grey" }}>About me:</span>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 1 })}
                >
                  Full-stack Developer
                </li>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 2 })}
                >
                  Reading is my lifestyle
                </li>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 3 })}
                >
                  Health and fitness advocate
                </li>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 4 })}
                >
                  Passionate about brain science{" "}
                </li>
                <span style={{ color: "grey" }}>And one statement:</span>
                <li className="aboutMeFont">
                  I LOVE TO LEARN AND UTILIZE WHAT I LEARN TO INOVATE.
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column>
             
                {this.renderPicture()}
              
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default AboutMe;
