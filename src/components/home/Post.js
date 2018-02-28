import React, { Component } from "react";

// Semantic
import { Card, Button, Icon } from "semantic-ui-react";

export default class Post extends Component {
  onUpvote = () => {
    const { id } = this.props;
    console.log(`Upvoted post ${id}!`);
  };

  onDownvote = () => {
    const { id } = this.props;
    console.log(`Downvoted post ${id}!`);
  };

  render() {
    const { title, text } = this.props;
    const { onUpvote, onDownvote } = this;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{text}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green" onClick={onUpvote} size="small">
            <Icon name="chevron up" />Upvote
          </Button>
          <Button basic color="red" onClick={onDownvote} size="small">
            <Icon name="chevron down" />Downvote
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
