import React, { Component } from "react";

// Semantic
import { Button, Icon } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

class FileBar extends Component {
  render() {
    const { className, onDelete, onDiscard, onPublish } = this.props;

    return (
      <div className={className}>
        <FileActionGroup>
          <Button color="red" onClick={onDelete} type="button" size="small">
            <Icon name="trash" />Delete
          </Button>
          <Button color="orange" onClick={onDiscard} type="button" size="small">
            <Icon name="cancel" />Discard
          </Button>
        </FileActionGroup>
        <FileActionGroup>
          <Button disabled secondary onClick={onPublish} size="small">
            <Icon name="send" />Publish
          </Button>
          <Button.Or />
          <Button color="green" size="small" type="submit" animated="vertical">
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
