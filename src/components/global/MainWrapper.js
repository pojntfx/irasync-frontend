import React, { Component } from "react";

// Semantic
import { Container } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class MainWrapper extends Component {
  render() {
    const { children, className } = this.props;
    return <Container className={className}>{children}</Container>;
  }
}

MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

// Add a margin to the top
export default styled(MainWrapper)`
  padding-top: 6rem;
  padding-bottom: 6rem;
`;
