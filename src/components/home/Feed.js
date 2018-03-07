import React from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Components
import Post from "./Post";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
function FeedTemplate({ data: { loading, error, feed } }) {
  if (loading) return <Loading />;
  if (error) return <Error />;
  else if (!feed[0])
    return (
      <DataMissing message="There do not seem to be any posts in this Irasync yet." />
    );
  else return <div>{feed.map(post => <Post key={post.id} {...post} />)}</div>;
}

// Get all public posts from backend
const GET_FEED = gql`
  query {
    feed {
      id
      title
      createdAt
      author {
        name
      }
      text
    }
  }
`;

// Export the component with data
export const Feed = graphql(GET_FEED)(FeedTemplate);
