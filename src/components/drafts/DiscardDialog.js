import React, { Component } from "react";

// Semantic
import { Modal, Button } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class DiscardDialog extends Component {
  onClose = () => {
    this.props.onCancel();
  };

  onDiscard = () => {
    this.props.onDiscard();
  };

  render() {
    const { onClose, onDiscard } = this;

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
          Are you sure you want to discard your progress on this {postOrDraft}?
        </Modal.Header>
        <Modal.Content>
          Once you{"'"}ve discarded your progress on this {postOrDraft}, the
          progress will be gone forever (a long time!).
        </Modal.Content>
        <Modal.Actions>
          <Button
            secondary
            icon="cancel"
            labelPosition="left"
            content={`No, don't discard my progress on this ${postOrDraft}`}
            onClick={onClose}
          />
          <Button
            color="orange"
            icon="trash"
            labelPosition="left"
            content={`Yes, discard my progress on this ${postOrDraft}`}
            onClick={onDiscard}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

DiscardDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onDiscard: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  active: PropTypes.bool,
  isPublished: PropTypes.bool
};

// Center the modal vertically
export default styled(DiscardDialog)`
  margin: 0 auto !important;
  margin-top: 30vh !important;
`;
