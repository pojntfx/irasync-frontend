import React, { Component } from "react";

// Semantic
import { Card, Button, Icon } from "semantic-ui-react";

// Human-readable post/draft age
import { postAge } from "../home/Post";

// Components
import MarkdownDisplay from "../global/MarkdownDisplay";

export default class Draft extends Component {
  onPublish = () => {
    const { id } = this.props;
    console.log(`Published draft ${id}!`);
  };

  onDelete = () => {
    const { id } = this.props;
    console.log(`Deleted draft ${id}!`);
  };

  render() {
    const { title, text, createdAt } = this.props;
    const { onPublish, onDelete } = this;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>Created {postAge(createdAt)} ago</Card.Meta>
          <MarkdownDisplay content={text} />
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green" onClick={onPublish} size="small">
            <Icon name="send" />Publish
          </Button>
          <Button basic color="red" onClick={onDelete} size="small">
            <Icon name="trash" />Delete
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
