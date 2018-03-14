import React from "react";

// Semantic
import { Button, Image, Card, Icon } from "semantic-ui-react";

// Styled components
import styled from "styled-components";

// React router
import { Link } from "react-router-dom";

// PropTypes
import PropTypes from "prop-types";

// Rabbit picture for ... purposes
import rabbit from "../../assets/404-rabbit.jpg";

const PageNotFound = ({ className }) => (
  <div className={className}>
    <Card>
      <Image src={rabbit} centered />
      <Card.Content>
        <Card.Header>
          {" "}
          Nom nom nom ... whoops ... 404, this page does not exist (anymore) :(
        </Card.Header>
        <Card.Description>
          Look at the sweet little rabbit above. If he would be responsible for
          this page{"'"}s absence, would you do anything to him? We hope not.
          Now imagine this rabbit is us. Would you do anything to us? Please ...
          don{"'"}t.
        </Card.Description>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button.Group>
          <Button
            as="a"
            href="https://duckduckgo.com/"
            secondary
            animated="fade"
          >
            <Button.Content visible>Get help</Button.Content>
            <Button.Content hidden>
              <Icon name="help" />
            </Button.Content>
          </Button>
          <Button.Or />
          <Button as={Link} to="/" primary>
            Go to the feed
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  </div>
);

PageNotFound.propTypes = {
  className: PropTypes.string.isRequired
};

// Center the card
export default styled(PageNotFound)`
  padding: 1rem;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
