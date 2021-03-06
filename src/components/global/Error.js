import React, { Component } from "react";

// Semantic
import { Dimmer, Loader, Header, Icon } from "semantic-ui-react";

// PropTypes
import PropTypes from "prop-types";

export default class Error extends Component {
  render() {
    const { error } = this.props;
    return (
      <Dimmer active page>
        <Loader indeterminate>
          {error ? (
            <Header icon inverted>
              <Icon name="warning sign" />
              <div>
                Oh no, something went wrong! Try reloading this page. The
                following error message may be helpful:
              </div>
              <i>
                {error.graphQLErrors[0] !== undefined
                  ? error.graphQLErrors.map(error =>
                      JSON.stringify(error.message)
                    )
                  : JSON.stringify(error)}
              </i>
            </Header>
          ) : (
            `Timeout while connecting to backend. Please refresh the page to try
            again.`
          )}
        </Loader>
      </Dimmer>
    );
  }
}

Error.propTypes = {
  error: PropTypes.object
};
