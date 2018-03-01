import React, { Component } from "react";

// Styled components
import styled from "styled-components";

class LoginWrapper extends Component {
  render = () => {
    const { className, children } = this.props;

    return <div className={className}>{children}</div>;
  };
}

// Center the form
export default styled(LoginWrapper)`
  height: 100vh;
  width: 100vw;
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
