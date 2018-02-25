import React, { Component } from "react";

import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default class Form extends Component {
  state = {
    signin: false
  };

  switchToSignup = () => {
    console.log("Switching to up ...");
    this.setState({
      signin: false
    });
  };

  switchToSignin = () => {
    console.log("Switching to in ...");
    this.setState({
      signin: true
    });
  };

  onSignin = () => {
    console.log('Signing in ...')
  }

  onSignup = () => {
    console.log('Signing up ...')
  }

  render() {
    const { switchToSignup, switchToSignin, onSignin, onSignup } = this;
    const { signin } = this.state;
    if (signin)
      return (
        <div>
          <SigninForm onSignin={onSignin} onSwitchToSignup={switchToSignup}/>
        </div>
      );
    return (
      <div>
        <SignupForm />
        <button onClick={switchToSignin}>To signin</button>
        <button onClick={onSignup}>Sign up</button>
      </div>
    );
  }
}
