import React, { Component } from "react";

import { Container, Input, Menu, Segment, Icon } from "semantic-ui-react";

import { Link } from "react-router-dom";

export default class Navigation extends Component {
  state = { activeItem: "posts" };

  handleItemClick = (event, { name }) => {
    this.setState({
      activeItem: name
    });
  };
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Container>
          <Menu pointing stackable>
            <Menu.Item
              name="posts"
              active={activeItem === "posts"}
              onClick={this.handleItemClick}
            >
              <Icon name="feed" />
              Posts
            </Menu.Item>

            <Menu.Item
              name="files"
              active={activeItem === "files"}
              onClick={this.handleItemClick}
            >
              <Icon name="file" />
              Files
            </Menu.Item>

            <Menu.Item
              name="apps"
              active={activeItem === "apps"}
              onClick={this.handleItemClick}
            >
              <Icon name="grid layout" />
              Apps
            </Menu.Item>

            <Menu.Item
              name="wiki"
              active={activeItem === "wiki"}
              onClick={this.handleItemClick}
            >
              <Icon name="info" />
              Wiki
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item
                name="search"
                active={activeItem === "search"}
                onClick={this.handleItemClick}
              >
                <Icon name="search" />
                Local search
              </Menu.Item>
              <Menu.Item
                name="settings"
                active={activeItem === "settings"}
                onClick={this.handleItemClick}
              >
                <Icon name="settings" />
                Settings
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </div>
    );
  }
}
