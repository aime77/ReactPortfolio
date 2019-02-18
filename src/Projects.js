import React, { Component } from "react";
import _ from "lodash";
import { Image, Reveal, Button, Grid, Segment } from "semantic-ui-react";
import projectsArray from "./projectsArray";
import bg from "./Images/bg_black.jpg";
class Projects extends Component {
  state = { category: "main" };

  renderButtons() {
    return (
      <Grid centered columns={2}>
        <Grid.Row>
          <Grid.Column width={1} className="mx-auto">
            <Button
              className="ui button secondary"
              onClick={() => this.setState({ category: "main" })}
            >
              Most Relevant
            </Button>
          </Grid.Column>
          <Grid.Column width={1} className="mx-auto">
            <Button
              className="ui button secondary"
              onClick={() => this.setState({ category: "other" })}
            >
              Other
            </Button>
          </Grid.Column>
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
              className="mx-4"
              animated="move"
              key={name}
              style={{ marginTop: "3%", display: "inline-block" }}
              instant
            >
              <Reveal.Content visible>
                <Segment>
                  <Image src={image} size="medium" />
                </Segment>
              </Reveal.Content>
              <Reveal.Content hidden size="medium" href={link} target="_blank">
                <Segment
                  style={{ backgroundImage: `url(${bg})`, padding: "3%" }}
                >
                  <div style={{ color: "white" }}>
                    <h2 style={{ textAlign: "center" }}> {name}</h2>
                    <p>{description}</p>
                    <p>{technologies}</p>

                    <a href={github} target="_blank">
                      GitHub
                    </a>
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
