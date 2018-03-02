import React from "react";

// React router
import { Route, Redirect } from "react-router-dom";

// Protected drafts route
export const Private = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // If user is authenticated, show the specified component
      isAuthenticated ? (
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
