import React, { Component } from "react";

import { Input, Menu, Segment, Icon } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = { activeItem: "feed" };

  handleItemClick = (event, { name }) => {
    this.setState({
      activeItem: name
    });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu stackable>
          <Menu.Item header>Irasync</Menu.Item>

          <Menu.Item
            name="feed"
            active={activeItem === "feed"}
            onClick={this.handleItemClick}
          >
            <Icon name="newspaper" />
            Feed
          </Menu.Item>

          <Menu.Item
            name="communities"
            active={activeItem === "communities"}
            onClick={this.handleItemClick}
          >
            <Icon name="hashtag" />
            Communities
          </Menu.Item>

          <Menu.Item
            name="people"
            active={activeItem === "people"}
            onClick={this.handleItemClick}
          >
            <Icon name="users" />
            People
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="database" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="signup"
              active={activeItem === "signup"}
              onClick={this.handleItemClick}
            >
              <Icon name="sign in" />
              Sign Up
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
