import React, { Component } from "react";
import { Container } from "semantic-ui-react";

// Components
import PostsList from "../components/feed/PostsList";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: "asdf", votes: 5 },
        { title: "rty", votes: 45 },
        { title: "asdfew", votes: 120 }
      ]
    };
  }
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <Container>
          <PostsList posts={posts} />
        </Container>
      </div>
    );
  }
}
