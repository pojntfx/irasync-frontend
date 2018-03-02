import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Components
import LoginWrapper from "../components/login/LoginWrapper";
import MainNavigation from "../components/global/MainNavigation";

// Dumb component
import SigninForm from "../components/login/SigninForm";

// Template and login logic
class SigninTemplate extends Component {
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
        // Update the authorization data (this is necessary when accessing a protected
        // area and then going back to a normal route without reloading)
        this.props.onSuccessfullSignin();
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("Error while signing in.", error);
      });
  };

  render() {
    const { onSignin } = this;

    return (
      <div>
        <MainNavigation {...this.props} />
        <LoginWrapper>
          <SigninForm onSignin={onSignin} />
        </LoginWrapper>
      </div>
    );
  }
}

// Send signin data and recieve token
const POST_SIGNIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Export the component with the mutation
export const Signin = graphql(POST_SIGNIN)(SigninTemplate);
