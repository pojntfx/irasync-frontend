import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Semantic UI styles (common)
import "semantic-ui-css/semantic.min.css";

// Apollo client
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Routes/Screens
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import { Signup } from "./routes/Signup";
import { Private as PrivateRoute } from "./routes/Private";
import FourZeroFour from "./routes/404";

// Update authorization state
const authorizationState = () => {
  return localStorage.getItem("token") ? true : false;
};

// Authorization header (token will be pulled from localStorage every time a request is sent)
const authLink = setContext((_, { headers }) => {
  // Get the token
  let token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

// HttpLink
const httpLink = createHttpLink({
  uri: "http://localhost:4000",
  credentials: "include"
});

// Create Apollo client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        {/* Home */}
        <Route
          exact
          path="/"
          render={props => (
            <Home isAuthenticated={() => authorizationState()} {...props} />
          )}
        />
        <Route exact path="/feed" render={() => <Redirect to="/" />} />
        <Route exact path="/f" render={() => <Redirect to="/" />} />

        {/* Drafts */}
        <PrivateRoute
          path="/drafts"
          isAuthenticated={authorizationState}
          render={props => (
            <Home isAuthenticated={() => authorizationState()} {...props} />
          )}
        />
        <PrivateRoute
          path="/d"
          isAuthenticated={authorizationState}
          render={() => <Redirect to="/drafts" />}
        />

        {/* Signup */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/su" render={() => <Redirect to="/signup" />} />

        {/* Signin */}
        <Route
          exact
          path="/signin"
          render={props => (
            <Signin
              isAuthenticated={() => authorizationState()}
              onSuccessfullSignin={() => authorizationState()}
              {...props}
            />
          )}
        />
        <Route exact path="/si" render={() => <Redirect to="/signin" />} />

        {/* 404 */}
        <Route component={FourZeroFour} />

        {/* <Route path="/c" component={Community} />
        <Route path="/community" component={Community} />

        <Route path="/p" component={Person} />
        <Route path="/community" component={Person} /> */}
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("isf")
);

// Enable PWA support
registerServiceWorker();
