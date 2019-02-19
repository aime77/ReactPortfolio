import React from "react";
import { List, Card } from "semantic-ui-react";
import ContactFeed from "./ContactFeed";

const ContactForm = () => {
  return (
    <Card
      id="contact"
      className="mx-auto"
      style={{ maxWidth: "500px", overflow: "hidden" }}
      fluid
    >
      <Card.Header
        className="subTitleFont mb-2"
        style={{ textAlign: "center" }}
      >
        Contact Me
      </Card.Header>
      <hr />

      <List animated verticalAlign="middle" className="mt-2 contactFont">
        <ContactFeed icon="phone big" content="281-248-6148" />
        <ContactFeed
          icon="mail big"
          content="aime.urquieta@outlook.com"
          link="mailto:aime.urquieta@outlook.com"
        />
        <ContactFeed
          icon="linkedin big"
          content="Linkedin"
          link="https://www.linkedin.com/in/aime-urquieta-63a741115/"
        />
      </List>
    </Card>
  );
};

export default ContactForm;
