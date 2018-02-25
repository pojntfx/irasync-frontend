import React, { Component } from "react";

export default class SigninForm extends Component {
  switchToSignup = () => {
    this.props.onSwitchToSignup();
  };

  onSubmit = event => {
    // Don't reload
    event.preventDefault();
    // Get the variables from the form and pass it
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    this.props.onSignin({ email, password });
    // Clear the form
    this.emailInput.value = "";
    this.passwordInput.value = "";
  };

  render() {
    const { switchToSignup, onSubmit } = this;
    return (
      <div>
        <p>Signin Form</p>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            ref={emailInput => (this.emailInput = emailInput)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            ref={passwordInput => (this.passwordInput = passwordInput)}
            required
          />
          <button type="submit">Sign in</button>
        </form>

        <button onClick={switchToSignup}>To signup</button>
      </div>
    );
  }
}
