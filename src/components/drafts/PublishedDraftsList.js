import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Semantic
import { Transition, List } from "semantic-ui-react";

// Reusable mutations
import { POST_DELETE_POST } from "./DraftsList";

// Components
import Draft from "./Draft";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
class PublishedDraftsList extends Component {
  onDelete = id => {
    const { deletePostMutation } = this.props;
    deletePostMutation({
      variables: {
        id
      },
      refetchQueries: [
        {
          query: GET_YOUR_POSTS
        }
      ]
    })
      .then(({ data: { deletePost: { id } } }) => {
        console.log("Deleted posts with id:", id);
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  render() {
    const { data: { loading, error, drafts } } = this.props;

    const { onPublish, onDelete } = this;

    if (loading) return <Loading />;
    else if (error) return <Error />;
    else if (!drafts[0])
      return <DataMissing message="You have not yet published any posts." />;
    else {
      return (
        <Transition.Group as={List} duration={250} animation="scale">
          {// Reverse the posts to show the most recent one
          drafts
            .concat()
            .reverse()
            .map(post => (
              <List.Item key={post.id}>
                <Draft
                  {...post}
                  isPublished={true}
                  onPublish={onPublish}
                  onDelete={onDelete}
                />
              </List.Item>
            ))}
        </Transition.Group>
      );
    }
  }
}

const GET_YOUR_POSTS = gql`
  query {
    drafts(arePublished: true) {
      id
      title
      text
      createdAt
    }
  }
`;

// Export the component with data and mutation
export default compose(
  graphql(GET_YOUR_POSTS, {
    options: {
      // Ignore is used here because if the user logs out while he is looking at his drafts he'll
      // get an error, and since a component handels them this is unneccessary.
      errorPolicy: "ignore"
    }
  }),
  graphql(POST_DELETE_POST, { name: "deletePostMutation" })
)(PublishedDraftsList);
