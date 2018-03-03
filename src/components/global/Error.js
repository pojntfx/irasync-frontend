import React, { Component } from "react";

// Semantic
import { Dimmer, Loader } from "semantic-ui-react";

export default class Error extends Component {
  render() {
    return (
      <Dimmer active page>
        <Loader indeterminate>
          Timeout while connecting to backend. Please refresh the page to try
          again.
        </Loader>
      </Dimmer>
    );
  }
}
