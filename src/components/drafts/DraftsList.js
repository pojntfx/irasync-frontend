import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Components
import Draft from "./Draft";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
class DraftList extends Component {
  onDelete = id => {
    console.log(`Deleted draft ${id}!`);
    const { deletePostMutation } = this.props;
    deletePostMutation({
      variables: {
        id
      },
      refetchQueries: [
        {
          query: GET_DRAFTS
        }
      ]
    })
      .then(({ data: { deletePost: { id } } }) => {
        console.log("Deleted draft with id:", id);
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  render() {
    const { data: { loading, error, drafts } } = this.props;

    const { onDelete } = this;

    if (loading) return <Loading />;
    else if (error) return <Error />;
    else if (!drafts[0])
      return <DataMissing message="You have not yet created any drafts." />;
    else {
      // Reverse the drafts to show the most recent one
      const reversedDrafts = drafts.concat().reverse();
      return (
        <div>
          {reversedDrafts.map(post => (
            <Draft key={post.id} {...post} onDelete={onDelete} />
          ))}
        </div>
      );
    }
  }
}

// Get all public drafts from backend
export const GET_DRAFTS = gql`
  query {
    drafts {
      id
      title
      text
      createdAt
    }
  }
`;

// Delete a post or draft
export const POST_DELETE_POST = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

// Export the component with data and mutation
export const DraftsList = compose(
  graphql(GET_DRAFTS, {
    options: {
      // Ignore is used here because if the user logs out while he is looking at his drafts he'll
      // get an error, and since a component handels them this is unneccessary.
      errorPolicy: "ignore"
    }
  }),
  graphql(POST_DELETE_POST, { name: "deletePostMutation" })
)(DraftList);
