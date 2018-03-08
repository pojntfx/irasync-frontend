import React, { Component } from "react";

// Semantic
import { Header } from "semantic-ui-react";

export default class Section extends Component {
  render() {
    const { id, title, children } = this.props;
    return (
      <section id={id}>
        {title ? <Header size="medium" content={title} /> : null}
        {children}
      </section>
    );
  }
}
