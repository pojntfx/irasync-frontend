import React from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Components
import Post from "./Post";
import Loading from "./Loading";
import Error from "./Error";

// Template
function FeedTemplate({ data: { loading, error, feed } }) {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <div>{feed.map(post => <Post key={post.id} {...post} />)}</div>;
}

// Get all public posts from backend
const GET_FEED = gql`
  query {
    feed {
      id
      title
      text
      author {
        name
      }
    }
  }
`;

// Export the component with data
export const Feed = graphql(GET_FEED)(FeedTemplate);
