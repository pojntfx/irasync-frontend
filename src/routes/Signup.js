import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Dumb component
import SignupForm from "../components/login/SignupForm";

// Template and login logic
class SignupTemplate extends Component {
  onSignup = ({ email, name, password }) => {
    console.log("Signing up ...");
    const { mutate } = this.props;
    mutate({
      variables: {
        email,
        name,
        password
      }
    })
      .then(({ data: { signup: { token } } }) => {
        console.log("Got the token:", token);
        localStorage.setItem("token", token);
        console.log("Token in local storage:", localStorage.getItem("token"));
      })
      .catch(error => {
        console.log("Error while signing up.", error);
      });
  };

  render() {
    const { onSignup } = this;
    return (
      <div>
        <SignupForm onSignup={onSignup} />
      </div>
    );
  }
}

// Send signup data and recieve token
const POST_SIGNUP = gql`
  mutation($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
    }
  }
`;

// Export the component with the mutation
export const Signup = graphql(POST_SIGNUP)(SignupTemplate);
