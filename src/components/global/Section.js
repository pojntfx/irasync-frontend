import React, { Component } from "react";

// Semantic
import { Header } from "semantic-ui-react";

// PropTypes
import PropTypes from "prop-types";

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

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
