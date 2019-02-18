import React, { Component } from "react";
import { Container, Grid, Card } from "semantic-ui-react";
import AnimatedIntro from "./AnimatedIntro";
import FullStackDev_Cards from "./FullStackDev_Cards";
import ImageChange from "./Image";
import healthPresent from "./Images/healthpresent.jpg";
import AI_Brain from "./Images/AI_Brain.jpg";
import Picture_au2 from "./Images/Picture_au2.png";
import book from "./Images/book.jpg";
import bootcamp from "./Images/bootcamp.png";
import uh from "./Images/uh.png";

class AboutMe extends Component {
  state = { pictureOptions: null };

  options = () => {};

  renderPicture() {
    switch (this.state.pictureOptions) {
      case 1:
        return (
          <Card color="blue" centered>
            <ImageChange src={bootcamp} />
            <Card.Header style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Certificate - Feb. 2019
            </Card.Header>
          </Card>
        );
      case 2:
        return (
          <Card color="blue" centered style={{ padding: "5% 5% 0 5%" }}>
            <ImageChange src={uh} />
            <Card.Header style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Bachelor of Science - May 2014
            </Card.Header>
          </Card>
        );

      case 3:
        return (
          <Card color="red" centered>
            <ImageChange
              src={book}
              href="https://books.google.com/books/about/Scrum_the_art_of_doing_twice_the_work_in.html?id=L13frQEACAAJ"
            />
            <Card.Header style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Currently reading
            </Card.Header>
          </Card>
        );

      case 4:
        return (
          <Card color="blue" centered>
            <ImageChange src={healthPresent} />
            <Card.Header style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Health Presentation 2017
            </Card.Header>
          </Card>
        );

      case 5:
        return (
          <Card color="green" centered>
            <ImageChange
              src={AI_Brain}
              size="massive"
              href="https://www.tacc.utexas.edu/-/scientists-enlist-supercomputers-machine-learning-to-automatically-identify-brain-tumors"
            />
            <Card.Header style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Article which sparked my interest in machine learning
            </Card.Header>
          </Card>
        );

      case 6:
        return <FullStackDev_Cards />;

      default:
        return <ImageChange src={Picture_au2} size="medium" />;
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <ul className="mx-auto aboutMeFont">
                <AnimatedIntro />
                <span style={{ color: "grey" }}>Education:</span>
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
                  Biochemistry and Biophysics
                </li>

                <span style={{ color: "grey" }}>Lifestyles:</span>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 3 })}
                >
                  Reading
                </li>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 4 })}
                >
                  Health and fitness advocate
                </li>
                <span style={{ color: "grey" }}>Interests:</span>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 5 })}
                >
                  Machine learning
                </li>
                <span style={{ color: "grey" }}>And one statement:</span>
                <li
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 6 })}
                >
                  I LOVE TO LEARN AND UTILIZE WHAT I LEARN TO INOVATE.
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column className="my-auto">
              {this.renderPicture()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default AboutMe;
