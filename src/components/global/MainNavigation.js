import React, { Component } from "react";

// Semantic
import { Menu } from "semantic-ui-react";

// Router
import { NavLink } from "react-router-dom";

// Components
import UserMenu from "./UserMenu";

export default class MainNavigation extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { onSignout } = this;

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
            {/* Return the "drafts" button if user is authenticated */}
            {this.props.isAuthenticated() ? (
              <Menu.Item
                as={NavLink}
                name="drafts"
                link
                to="/drafts"
                icon="pencil"
                activeClassName="active"
              />
            ) : null}
          </Menu.Menu>
          <UserMenu {...this.props} onSignout={onSignout} />
        </Menu>
      </div>
    );
  }
}
