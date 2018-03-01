import React, { Component } from "react";

// Semantic
import { Container } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

class MainWrapper extends Component {
  render() {
    const { children, className } = this.props;
    return <Container className={className}>{children}</Container>;
  }
}

// Add a margin to the top
export default styled(MainWrapper)`
  padding-top: 6rem;
`;
