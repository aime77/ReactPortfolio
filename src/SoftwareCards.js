import React from "react";
import { Card, Image } from "semantic-ui-react";


const SoftwareCards = ({img1,img2,softwareName1, softwareName2}) => (
  <Card.Group itemsPerRow={2}>
    <Card color="green" >
    <Image src={img1}/>
    <Card.Description>
        <Card.Header style={{fontSize:"1rem"}}>{softwareName1}</Card.Header>
      </Card.Description>
    </Card>
    <Card color="blue" >
    <Image src={img2}/>
    <Card.Description>
        <Card.Header style={{fontSize:"1rem"}}>{softwareName2}</Card.Header>
      </Card.Description>
    </Card>
  </Card.Group>
);

export default SoftwareCards;
