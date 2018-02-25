import React, { Component } from "react";
import { Container, Loader, Dimmer, Header, Icon } from "semantic-ui-react";

// Apollo Client
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// Components
import PostsList from "../components/feed/PostsList";

// Queries
const GET_POSTS = gql`
  query {
    feed {
      id
      title
      text
      author {
        name
      }
      isPublished
    }
  }
`;

// Loading screen
const LoadingScreen = () => {
  return (
    <Dimmer active inverted>
      <Loader>Loading</Loader>
    </Dimmer>
  );
};

// Error screen
const ErrorScreen = () => {
  return (
    <Header as="h2" icon textAlign="center">
      <Icon name="warning sign" color="red" />
      Error while loading the feed.
    </Header>
  );
};

export default class Feed extends Component {
  render() {
    return (
      <div>
        <Container>
          <Query query={GET_POSTS}>
            {({ loading, error, data }) => {
              if (loading) return <LoadingScreen />;
              if (error) return <ErrorScreen />;

              return <PostsList posts={data.feed} />;
            }}
          </Query>
        </Container>
      </div>
    );
  }
}
