import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// PropTypes
import PropTypes from "prop-types";

// Components
import LoginWrapper from "../components/login/LoginWrapper";
import MainNavigation from "../components/global/MainNavigation";

// Dumb component
import SigninForm from "../components/login/SigninForm";

// Template and login logic
class Signin extends Component {
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
    const { onSignin, onSignout } = this;
    const { error } = this.state;

    return (
      <div>
        <MainNavigation {...this.props} onSignout={onSignout} />
        <LoginWrapper>
          <SigninForm onSignin={onSignin} errors={error} />
        </LoginWrapper>
      </div>
    );
  }
}

Signin.propTypes = {
  isAuthenticated: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
  onSuccessfullSignin: PropTypes.func.isRequired,
  onSignout: PropTypes.func.isRequired
};

// Send signin data and recieve token
const POST_SIGNIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Export the component with the mutation
export default graphql(POST_SIGNIN)(Signin);
