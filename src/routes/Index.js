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
import Compose from "./Compose";
import Signin from "./Signin";
import Signup from "./Signup";
import { Private as PrivateRoute } from "./Private";
import FourZeroFour from "./404";

// Components
import MainNavigation from "../components/global/MainNavigation";
import Loading from "../components/global/Loading";

// PropTypes
import PropTypes from "prop-types";

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

          {/* Compose */}
          <PrivateRoute
            path="/compose"
            isAuthenticated={authorizationState}
            render={props => (
              <Compose
                isAuthenticated={() => authorizationState()}
                onSignout={() => onSignout()}
                {...props}
              />
            )}
          />
          <PrivateRoute
            path="/co"
            isAuthenticated={authorizationState}
            render={() => <Redirect to="/compose" />}
          />

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

          {/* Signup */}
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup
                isAuthenticated={() => authorizationState()}
                onSuccessfullSignup={() => refetchAuthState()}
                onSignout={() => onSignout()}
                {...props}
              />
            )}
          />
          <Route exact path="/su" render={() => <Redirect to="/signup" />} />

          {/* 404 */}
          <Route component={FourZeroFour} />

          {/* <Route path="/c" component={Community} />
          <Route path="/community" component={Community} />
    
          <Route path="/p" component={Person} />
          <Route path="/community" component={Person} /> */}
        </Switch>
      </Router>
    );

    const LoadingUI = () => (
      <Router>
        <Switch>
          <Route
            path="/"
            render={() => (
              <div>
                <MainNavigation location="" isAuthenticated={() => false} />
                <Loading />
              </div>
            )}
          />
          <Route />
        </Switch>
      </Router>
    );
    // For stronger security, this could be run on every route change. This in however not
    // being done for better performance.
    let authorizationState = () => (me ? true : false);

    const refetchAuthState = () => {
      refetch();
    };

    if (loading)
      // Loading is handled in the routes, but if the auth state is being checked
      // this is being done here to prevent the need for a reload
      return <LoadingUI />;
    else if (error) return <IndexUI />;
    else return <IndexUI />;
  }
}

Index.propTypes = {
  onSignout: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

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
