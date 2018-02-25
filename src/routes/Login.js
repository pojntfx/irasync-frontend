import React, { Component } from "react";

// Components
import { Form } from "../components/login/Form";

export default class Login extends Component {
  state = {
    userIsLoggedIn: false
  };
  render() {
    const { userIsLoggedIn } = this.state;
    if (userIsLoggedIn) {
      return <p>User is logged in.</p>;
    } else return <Form />;
  }
}
