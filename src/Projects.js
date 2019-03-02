import React, { Component } from "react";
import _ from "lodash";
import { Image, Reveal, Button, Grid, Segment } from "semantic-ui-react";
import projectsArray from "./projectsArray";
import bg from "./Images/bg_black.jpg";
class Projects extends Component {
  state = { category: "fullstack" };

  renderButtons() {
    return (
      <Grid centered columns={4}>
        <Grid.Row>
          <Button
            className="ui button secondary"
            onClick={() => this.setState({ category: "fullstack" })}
          >
            Full Stack
          </Button>

          <Button
            className="ui button secondary"
            onClick={() => this.setState({ category: "backend" })}
          >
            Back End
          </Button>
          <Button
            className="ui button secondary"
            onClick={() => this.setState({ category: "frontend" })}
          >
            Front End
          </Button>
          <Button
            className="ui button secondary"
            onClick={() => this.setState({ category: "upcoming" })}
          >
            Up Coming Projects
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
  renderFields() {
    return _.map(
      projectsArray,
      ({ name, description, github, link, image, technologies, category }) => {
        if (category === this.state.category) {
          return (
            <Reveal
              className="mx-2"
              animated="move"
              key={name}
              style={{ marginTop: "3%", display: "inline-block" }}
              instant
            >
              <Reveal.Content visible col-sm-3>
                <Segment>
                  <Image src={image} size="medium" />
                </Segment>
              </Reveal.Content>
              <Reveal.Content hidden size="large">
                <Segment
                  style={{
                    backgroundImage: `url(${bg})`,
                    padding: "3%",
                    height: "100%"
                  }}
                >
                  <div style={{ color: "white" }}>
                    <h2 style={{ textAlign: "center" }}> {name}</h2>
                    <p>{description}</p>
                    <p>{technologies}</p>
                    {this.state.category!=="upcoming"?
                    (<div><Button href={github} target="_blank">
                      GitHub
                    </Button>
                    <Button href={link} target="_blank">
                      View Site
                    </Button></div>):""}
                  </div>
                </Segment>
              </Reveal.Content>
            </Reveal>
          );
        }
      }
    );
  }

  render() {
    return (
      <div>
        <h1 className="mt-3 subTitleFont" style={{ textAlign: "center" }}>
          Projects
        </h1>
        <hr />
        {this.renderButtons()}

        {this.renderFields()}
      </div>
    );
  }
}

export default Projects;
