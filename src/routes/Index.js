import React, { Component } from "react";

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Routes/Screens
import Home from "./Home";
import Signin from "./Signin";
import { Signup } from "./Signup";
import { Private as PrivateRoute } from "./Private";
import FourZeroFour from "./404";

// Components
import Loading from "../components/global/Loading";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class Index extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { data: { loading, error, me, refetch } } = this.props;

    const { onSignout } = this;

    const IndexUI = () => (
      <Router>
        <Switch>
          {/* Home */}
          <Route
            exact
            path="/"
            render={props => (
              <Home
                isAuthenticated={() => authorizationState()}
                onSignout={() => onSignout()}
                {...props}
              />
            )}
          />
          <Route exact path="/feed" render={() => <Redirect to="/" />} />
          <Route exact path="/f" render={() => <Redirect to="/" />} />

          {/* Drafts */}
          <PrivateRoute
            path="/drafts"
            isAuthenticated={authorizationState}
            render={props => (
              <Home
                isAuthenticated={() => authorizationState()}
                onSignout={() => onSignout()}
                {...props}
              />
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
                onSuccessfullSignin={() => refetchAuthState()}
                onSignout={() => onSignout()}
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
    );

    // For stronger security, this could be run on every route change. This in however not
    // being done for better performance.
    let authorizationState = () => (me ? true : false);

    const refetchAuthState = () => {
      refetch();
    };

    if (loading) {
      return <Loading />;
    } else if (error) {
      return <IndexUI />;
    } else {
      return <IndexUI />;
    }
  }
}

// Get user id: if it can be queried, the user is authenticated.
const GET_CURRENT_USER_ID = gql`
  query {
    me {
      id
    }
  }
`;

// Export the component with data
export default graphql(GET_CURRENT_USER_ID, {
  options: {
    // Ignore is used here because the error is expected since it is is used to
    // check whether the user is authenticated or not
    errorPolicy: "ignore"
  }
})(Index);
