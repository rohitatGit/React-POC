import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback,
} from 'reactstrap';
import './react-form.css';

class reactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'uName': '',
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
    if (emailRex.test(e.target.value)) {
      validate.emailState = 'has-success'
    } else {
      validate.emailState = 'has-danger'
    }
    this.setState({ validate })
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  }

  disableTheButton = () => {
    if (!this.state.uName || !this.state.email || !this.state.password) {
      // this.state = 'disabled'
      return true;
    } else {
      console.log(this.state)
      return false;
    }
  }
  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`)
    console.log(`UserName: ${this.state.uName}`)
  }

  render() {
    const { uName, email, password } = this.state;
    return (
      <div>
      <Container className="reactform">
        <h2>Sign In</h2>
        <Form className="form" onSubmit={(e) => this.submitForm(e)}>
        
          <Col>
            <FormGroup>
              <Label>Your Name</Label>
              <Input
                type="text"
                name="uName"
                id="uName"
                placeholder="Enter First Name"
                value={uName}
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={email}
                valid={this.state.validate.emailState === 'has-success'}
                invalid={this.state.validate.emailState === 'has-danger'}
                onChange={(e) => {
                  this.validateEmail(e)
                  this.handleChange(e)
                }}
              />
              <FormFeedback valid>
                Looking Nice....
              </FormFeedback>
              <FormFeedback>
                Please Enter the valid Email....
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={password}
                onChange={(e) => this.handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Button disabled= {this.disableTheButton()}>Submit</Button>
        </Form>
      </Container>
      </div>
    );
  }
}

export default reactform;