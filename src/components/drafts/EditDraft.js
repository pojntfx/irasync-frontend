import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Queries
import { GET_DRAFTS } from "./DraftsList";

// Components
import DraftEditor from "./editor/DraftEditor";

class EditDraft extends Component {
  onSubmit = ({ title, text }) => {
    console.log("Saving draft");
    const { mutate } = this.props;
    mutate({
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

  render() {
    const { onSubmit } = this;
    return <DraftEditor onSubmit={onSubmit} />;
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

// Export the component with the mutation
export default graphql(POST_DRAFT)(EditDraft);
