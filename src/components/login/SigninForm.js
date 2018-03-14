import React, { Component } from "react";

// Router Link
import { Link } from "react-router-dom";

// Semantic
import { Form, Button, Image, Responsive } from "semantic-ui-react";

// Logo
import logo from "../../assets/logo-light-gradient-green-blue.svg";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import ErrorMessage from "./ErrorMessage";

// Logo
// eslint-disable-next-line
const LogoTemplate = ({ className }) => {
  return (
    <div>
      <Image src={logo} fluid centered className={className} />{" "}
      <div className="text-below-logo">
        The social network for democratic communities
      </div>
    </div>
  );
};
const Logo = styled(LogoTemplate)`
  /* Show that the heading is not a label */
  ~ .text-below-logo {
    margin-bottom: 1rem;
    text-align: center;
  }
  /* Make the logo not that big */
  max-width: 250px !important;
  /* Add a margin between the image and the text below it */
  margin-bottom: 1rem;
`;

class SigninForm extends Component {
  state = { email: "", password: "", loading: false };

  handleInput = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    // Don't reload
    event.preventDefault();
    // Get the variables from the form and pass it
    const { email, password } = this.state;
    // Show loading screen
    this.setState({
      loading: true
    });
    // If no errors are being thrown, clear the form
    if (this.props.onSignin({ email, password })) {
      // Clear the form
      this.setState({
        email: "",
        password: ""
      });
      // Else hide the loading screen to make the error messages visible
    } else {
      this.setState({
        loading: false
      });
    }
  };

  // After user navigated away, stop the loading indicator
  componentWillUnmount() {
    this.setState({
      loading: false
    });
  }

  render() {
    const { handleInput, onSubmit } = this;
    const { email, password, loading } = this.state;
    const {
      className,
      // A network error needs to be treated differently as is not a GraphQL error (not in the same array)
      errors: { networkError },
      errors: { graphQLErrors }
    } = this.props;

    // Check whether an error exists (for form validation)
    // This is not used in the ErrorMessage component, but can be used if native semantic message
    // is being used
    let errorExists = graphQLErrors || networkError ? true : false;

    return (
      <Form
        onSubmit={onSubmit}
        loading={loading}
        error={errorExists}
        className={className}
      >
        <Logo />
        <Form.Input
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleInput}
          required
          autoFocus
        />
        <Form.Input
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleInput}
          required
        />
        <ErrorMessage networkError={networkError} errors={graphQLErrors} />
        <Form.Group widths="equal">
          <Form.Field>
            <Button fluid secondary as={Link} to="/signup" content="Sign up" />
          </Form.Field>
          <Form.Button fluid primary content="Sign in" />
        </Form.Group>
      </Form>
    );
  }
}

SigninForm.propTypes = {
  className: PropTypes.string.isRequired,
  onSignin: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default styled(SigninForm)`
  /* Prevent the error messages from getting to wide */
  max-width: 300px !important;
  /* Reverse the button order on sm (signin should be the first button since it is the primary action) */
  @media (max-width: ${Responsive.onlyMobile.maxWidth}px) {
    > .equal.width.fields > .field:first-child {
      order: 2;
    }
  }
`;
