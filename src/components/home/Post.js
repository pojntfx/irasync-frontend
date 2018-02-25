import React, { Component } from "react";

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
    const { title, text } = this.props;
    const { onUpvote, onDownvote } = this;

    return (
      <div>
        <div>{title}</div>
        <div>{text}</div>
        <button onClick={onUpvote}>Upvote</button>
        <button onClick={onDownvote}>Downvote</button>
        <hr />
      </div>
    );
  }
}
