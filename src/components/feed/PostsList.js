import React, { Component } from "react";

import { Card } from "semantic-ui-react";

export default class PostsList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map(post => {
          return (
            <Card key={post.title}>
              <Card.Header>{post.title}</Card.Header>
              <Card.Meta>{post.votes} votes</Card.Meta>
            </Card>
          );
        })}
      </div>
    );
  }
}
