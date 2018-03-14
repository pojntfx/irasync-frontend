import React from "react";

// React router
import { Route, Redirect } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// Protected route
export const Private = ({ render: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // If user is authenticated, show the specified component
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        // If user is not authenticated, redirect to sign in
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      )
    }
  />
);

Private.propTypes = {
  render: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.func.isRequired
};
