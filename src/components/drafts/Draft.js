import React, { Component } from "react";

// Semantic
import { Card, Button, Icon } from "semantic-ui-react";

// Human-readable post/draft age
import { postAge } from "../home/Post";

// Styled components
import styled from "styled-components";

// Components
import MarkdownDisplay from "../global/MarkdownDisplay";
import PublishDialog from "./PublishDialog";

const CardActionGroup = styled(Button.Group)`
  overflow-x: auto;
  display: flex;
  flex-wrap: none;
`;

export default class Draft extends Component {
  state = {
    publishModalIsActive: false
  };

  onPublishDialog = () => {
    this.setState({
      publishModalIsActive: true
    });
  };

  onPublish = () => {
    this.setState({
      publishModalIsActive: false
    });
    const { id } = this.props;
    this.props.onPublish(id);
  };

  onCancel = () => {
    this.setState({
      publishModalIsActive: false
    });
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
    const { onPublishDialog, onPublish, onCancel, onEdit, onDelete } = this;
    const { publishModalIsActive } = this.state;

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
            <PublishDialog
              onPublish={onPublish}
              onCancel={onCancel}
              active={publishModalIsActive}
            />
            <Button basic color="green" onClick={onPublishDialog} size="small">
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
