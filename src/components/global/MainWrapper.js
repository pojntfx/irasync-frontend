import React, { Component } from "react";

// Semantic
import { Container } from "semantic-ui-react";

export default class MainWrapper extends Component {
  render() {
    const { children } = this.props;
    return <Container style={{ paddingTop: "6rem" }}>{children}</Container>;
  }
}
