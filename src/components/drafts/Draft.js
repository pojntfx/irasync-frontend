import React, { Component } from "react";

// Semantic
import { Card, Button, Icon } from "semantic-ui-react";

// Human-readable post/draft age
import { postAge } from "../home/Post";

// Styled components
import styled from "styled-components";

// Components
import MarkdownDisplay from "../global/MarkdownDisplay";

const CardActionGroup = styled(Button.Group)`
  overflow-x: auto;
  display: flex;
  flex-wrap: none;
`;

export default class Draft extends Component {
  onPublish = () => {
    const { id } = this.props;
    console.log(`Published draft ${id}!`);
  };

  onEdit = () => {
    const { id } = this.props;
    console.log(`Editing draft ${id}!`);
  };

  onDelete = () => {
    const { id } = this.props;
    this.props.onDelete(id);
  };

  render() {
    const { title, text, createdAt } = this.props;
    const { onPublish, onEdit, onDelete } = this;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>Created {postAge(createdAt)} ago</Card.Meta>
          <Card.Description>
            <MarkdownDisplay content={text} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <CardActionGroup>
            <Button
              disabled
              basic
              color="green"
              onClick={onPublish}
              size="small"
            >
              <Icon name="send" />Publish
            </Button>
            <Button disabled basic color="blue" onClick={onEdit} size="small">
              <Icon name="edit" />Edit
            </Button>
            <Button basic color="red" onClick={onDelete} size="small">
              <Icon name="trash" />Delete
            </Button>
          </CardActionGroup>
        </Card.Content>
      </Card>
    );
  }
}
