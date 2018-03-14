import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Semantic
import { Transition, List } from "semantic-ui-react";

// PropTypes
import PropTypes from "prop-types";

// Components
import Draft from "./Draft";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
class DraftsList extends Component {
  onDelete = id => {
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

  onPublish = id => {
    const { publishDraftMutation } = this.props;
    publishDraftMutation({
      variables: {
        id
      },
      refetchQueries: [
        {
          query: GET_DRAFTS
        }
      ]
    })
      .then(({ data: { publish: { id } } }) => {
        console.log("Published draft with id:", id);
        this.props.onPublish();
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  onEdit = id => {
    this.props.onEdit(id);
  };

  render() {
    const { data: { loading, error, drafts } } = this.props;

    const { onPublish, onDelete, onEdit } = this;

    if (loading) return <Loading />;
    else if (error) return <Error error={error} />;
    else if (!drafts[0])
      return <DataMissing message="You have not yet created any drafts." />;
    else {
      return (
        <Transition.Group as={List} duration={250} animation="scale">
          {// Reverse the drafts to show the most recent one
          drafts
            .concat()
            .reverse()
            .map(post => (
              <List.Item key={post.id}>
                <Draft
                  {...post}
                  isPublished={false}
                  onPublish={onPublish}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </List.Item>
            ))}
        </Transition.Group>
      );
    }
  }
}

DraftsList.propTypes = {
  deletePostMutation: PropTypes.func.isRequired,
  publishDraftMutation: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

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

// Publish a draft
export const POST_PUBLISH_DRAFT = gql`
  mutation($id: ID!) {
    publish(id: $id) {
      id
    }
  }
`;

// Export the component with data and mutation
export default compose(
  graphql(GET_DRAFTS, {
    options: {
      // Ignore is used here because if the user logs out while he is looking at his drafts he'll
      // get an error, and since a component handels them this is unneccessary.
      errorPolicy: "ignore"
    }
  }),
  graphql(POST_PUBLISH_DRAFT, { name: "publishDraftMutation" }),
  graphql(POST_DELETE_POST, { name: "deletePostMutation" })
)(DraftsList);
