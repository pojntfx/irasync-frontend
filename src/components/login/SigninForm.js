import React, { Component } from "react";

export default class SigninForm extends Component {
  switchToSignup = () => {
    this.props.onSwitchToSignup();
  };

  onSubmit = event => {
    // Don't reload
    event.preventDefault();
    this.props.onSignin();
  };

  render() {
    const { switchToSignup, onSubmit } = this;
    return (
      <div>
        <p>Signin Form</p>

        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Username or Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign in</button>
        </form>

        <button onClick={switchToSignup}>To signup</button>
      </div>
    );
  }
}
