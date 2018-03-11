import React, { Component } from "react";

// Semantic
import { Card, Button, Icon } from "semantic-ui-react";

// Components
import MarkdownDisplay from "../global/MarkdownDisplay";
import { CardActionGroup } from "../drafts/Draft";

// Post's age in a human-readable format
export const postAge = createdAt => {
  // Get the post's age in hours
  const timeDifferenceInHours =
    Math.floor(Date.now() - Date.parse(createdAt)) / 1000 / 3600;

  // Display the message
  if (Math.floor(timeDifferenceInHours / 24 / 365) === 1)
    return Math.floor(timeDifferenceInHours / 24 / 365) + " year";
  else if (timeDifferenceInHours > 8760)
    return Math.floor(timeDifferenceInHours / 24 / 365) + " years";
  else if (Math.floor(timeDifferenceInHours / 24) === 1)
    return Math.floor(timeDifferenceInHours / 24) + " day";
  else if (timeDifferenceInHours > 24)
    return Math.floor(timeDifferenceInHours / 24) + " days";
  else if (Math.floor(timeDifferenceInHours) === 1)
    return Math.floor(timeDifferenceInHours) + " hour";
  else if (timeDifferenceInHours > 1)
    return Math.floor(timeDifferenceInHours) + " hours";
  else if (Math.floor(timeDifferenceInHours * 60) === 1)
    // Since the time difference is always an integer, we can skip Math.floor in
    // the statements below from now on
    return Math.floor(timeDifferenceInHours * 60) + " minute";
  else if (timeDifferenceInHours * 60 > 1)
    return Math.floor(timeDifferenceInHours * 60) + " minutes";
  else if (Math.floor(timeDifferenceInHours * 3600) === 1)
    return Math.floor(timeDifferenceInHours * 3600) + " second";
  else if (timeDifferenceInHours * 3600 > 1)
    return Math.floor(timeDifferenceInHours * 3600) + " seconds";
  else return "A moment";
};

export default class Post extends Component {
  onUpvote = () => {
    const { id } = this.props;
    console.log(`Upvoted post ${id}!`);
  };

  onDownvote = () => {
    const { id } = this.props;
    console.log(`Downvoted post ${id}!`);
  };

  render() {
    const { title, author: { name }, text, createdAt } = this.props;
    const { onUpvote, onDownvote } = this;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            {postAge(createdAt)} ago by {name}
          </Card.Meta>
          <Card.Description>
            <MarkdownDisplay content={text} />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <CardActionGroup>
            <Button
              basic
              color="green"
              onClick={onUpvote}
              size="small"
              animated="vertical"
            >
              <Button.Content visible>
                <Icon name="chevron up" />Upvote
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow up" />
              </Button.Content>
            </Button>
            <Button
              basic
              color="red"
              onClick={onDownvote}
              size="small"
              animated="vertical"
            >
              <Button.Content visible>
                <Icon name="chevron down" />Downvote
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow down" />
              </Button.Content>
            </Button>
          </CardActionGroup>
        </Card.Content>
      </Card>
    );
  }
}
