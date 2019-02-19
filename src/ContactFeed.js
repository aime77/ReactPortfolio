import React from "react";
import {  Icon, List} from "semantic-ui-react";

const ContactFeed = ({icon, content, link})=> {
  return (
    <List.Item className="my-2">
      <Icon name={icon}/>
      <List.Content>
        <List.Header target="_blank" href={link} style={{color:"#4183c4", fontSize:"2rem"}} >{content}</List.Header>
      </List.Content>
    </List.Item>
       
  );
};
export default ContactFeed;
