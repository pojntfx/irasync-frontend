import React, { Component } from "react";

// Semantic
import { Message } from "semantic-ui-react";

// Components
import Error from "../global/Error";

export default class ErrorMessage extends Component {
  render() {
    const { isSignup, networkError, errors } = this.props;

    if (networkError) {
      return <Error />;
    } else if (errors) {
      return (
        <Message error>
          <Message.Header>{`Error while signing ${
            isSignup ? "up" : "in"
          }`}</Message.Header>
          <Message.Content>
            {/* Display each error message without the quotes */}
            {errors.map(error =>
              JSON.stringify(error.message)
                .toString()
                .split('"')
                .join("")
            )}
          </Message.Content>
        </Message>
      );
    } else {
      return null;
    }
  }
}
