import React, { Component } from "react";

// Semantic
import { Menu, Icon } from "semantic-ui-react";

// Router
import { NavLink } from "react-router-dom";

export default class UserMenu extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { isAuthenticated } = this.props;

    const { onSignout } = this;

    if (isAuthenticated()) {
      return (
        <Menu.Menu position="right">
          <Menu.Item onClick={onSignout}>
            <Icon name="sign out" />Sign out
          </Menu.Item>
        </Menu.Menu>
      );
    } else {
      return (
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} link to="/signin" activeClassName="active">
            <Icon name="sign in" />Sign in
          </Menu.Item>
        </Menu.Menu>
      );
    }
  }
}
