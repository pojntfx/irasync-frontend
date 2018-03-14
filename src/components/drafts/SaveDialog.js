import React, { Component } from "react";

// Semantic
import { Modal, Button } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class SaveDialog extends Component {
  onClose = () => {
    this.props.onCancel();
  };

  onSave = () => {
    this.props.onSave();
  };

  render() {
    const { onClose, onSave } = this;

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
          Are you sure you want to save your progress on this {postOrDraft}?
        </Modal.Header>
        <Modal.Content>
          Once you{"'"}ve saved your progress on this {postOrDraft}, if an older
          version existed, the older version will be gone forever (a long
          time!).
        </Modal.Content>
        <Modal.Actions>
          <Button
            secondary
            icon="cancel"
            labelPosition="left"
            content={`No, don't save my progress on this ${postOrDraft}`}
            onClick={onClose}
          />
          <Button
            primary
            icon="upload"
            labelPosition="left"
            content={`Yes, save my progress on this ${postOrDraft}`}
            onClick={onSave}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

SaveDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  active: PropTypes.bool,
  isPublished: PropTypes.bool
};

// Center the modal vertically
export default styled(SaveDialog)`
  margin: 0 auto !important;
  margin-top: 30vh !important;
`;
