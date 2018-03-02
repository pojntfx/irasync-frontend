import React, { Component } from "react";

// Semantic
import { Menu } from "semantic-ui-react";

// Router
import { NavLink } from "react-router-dom";

// Components
import UserMenu from "./UserMenu";

export default class MainNavigation extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top">
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
            <Menu.Item
              as={NavLink}
              name="drafts"
              link
              to="/drafts"
              icon="pencil"
              activeClassName="active"
            />
          </Menu.Menu>
          <UserMenu {...this.props} />
        </Menu>
      </div>
    );
  }
}
