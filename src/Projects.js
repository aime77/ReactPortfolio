import React, { Component } from "react";
import _ from "lodash";
import { Image, Reveal, Icon, Card } from "semantic-ui-react";
import projectsArray from "./projectsArray";
import bg from "./Images/bg_black.jpg" 
class Projects extends Component {

   state={category:"main"}
  renderFields() {
    return _.map(
      projectsArray,
      ({ name, description, github, link, image, technologies, category }) => {
        if(category==="main"){
        return (
            
            <Reveal className="mx-4" animated="move" key={name} style={{marginTop: "3%", display:"inline-block"}} instant>
              <Reveal.Content visible><Image src={image}  size="medium" />          
              </Reveal.Content>
              <Reveal.Content hidden size="medium">
              <Image href={link}  target="_blank" style={{ backgroundImage: `url(${bg})`}}>
              <div style={{color:"white"}} href={link}  target="_blank">
                 <h2 > {name}</h2>
                <p>{description}</p>
                <p>{technologies}</p>
                </div>
                <Icon name="github" />
                </Image>
              </Reveal.Content>
            </Reveal>
           
         
        );
      }
      }
    );
  }

  render() {

    return <div>
    
    {this.renderFields()}</div>;
  }
}

export default Projects;
