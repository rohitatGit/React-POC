import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback, CustomInput
} from 'reactstrap';
import './react-form.css';
import 'react-datepicker/dist/react-datepicker.css';


class reactform extends Component {
  constructor(props) {
    console.time();
    super(props);
    this.state = {
      'uName': '',
      'email': '',
      'password': '',
      validate: {
        emailState: '',
      },
    }
    this.displayValue = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    const today = new Date();
    console.timeEnd();
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
      return false;
    }
  }
  submitForm(e) {
    e.preventDefault();
    this.displayValue['Email'] = this.state.email;
    this.displayValue['UserName'] = this.state.uName;
    console.log(this.displayValue)
  }

  handleChangeDate(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const { uName, email, password } = this.state;
    return (
      <div>
        <Container className="reactform">
          <h4>Registeration Form</h4>
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
            <FormGroup id='dobDatePicker'>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date placeholder"
              />
            </FormGroup>

            <Col>
              <FormGroup>
                <Label for="exampleCheckbox">Gender: </Label>
                <div>
                  <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Male" />
                  <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Female" />
                </div>
              </FormGroup>

            </Col>

            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Accept the terms and conditions.
              </Label>
            </FormGroup>

            <Button disabled={this.disableTheButton()}>Submit</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default reactform;