import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Components
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

// Template
class FormTemplate extends Component {
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

  onSignin = ({ email, password }) => {
    console.log("Signing in ...");
    const { mutate } = this.props;
    mutate({
      variables: {
        email,
        password
      }
    })
      .then(({ data: { login: { token } } }) => {
        console.log("Got the token:", token);
        localStorage.setItem("token", token);
        console.log("Token in local storage:", localStorage.getItem("token"));
      })
      .catch(error => {
        console.log("Error while signing it.", error);
      });
  };

  onSignup = () => {
    console.log("Signing up ...");
  };

  render() {
    const { switchToSignup, switchToSignin, onSignin, onSignup } = this;
    const { signin } = this.state;
    if (signin)
      return (
        <div>
          <SigninForm onSignin={onSignin} onSwitchToSignup={switchToSignup} />
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

// Send signup data and recieve token
const POST_SIGNIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Export the component with the mutation
export const Form = graphql(POST_SIGNIN)(FormTemplate);
