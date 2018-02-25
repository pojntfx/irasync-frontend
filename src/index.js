import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Apollo client
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

render(<App />, document.getElementById("root"));
registerServiceWorker();
