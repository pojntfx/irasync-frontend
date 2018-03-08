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
  state = {
    title: "",
    text: "",
    loading: false
  };

  onDelete = () => {
    console.log("Deleting draft");
  };

  onDiscard = () => {
    console.log("Discarding draft");
  };

  onPublish = () => {
    console.log("Publishing draft");
  };

  onSubmit = event => {
    // This means that the user pressed save
    // Don't reload
    event.preventDefault();
    // Show the loading indicator
    this.setState({
      loading: true
    });
    const { title, text } = this.state;
    this.props.onSubmit({ title, text });
    // Clear the form
    this.setState({
      title: "",
      text: "",
      loading: false
    });
  };

  setTitle = title => {
    this.setState({
      title
    });
  };

  setText = text => {
    this.setState({
      text
    });
  };

  render() {
    const {
      onDelete,
      onDiscard,
      onPublish,
      onSubmit,
      setTitle,
      setText
    } = this;

    const { text, title, loading } = this.state;
    const { className } = this.props;

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
              onTitleEdit={setTitle}
              onTextEdit={setText}
            />
          </Segment>
          <Segment>
            <FileBar
              onDelete={onDelete}
              onDiscard={onDiscard}
              onPublish={onPublish}
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
