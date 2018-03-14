import React, { Component } from "react";

// Styled components
import styled from "styled-components";

// Semantic
import { Menu } from "semantic-ui-react";

// Router
import { NavLink } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// Components
import UserMenu from "./UserMenu";

class MainNavigation extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { onSignout } = this;
    const { className, isAuthenticated } = this.props;

    return (
      <Menu fixed="top" className={className}>
        <Menu.Menu position="left">
          <Menu.Item
            as={NavLink}
            name="feed"
            link
            to="/"
            exact
            icon="feed"
            activeClassName="active"
          />
          {/* Return the "compose" button if user is authenticated */}
          {isAuthenticated() ? (
            <Menu.Item
              as={NavLink}
              name="compose"
              link
              to="/compose"
              icon="pencil"
              activeClassName="active"
            />
          ) : null}
        </Menu.Menu>
        <UserMenu {...this.props} onSignout={onSignout} />
      </Menu>
    );
  }
}

MainNavigation.propTypes = {
  onSignout: PropTypes.func,
  className: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.func.isRequired
};

export default styled(MainNavigation)`
  /* Enable overflow on mobile */
  overflow-x: auto;
`;
