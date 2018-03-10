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

    const { className, active } = this.props;

    return (
      <Modal
        basic
        open={active}
        onClose={onClose}
        className={className}
        size="small"
      >
        <Modal.Header>Are you sure you want to delete this draft?</Modal.Header>
        <Modal.Content>
          Once you{"'"}ve deleted this draft, it will be gone forever (a long
          time!).
        </Modal.Content>
        <Modal.Actions>
          <Button
            secondary
            icon="cancel"
            labelPosition="left"
            content="No, don't delete this draft"
            onClick={onClose}
          />
          <Button
            color="red"
            icon="trash"
            labelPosition="left"
            content="Yes, delete this draft"
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
