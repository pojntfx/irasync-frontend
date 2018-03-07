import React, { Component } from "react";

// Semantic
import { Card, Button, Icon } from "semantic-ui-react";

export default class Draft extends Component {
  onPublish = () => {
    const { id } = this.props;
    console.log(`Published draft ${id}!`);
  };

  onDelete = () => {
    const { id } = this.props;
    console.log(`Deleted draft ${id}!`);
  };

  postAge = () => {
    // Get the draft's age in hours
    const timeDifferenceInHours =
      Math.floor(Date.now() - Date.parse(this.props.createdAt)) / 1000 / 3600;

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

  render() {
    const { title, text } = this.props;
    const { onPublish, onDelete, postAge } = this;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>Created {postAge()} ago</Card.Meta>
          <Card.Description>{text}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="green" onClick={onPublish} size="small">
            <Icon name="send" />Publish
          </Button>
          <Button basic color="red" onClick={onDelete} size="small">
            <Icon name="trash" />Delete
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
