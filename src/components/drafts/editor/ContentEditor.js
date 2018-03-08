import React, { Component } from "react";

// Semantic
import { Form } from "semantic-ui-react";

export default class ContentEditor extends Component {
  onTitleInput = ({ target: { value } }) => {
    // Pass the title to the parent
    this.props.onTitleEdit(value);
  };

  onTextInput = ({ target: { value } }) => {
    // Pass the text to the parent
    this.props.onTextEdit(value);
  };

  render() {
    const { onTitleInput, onTextInput } = this;

    const { title, text } = this.props;

    return (
      <div>
        <Form.Field>
          <Form.Input
            as="input"
            required
            placeholder="A nice and short title"
            value={title}
            onChange={onTitleInput}
            control=""
            maxLength="60"
          />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            as="textarea"
            required
            placeholder="Your story"
            value={text}
            onChange={onTextInput}
            control=""
            maxLength="768"
          />
        </Form.Field>
      </div>
    );
  }
}
