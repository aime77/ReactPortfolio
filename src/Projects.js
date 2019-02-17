import React, { Component } from "react";
import _ from "lodash";
import { Image, Reveal, Icon } from "semantic-ui-react";
import projectsArray from "./projectsArray";

class Projects extends Component {
  renderFields() {
    return _.map(
      projectsArray,
      ({ name, description, github, link, image, technologies, category }) => {
        return (
         
            <Reveal animated="move" key={name}>
              <Reveal.Content visible><Image src={image} href={link} size="large" />
               
              </Reveal.Content>
              <Reveal.Content hidden>
                 <h2> {name}</h2>
                <p>{description}</p>
                <p>{technologies}</p>
                <Icon name="github" />
              </Reveal.Content>
            </Reveal>
         
        );
      }
    );
  }

  render() {


    return <div>{this.renderFields()}</div>;
  }
}

export default Projects;
