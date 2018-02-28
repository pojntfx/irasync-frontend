import React, { Component } from "react";

// Router Link
import { Link } from "react-router-dom";

import { Form } from "semantic-ui-react";

export default class SigninForm extends Component {
  state = { email: "", password: "" };

  handleInput = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    // Don't reload
    event.preventDefault();
    // Get the variables from the form and pass it
    const { email, password } = this.state;
    this.props.onSignin({ email, password });
    // Clear the form
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { handleInput, onSubmit } = this;
    const { email, password } = this.state;

    return (
      <div>
        <Form onSubmit={onSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              placeholder="Email"
              name="email"
              type="email"
              value={email}
              onChange={handleInput}
              required
              autoFocus
            />
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleInput}
              required
            />
            <Form.Button content="Submit" />
          </Form.Group>
        </Form>

        <Link to="/signup">To sign up</Link>
      </div>
    );
  }
}
