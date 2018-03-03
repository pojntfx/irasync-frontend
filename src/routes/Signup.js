import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Components
import LoginWrapper from "../components/login/LoginWrapper";
import MainNavigation from "../components/global/MainNavigation";

// Dumb component
import SignupForm from "../components/login/SignupForm";

// Template and login logic
class Signup extends Component {
  state = {
    error: {}
  };

  componentDidMount() {
    const { isAuthenticated } = this.props;
    // If authenticated, go back to the feed (does not make sense to sign in again)
    if (isAuthenticated()) {
      this.props.history.push("/");
    }
  }

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
        // Update the authorization data (this is necessary when accessing a protected
        // area and then going back to a normal route without reloading)
        this.props.onSuccessfullSignup();
        this.props.history.push("/");
        return true;
      })
      .catch(error => {
        // If there is a error, pass it to the form
        if (error) {
          this.setState({ error });
        }
        return false;
      });
  };

  onSignout = () => {
    console.log("signing out ...");
    this.props.onSignout();
  };

  render() {
    const { onSignup, onSignout } = this;
    const { error } = this.state;

    return (
      <div>
        <MainNavigation {...this.props} onSignout={onSignout} />
        <LoginWrapper>
          <SignupForm onSignup={onSignup} errors={error} />
        </LoginWrapper>
      </div>
    );
  }
}

// Send signin data and recieve token
const POST_SIGNUP = gql`
  mutation($email: String!, $name: String!, $password: String!) {
    signup(email: $email, name: $name, password: $password) {
      token
    }
  }
`;

// Export the component with the mutation
export default graphql(POST_SIGNUP)(Signup);
