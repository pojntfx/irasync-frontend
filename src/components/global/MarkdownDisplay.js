import React, { Component } from "react";

// Styled components
import styled from "styled-components";

// Code highlighting style
import { codeHighlightingStyle } from "../drafts/editor/CodeHighlighting";

// Remarkable and Highlight.js
import Remarkable from "remarkable";
import hljs from "highlight.js";

class MarkdownDisplay extends Component {
  // Returns a html string with the markup
  textInMarkup = text => {
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
      __html: remarkable.render(text)
    };
  };

  render() {
    const { textInMarkup } = this;
    const { className, content } = this.props;

    return (
      <div
        className={className}
        dangerouslySetInnerHTML={textInMarkup(content)}
      />
    );
  }
}

export default styled(MarkdownDisplay)`
  /* Make images responsive */
  & > p > img {
    width: 100%;
  }
  /* Monokai sublime style for the code container */
  & > pre {
    color: #f8f8f2;
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #23241f;
  }
  /* Monokai sublime style for hljs */
  ${codeHighlightingStyle};
`;
