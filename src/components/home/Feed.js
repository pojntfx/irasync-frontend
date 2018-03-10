import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Delete post mutation
import { POST_DELETE_POST } from "../drafts/DraftsList";

// Components
import Post from "./Post";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
class Feed extends Component {
  onDelete = id => {
    const { mutate } = this.props;
    mutate({
      variables: {
        id
      },
      refetchQueries: [
        {
          query: GET_FEED
        }
      ]
    })
      .then(({ data: { deletePost: { id } } }) => {
        console.log("Deleted post with id:", id);
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  render() {
    const { data: { loading, error, feed } } = this.props;

    if (loading) return <Loading />;
    if (error) return <Error />;
    else if (!feed[0])
      return (
        <DataMissing message="There don't seem to be any posts in this Irasync yet." />
      );
    else
      return (
        <div>
          {feed
            .concat()
            .reverse()
            .map(post => <Post key={post.id} {...post} />)}
        </div>
      );
  }
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
export default compose(graphql(GET_FEED), graphql(POST_DELETE_POST))(Feed);
