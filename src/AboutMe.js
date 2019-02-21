import React, { Component } from "react";
import { Container, Grid, Card, List, Icon } from "semantic-ui-react";
import AnimatedIntro from "./AnimatedIntro";
import FullStackDevCards from "./FullStackDevCards";
import ImageChange from "./Image";
import healthPresent from "./Images/healthpresent.jpg";
import Picture_au2 from "./Images/profile.JPG";
import d3 from "./Images/d3.jpg";
import plotly from "./Images/plotly.png";
import python from "./Images/python.jpg";
import tensorflow from "./Images/tensorflow.png";
import book from "./Images/book.jpg";
import bootcamp from "./Images/bootcamp.png";
import uh from "./Images/uh.png";
import SoftwareCards from "./SoftwareCards";

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
              Certificate
            </Card.Header>
          </Card>
        );
      case 2:
        return (
          <Card color="blue" centered style={{ padding: "5% 5% 0 5%" }}>
            <ImageChange src={uh} />
            <Card.Header style={{ textAlign: "center", fontSize: "1.5rem" }}>
              Bachelor of Science
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
              Health Presentation
            </Card.Header>
          </Card>
        );

      case 7:
        return <FullStackDevCards />;

      case 5:
        return <SoftwareCards img1={d3} img2={plotly} />;

      case 6:
        return <SoftwareCards img1={tensorflow} img2={python} />;

      default:
        return <ImageChange src={Picture_au2} size="medium" />;
    }
  }

  render() {
    return (
      <Container style={{ overflow: "hidden" }}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <AnimatedIntro />
               {/* <ImageChange src={hover} size="tiny" style={{overflowY:"hidden"}}  />  */}
              <span
              name="Explore"
              onMouseEnter={this.showOptions}
              className="navBarFont"
            >
              Hover Me<Icon disabled name="arrow alternate circle down outline" />
            </span>
              <List
                animated
                verticalAlign="middle"
                className="mx-auto aboutMeFont mt-0"
              > 
                <span style={{ color: "grey" }}>Education:</span>
                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 1 })}
                >
                  Full-stack Developer
                </List.Item>

                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 2 })}
                >
                  Biochemistry and Biophysics
                </List.Item>

                <span style={{ color: "grey" }}>Lifestyles:</span>
                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 3 })}
                >
                  Reading
                </List.Item>
                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 4 })}
                >
                  Health and fitness advocate
                </List.Item>
                <span style={{ color: "grey" }}>Interests:</span>
                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 5 })}
                >
                  Data Visualization
                </List.Item>
                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 6 })}
                >
                  Machine learning
                </List.Item>
                <span style={{ color: "grey" }}>And one statement:</span>
                <List.Item
                  className="aboutMeFont"
                  onMouseEnter={() => this.setState({ pictureOptions: 7 })}
                >
                  <p className="my-0"> I LOVE TO LEARN </p>
                  <p className="my-0">AND UTILIZE WHAT I LEARN</p>
                  <p className="my-0">TO INOVATE.</p>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column className="my-auto mx-auto">
              {this.renderPicture()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
export default AboutMe;
