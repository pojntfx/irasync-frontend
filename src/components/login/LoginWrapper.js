import React, { Component } from "react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class LoginWrapper extends Component {
  render = () => {
    const { className, children } = this.props;

    return <div className={className}>{children}</div>;
  };
}

LoginWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

// Center the form
export default styled(LoginWrapper)`
  height: 100vh;
  width: 100vw;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
