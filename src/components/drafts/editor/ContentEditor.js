import React, { Component } from "react";

// Semantic
import { Form, Responsive } from "semantic-ui-react";

// Remarkable and Highlight.js
import Remarkable from "remarkable";
import hljs from "highlight.js";

// Styled components
import styled from "styled-components";

// Code highlighting css
import { codeHighlightingStyle } from "./CodeHighlighting";

class ContentEditor extends Component {
  onTitleInput = ({ target: { value } }) => {
    // Pass the title to the parent
    this.props.onTitleEdit(value);
  };

  onTextInput = ({ target: { value } }) => {
    // Pass the text to the parent
    this.props.onTextEdit(value);
  };

  textInMarkup = () => {
    const remarkable = new Remarkable("full", {
      html: true,
      linkify: true,
      typographer: true,
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) {}
        }

        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {}

        return ""; // use external default escaping
      }
    });
    return {
      __html: remarkable.render(this.props.text)
    };
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
              <div
                dangerouslySetInnerHTML={this.textInMarkup()}
                className="draft__markdown-preview"
              />
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

export default styled(ContentEditor)`
  /* Make images responsive */
  & .draft__markdown-preview > p > img {
    width: 100%;
  }
  /* Monokai sublime style for the code container */
  .draft__markdown-preview > pre {
    color: #f8f8f2;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #23241f;
  }
  /* Monokai sublime style for hljs */
  ${codeHighlightingStyle};
`;
