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

// Router
import Index from "./routes/index";

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
    <Index />
  </ApolloProvider>,
  document.getElementById("isf")
);

// Enable PWA support
registerServiceWorker();
