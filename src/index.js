import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

// Semantic UI styles (common)
import "semantic-ui-css/semantic.min.css";

// Apollo client
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// React router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes
import Feed from "./routes/Feed";
import Login from "./routes/Login";

// Components
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

render(
  <Router>
    <div>
      <Route path="/" component={Navigation} />
      <Route exact path="/" component={Feed} />
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Footer} />
    </div>
  </Router>,
  document.getElementById("root")
);

// Enable PWA support
registerServiceWorker();
