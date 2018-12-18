import React from "react";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ContactForm = props => {
  return (
    <Form
      id="contact"
      className="py-3 px-2 mx-2 col-lg-2 col-md-2 col-sm-10 col-sx-10 b-6 border-info px-3"
    >
      <h3 className="mt-3 subTitleFont">Contact Me</h3>
      <hr />
      <Form.Group widths="equal">
        <Form.Input
          id="contactInput"
          fluid
          label="First name"
          placeholder="First name"
        />
        <Form.Input
          id="contactInput"
          fluid
          label="Last name"
          placeholder="Last name"
        />
      </Form.Group>
      <Form.Input
        id="contactInput"
        fluid
        label="Email"
        placeholder="Email"
        name="email"
      />

      <Form.TextArea label="Message" placeholder="Leave me a message :)" />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default ContactForm;
