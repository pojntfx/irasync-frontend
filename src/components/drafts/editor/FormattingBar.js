import React, { Component } from "react";

// Semantic
import { Button, Icon } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// PropTypes
import PropTypes from "prop-types";

class FormattingBar extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <FormatActionGroup>
          <Button disabled icon>
            <Icon name="bold" />
          </Button>
          <Button disabled icon>
            <Icon name="italic" />
          </Button>
        </FormatActionGroup>
        <FormatActionGroup>
          <Button disabled icon>
            <Icon name="code" />
          </Button>
          <Button disabled icon>
            <Icon name="quote left" />
          </Button>
        </FormatActionGroup>
        <FormatActionGroup>
          <Button disabled icon>
            <Icon name="unordered list" />
          </Button>
          <Button disabled icon>
            <Icon name="ordered list" />
          </Button>
        </FormatActionGroup>
        <FormatActionGroup>
          <Button disabled icon>
            <Icon name="video" />
          </Button>
          <Button disabled icon>
            <Icon name="image" />
          </Button>
        </FormatActionGroup>
      </div>
    );
  }
}

FormattingBar.propTypes = {
  className: PropTypes.string.isRequired
};

const FormatActionGroup = styled(Button.Group)`
  &:not(:last-child) {
    margin-right: 1rem !important;
  }
`;

// Make side-scrolling possible
export default styled(FormattingBar)`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow-x: auto;
`;
