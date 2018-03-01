import React, { Component } from "react";

// Router Link
import { Link } from "react-router-dom";

// Semantic
import { Form, Button, Image, Responsive } from "semantic-ui-react";

// Logo
import logo from "../../assets/logo-light-gradient-green-blue.svg";

// Styled components
import styled from "styled-components";

// Logo
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
  }
  /* Make the logo not that big */
  max-width: 250px !important;
  /* Add a margin between the image and the text below it */
  margin-bottom: 1rem;
`;

class SigninForm extends Component {
  state = { email: "", password: "" };

  handleInput = (event, { name, value }) => {
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    // Don't reload
    event.preventDefault();
    // Get the variables from the form and pass it
    const { email, password } = this.state;
    this.props.onSignin({ email, password });
    // Clear the form
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { handleInput, onSubmit } = this;
    const { email, password } = this.state;
    const { className } = this.props;

    return (
      <Form onSubmit={onSubmit}>
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
        <Form.Group widths="equal">
          <Form.Field className={className}>
            <Button fluid secondary as={Link} to="/signup" content="Sign up" />
          </Form.Field>
          <Form.Button fluid primary content="Sign in" />
        </Form.Group>
      </Form>
    );
  }
}

// Reverse the button order on sm (signin should be the first button since it is the primary action)
export default styled(SigninForm)`
  @media (max-width: ${Responsive.onlyMobile.maxWidth}px) {
    order: 2;
  }
`;
