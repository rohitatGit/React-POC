import React, { Component } from 'react';
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

class reactform extends Component {
  reactform = FormBuilder.group({});

  handleReset = e => {
    this.reactform.reset();
  };
  handleSubmit = e => {
    console.log("Form values", this.reactform.value);
    e.preventDefault();
  };
  render() {
    return (
      <FieldGroup
        control={this.reactform}
        render={({ get, invalid, reset, value }) => (
          <Form onSubmit={this.handleSubmit}>
            <label>Username:{" "}</label>
            <FieldControl
              name="username"
              options={{ validators: Validators.required }}
              render={({ handler, touched, hasError }) => (
                <div>
                  <Input placeholder="Please enter the User Name" {...handler()} />
                  <span>
                    {touched && hasError("required") && "Username is required"}
                  </span>
                </div>
              )}
            />
            <br />
            <label>Password:</label>
          <FieldControl
              name="password"
              options={{ validators: Validators.required }}
              render={({ handler, touched, hasError }) => (
                <div>
                  <input {...handler()} />
                  <span>
                    {touched && hasError("required") && "Password is required"}
                  </span>
                </div>
              )}
            />
            <br />
            <button type="button" onClick={this.handleReset}>
              Reset
          </button>
            <button type="submit" disabled={invalid}>
              Submit
          </button>
          </Form>
        )}
      />
    );
  }
}

export default reactform;