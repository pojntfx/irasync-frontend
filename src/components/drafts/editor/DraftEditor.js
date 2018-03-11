import React, { Component } from "react";

// Semantic
import { Segment, Form } from "semantic-ui-react";

// Styled component
import styled from "styled-components";

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

export default styled(DraftEditor)`
  margin-bottom: 1rem;
`;
