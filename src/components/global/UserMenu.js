import React, { Component } from "react";

// Semantic
import { Menu, Icon } from "semantic-ui-react";

// Router
import { NavLink } from "react-router-dom";

export default class UserMenu extends Component {
  render() {
    const { isAuthenticated } = this.props;

    if (isAuthenticated()) {
      return (
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} link to="/drafts" activeClassName="active">
            <Icon name="user" />Profile
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
