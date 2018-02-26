import React, { Component } from "react";

// Router Link
import { Link } from "react-router-dom";

export default class SignupForm extends Component {
  onSubmit = event => {
    // Don't reload
    event.preventDefault();
    // Get the variables from the form and pass it
    const email = this.emailInput.value;
    const name = this.nameInput.value;
    const password = this.passwordInput.value;
    this.props.onSignup({ email, name, password });
    // Clear the form
    this.emailInput.value = "";
    this.nameInput.value = "";
    this.passwordInput.value = "";
  };

  render() {
    const { onSubmit } = this;
    return (
      <div>
        <p>Sign up</p>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="Email"
            ref={emailInput => (this.emailInput = emailInput)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            ref={nameInput => (this.nameInput = nameInput)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            minLength="8"
            ref={passwordInput => (this.passwordInput = passwordInput)}
            required
          />
          <button type="submit">Sign up</button>
        </form>

        <Link to="/signin">To sign in</Link>
      </div>
    );
  }
}
