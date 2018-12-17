import React from "react";

const ContactForm = props => {
  return (
    <form className="m-3">
      <h2 className="mt-3">Contact Me</h2>
      <hr />
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="textarea2"
            className="materialize-textarea"
            data-length="400"
          />
          <label for="textarea2">Message</label>
        </div>
      </div>
      <div className="m-0">
        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
