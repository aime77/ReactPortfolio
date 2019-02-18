import React from "react";
import { Form, List } from "semantic-ui-react";

const ContactForm = props => {
  return (
    <Form
      id="contact"
      className="py-3 px-2 mx-2 col-lg-2 col-md-2 col-sm-10 col-sx-10 b-6 border-info px-3"
      style={{ overflowX: "hidden" }}
    >
      <h1 className="subTitleFont" style={{ textAlign: "center" }}>
        {" "}
        Contact Me
      </h1>
      <hr />
      <div className="mt-3 contactFont">
        <List>
          <List.Item>
            <List.Icon name="phone" />
            <List.Content>281-248-6148</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="mail" />
            <List.Content target="_blank">
              <a
                href="mailto:aime.urquieta@outlook.com"
                style={{ color: "black" }}
              >
                aime.urquieta@outlook.com
              </a>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name="linkedin" />
            <List.Content target="_blank">
              <a
                href="https://www.linkedin.com/in/aime-urquieta-63a741115/"
                style={{ color: "black" }}
              >
                Linkedin
              </a>
            </List.Content>
          </List.Item>
        </List>
      </div>
    </Form>
  );
};

export default ContactForm;
