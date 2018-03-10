import React, { Component } from "react";

// Semantic
import { Form, Responsive } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// Components
import MarkdownDisplay from "../../global/MarkdownDisplay";

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

    const { title, text, className } = this.props;

    return (
      <div className={className}>
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
        <DraftWrapper>
          <DraftColumn>
            <Form.Field>
              <label>Content</label>
              <Form.TextArea
                as="textarea"
                required
                placeholder="Your story in **markdown**"
                value={text}
                onChange={onTextInput}
                control=""
                maxLength="768"
              />
            </Form.Field>
          </DraftColumn>
          <DraftColumn>
            <Form.Field>
              <label>Preview</label>
              <MarkdownDisplay content={text} />
            </Form.Field>
          </DraftColumn>
        </DraftWrapper>
      </div>
    );
  }
}

const DraftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DraftColumn = styled.div`
  width: 50%;
  &:first-child {
    padding-right: 0.5rem;
  }
  &:last-child {
    padding-left: 0.5rem;
  }
  @media (max-width: ${Responsive.onlyMobile.maxWidth}px) {
    width: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
    &:last-child {
      margin-top: 1rem;
    }
  }
`;
