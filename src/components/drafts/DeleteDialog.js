import React, { Component } from "react";

// Semantic
import { Modal, Button } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

class DeleteDialog extends Component {
  onClose = () => {
    this.props.onCancel();
  };

  onDelete = () => {
    this.props.onDelete();
  };

  render() {
    const { onClose, onDelete } = this;

    const { className, active, isPublished } = this.props;

    const postOrDraft = isPublished ? "post" : "draft";

    return (
      <Modal
        basic
        open={active}
        onClose={onClose}
        className={className}
        size="small"
      >
        <Modal.Header>
          Are you sure you want to delete this {postOrDraft}?
        </Modal.Header>
        <Modal.Content>
          Once you{"'"}ve deleted this {postOrDraft}, it will be gone forever (a
          long time!).
        </Modal.Content>
        <Modal.Actions>
          <Button
            secondary
            icon="cancel"
            labelPosition="left"
            content={`No, don't delete this ${postOrDraft}`}
            onClick={onClose}
          />
          <Button
            color="red"
            icon="trash"
            labelPosition="left"
            content={`Yes, delete this ${postOrDraft}`}
            onClick={onDelete}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

// Center the modal vertically
export default styled(DeleteDialog)`
  margin: 0 auto !important;
  margin-top: 30vh !important;
`;
