import React from "react";
import { Card, Image } from "semantic-ui-react";
import FSWeb_1 from "./Images/process_FSW_1.gif";
import FSWeb_2 from "./Images/process_FWS_2.jpg";
import FSWeb_3 from "./Images/process_FSW_3.jpg";
import FSWeb_4 from "./Images/process_FSW_4.jpg";

const FullStackDev_Cards = () => (
  <Card.Group itemsPerRow={4}>
    <Card color="red">
    <Image src={FSWeb_1} size="massive"/>
      <Card.Description>
        <Card.Header style={{fontSize:"1rem"}}>Unsure how to solve a coding problem</Card.Header>
      </Card.Description>
    </Card>

    <Card color="yellow">
    <Image src={FSWeb_2}/>
    <Card.Description>
        <Card.Header style={{fontSize:"1rem"}}>Learn and try a solution</Card.Header>
      </Card.Description>
    </Card>
    <Card color="green" >
    <Image src={FSWeb_3}/>
    <Card.Description>
        <Card.Header style={{fontSize:"1rem"}}>Run the program and it works!</Card.Header>
      </Card.Description>
    </Card>
    <Card color="blue" >
    <Image src={FSWeb_4}/>
    <Card.Description>
        <Card.Header style={{fontSize:"1rem"}}>Joy of program working</Card.Header>
      </Card.Description>
    </Card>
  </Card.Group>
);

export default FullStackDev_Cards;
