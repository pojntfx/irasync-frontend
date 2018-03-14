import React, { Component } from "react";

// Semantic
import { Button, Icon } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class FileBar extends Component {
  render() {
    const {
      className,
      isNew,
      onDelete,
      onDiscard,
      onPublish,
      onSave
    } = this.props;

    return (
      <div className={className}>
        <FileActionGroup>
          {/* You can't delete a non-published post, so don't render it */}
          {isNew ? null : (
            <Button color="red" onClick={onDelete} type="button" size="small">
              <Icon name="trash" />Delete
            </Button>
          )}
          <Button color="orange" onClick={onDiscard} type="button" size="small">
            <Icon name="cancel" />Discard
          </Button>
        </FileActionGroup>
        <FileActionGroup>
          <Button
            secondary
            onClick={onPublish}
            size="small"
            type="submit"
            animated="vertical"
          >
            <Button.Content visible>
              <Icon name="send" />Publish
            </Button.Content>
            <Button.Content hidden>
              <Icon name="rocket" />
            </Button.Content>
          </Button>
          <Button.Or />
          <Button
            color="green"
            onClick={onSave}
            size="small"
            type="submit"
            animated="vertical"
          >
            <Button.Content visible>
              <Icon name="check" />Save
            </Button.Content>
            <Button.Content hidden>
              <Icon name="upload" />
            </Button.Content>
          </Button>
        </FileActionGroup>
      </div>
    );
  }
}

FileBar.propTypes = {
  className: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
  onDelete: PropTypes.func,
  onDiscard: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

const breakpoint = "488";

const FileActionGroup = styled(Button.Group)`
  @media (max-width: ${breakpoint}px) {
    &:last-child {
      margin-bottom: 1rem !important;
    }
  }
`;

export default styled(FileBar)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: ${breakpoint}px) {
    justify-content: flex-end;
    flex-direction: column-reverse;
  }
`;
