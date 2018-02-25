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
import HeaderCommunity from "./components/HeaderCommunity";
import NavigationCommunity from './components/NavigationCommunity'
import Footer from "./components/Footer";

// Create Apollo Client
const client = new ApolloClient({ uri: "http://localhost:4000/" });

render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route path="/" component={Navigation} />
        <Route path="/" component={HeaderCommunity} />
        <Route path="/" component={NavigationCommunity}/>
        <Route exact path="/" component={Feed} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Footer} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// Enable PWA support
registerServiceWorker();
