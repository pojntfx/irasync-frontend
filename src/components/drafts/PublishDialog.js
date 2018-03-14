import React, { Component } from "react";

// Semantic
import { Modal, Button } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class PublishDialog extends Component {
  onClose = () => {
    this.props.onCancel();
  };

  onPublish = () => {
    this.props.onPublish();
  };

  render() {
    const { onClose, onPublish } = this;

    const { className, active } = this.props;

    return (
      <Modal
        basic
        dimmer="inverted"
        open={active}
        onClose={onClose}
        className={className}
        size="small"
      >
        <Modal.Header>
          Are you sure you want to publish this draft?
        </Modal.Header>
        <Modal.Content>
          Once you{"'"}ve published this draft, it will be visible to the whole
          world.
        </Modal.Content>
        <Modal.Actions>
          <Button
            secondary
            icon="cancel"
            labelPosition="left"
            content="No, don't publish this draft"
            onClick={onClose}
          />
          <Button
            primary
            icon="send"
            labelPosition="left"
            content="Yes, publish this draft"
            onClick={onPublish}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

PublishDialog.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  active: PropTypes.bool
};

// Center the modal vertically
export default styled(PublishDialog)`
  margin: 0 auto !important;
  margin-top: 30vh !important;
`;
