import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Queries
import { GET_DRAFTS, POST_DELETE_POST } from "./DraftsList";

// Components
import DraftEditor from "./editor/DraftEditor";

class EditDraft extends Component {
  onSubmit = ({ title, text }) => {
    console.log("Saving draft");
    const { postDraftMutation } = this.props;
    postDraftMutation({
      variables: {
        title,
        text
      },
      refetchQueries: [
        {
          query: GET_DRAFTS
        }
      ]
    })
      .then(({ data: { createDraft: { id } } }) => {
        console.log("Created draft with id:", id);
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  onDelete = ({ id }) => {
    console.log("Deleting post");
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
      .then(({ data: { createDraft: { id } } }) => {
        console.log("Deleted draft with id:", id);
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  render() {
    const { onSubmit, onDelete } = this;
    return <DraftEditor id="ID_WILL_BE_HERE" onSubmit={onSubmit} onDelete={onDelete} />;
  }
}

// Send signin data and recieve token
const POST_DRAFT = gql`
  mutation($title: String!, $text: String!) {
    createDraft(title: $title, text: $text) {
      id
    }
  }
`;

// Export the component with the mutations
export default compose(
  graphql(POST_DRAFT, { name: "postDraftMutation" }),
  graphql(POST_DELETE_POST, { name: "deletePostMutation" })
)(EditDraft);
