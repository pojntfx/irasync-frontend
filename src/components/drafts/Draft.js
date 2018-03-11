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
import DeleteDialog from "./DeleteDialog";

export const CardActionGroup = styled(Button.Group)`
  overflow-x: auto;
  display: flex;
  flex-wrap: none;
`;

export default class Draft extends Component {
  state = {
    publishModalIsActive: false,
    deleteModalIsActive: false
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
    // Since this is being used with both dialogs, this will determine which dialog
    // has emitted an onCancel event.
    this.state.publishModalIsActive
      ? this.setState({
          publishModalIsActive: false
        })
      : this.setState({
          deleteModalIsActive: false
        });
  };

  onEdit = () => {
    const { id } = this.props;
    this.props.onEdit(id);
  };

  onDeleteDialog = () => {
    this.setState({
      deleteModalIsActive: true
    });
  };

  onDelete = () => {
    this.setState({
      deleteModalIsActive: false
    });
    const { id } = this.props;
    this.props.onDelete(id);
  };

  render() {
    const { title, text, createdAt, isPublished } = this.props;
    const {
      onPublishDialog,
      onPublish,
      onCancel,
      onEdit,
      onDeleteDialog,
      onDelete
    } = this;
    const { publishModalIsActive, deleteModalIsActive } = this.state;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>{postAge(createdAt)} ago</Card.Meta>
          <Card.Description>
            <MarkdownDisplay content={text} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <CardActionGroup>
            {isPublished ? null : (
              <PublishDialog
                onPublish={onPublish}
                onCancel={onCancel}
                active={publishModalIsActive}
              />
            )}
            {isPublished ? null : (
              <Button color="green" onClick={onPublishDialog} size="small">
                <Icon name="send" />Publish
              </Button>
            )}
            {isPublished ? null : (
              // It should navigate all the way up, that's why there is a href
              // #compose-a-draft could be used if there would be another section
              // above the editor
              <Button
                color="blue"
                onClick={onEdit}
                as="a"
                href="#"
                size="small"
              >
                <Icon name="edit" />Edit
              </Button>
            )}
            <DeleteDialog
              onDelete={onDelete}
              onCancel={onCancel}
              active={deleteModalIsActive}
              isPublished={isPublished}
            />
            <Button color="red" onClick={onDeleteDialog} size="small">
              <Icon name="trash" />Delete
            </Button>
          </CardActionGroup>
        </Card.Content>
      </Card>
    );
  }
}
