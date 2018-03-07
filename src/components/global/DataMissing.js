import React, { Component } from "react";

// Semantic
import { Header } from "semantic-ui-react";

export default class DataMissing extends Component {
  render(className) {
    const { message } = this.props;

    return (
      <Header subheader={message} className={className} textAlign="center" />
    );
  }
}
