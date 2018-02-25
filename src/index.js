import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Semantic UI styles (common)
import "semantic-ui-css/semantic.min.css";

// Apollo client
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// React router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes/Screens
import Home from "./routes/Home";
import Login from "./routes/Login";

// Create Apollo Client
const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000",
    credentials: "include"
  }),
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        {/* Home */}
        <Route exact path="/" component={Home} />
        <Route path="/f" component={Home} />
        <Route path="/feed" component={Home} />

        {/* Login */}
        <Route exact path="/l" component={Login} />
        <Route path="/login" component={Login} />

        {/* <Route path="/c" component={Community} />
        <Route path="/community" component={Community} />

        <Route path="/p" component={Person} />
        <Route path="/community" component={Person} /> */}
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// Enable PWA support
registerServiceWorker();
