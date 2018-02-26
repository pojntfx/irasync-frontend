import React, { Component } from "react";

// Router Link
import { Link } from "react-router-dom";

export default class SigninForm extends Component {
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
    const { onSubmit } = this;
    return (
      <div>
        <p>Sign in</p>

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

        <Link to="/signup">To sign up</Link>
      </div>
    );
  }
}
