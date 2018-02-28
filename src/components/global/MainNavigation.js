import React, { Component } from "react";

// Semantic
import { Menu } from "semantic-ui-react";

// Router
import { NavLink } from "react-router-dom";

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
              to="/feed"
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
          <Menu.Menu position="right">
            <Menu.Item
              as={NavLink}
              name="sign in"
              link
              to="/signup"
              icon="sign in"
              activeClassName="active"
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
