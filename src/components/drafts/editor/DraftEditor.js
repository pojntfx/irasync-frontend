import React, { Component } from "react";

// Semantic
import { Segment, Form } from "semantic-ui-react";

// Styled component
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

// Components
import FormattingBar from "./FormattingBar";
import ContentEditor from "./ContentEditor";
import FileBar from "./FileBar";

class DraftEditor extends Component {
  render() {
    const {
      className,
      onSubmit,
      loading,
      title,
      text,
      onTitleEdit,
      onTextEdit,
      isNew,
      onDelete,
      onDiscard,
      onPublish,
      onSave
    } = this.props;

    return (
      <Form onSubmit={onSubmit} className={className} loading={loading}>
        <Segment.Group>
          <Segment>
            <FormattingBar />
          </Segment>
          <Segment>
            <ContentEditor
              title={title}
              text={text}
              onTitleEdit={onTitleEdit}
              onTextEdit={onTextEdit}
            />
          </Segment>
          <Segment>
            <FileBar
              isNew={isNew}
              onDelete={onDelete}
              onDiscard={onDiscard}
              onPublish={onPublish}
              onSave={onSave}
            />
          </Segment>
        </Segment.Group>
      </Form>
    );
  }
}

DraftEditor.propTypes = {
  className: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onTitleEdit: PropTypes.func.isRequired,
  onTextEdit: PropTypes.func.isRequired,
  isNew: PropTypes.bool,
  onDelete: PropTypes.func,
  onDiscard: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default styled(DraftEditor)`
  margin-bottom: 1rem;
`;
