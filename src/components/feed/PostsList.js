import React, { Component } from "react";

import { Card } from "semantic-ui-react";

export default class PostsList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map(post => {
          return (
            <Card key={post.title} fluid>
              <Card.Header>{post.title}</Card.Header>
              <Card.Meta>By {post.author.name}</Card.Meta>
              <Card.Description>{post.text}</Card.Description>
            </Card>
          );
        })}
      </div>
    );
  }
}
