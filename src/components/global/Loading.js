import React, { Component } from "react";

// Semantic
import { Dimmer, Loader } from "semantic-ui-react";

export default class Loading extends Component {
  render() {
    return (
      <Dimmer active inverted page>
        <Loader>Loading ...</Loader>
      </Dimmer>
    );
  }
}
