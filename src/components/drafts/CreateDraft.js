import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Reusable queries
import { GET_DRAFTS, POST_PUBLISH_DRAFT } from "./DraftsList";
import { GET_YOUR_POSTS } from "./PublishedDraftsList";

// PropTypes
import PropTypes from "prop-types";

// Components
import DiscardDialog from "./DiscardDialog";
import PublishDialog from "./PublishDialog";
import DraftEditor from "./editor/DraftEditor";

class CreateDraft extends Component {
  state = {
    title: "",
    text: "",
    loading: false,
    discardDialogIsActive: false,
    publishDialogIsActive: false,
    submitIsPublish: false
  };

  // Handle input
  setTitle = title => {
    this.setState({ title });
  };

  setText = text => {
    this.setState({ text });
  };

  // Discard handling
  onDiscardDialog = () => {
    this.setState({ discardDialogIsActive: true });
  };

  onDiscardDialogCancel = () => {
    this.setState({ discardDialogIsActive: false });
  };

  onDiscard = () => {
    this.resetForm();
  };

  // Saving handling
  onSaveDialog = () => {
    this.setState({
      submitIsPublish: false
    });
  };

  onSave = () => {
    console.log("Saving draft");
    const { postDraftMutation } = this.props;
    const { title, text } = this.state;
    this.setState({
      loading: true
    });
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
    this.resetForm();
  };

  // Publish handling
  onPublishDialog = () => {
    this.setState({
      submitIsPublish: true
    });
  };

  onPublishDialogCancel = () => {
    this.setState({ publishDialogIsActive: false });
  };

  onPublish = () => {
    console.log("Publishing draft");
    const { postDraftMutation, publishDraftMutation } = this.props;
    const { title, text } = this.state;
    postDraftMutation({
      variables: {
        title,
        text
      }
    })
      .then(({ data: { createDraft: { id } } }) => {
        publishDraftMutation({
          variables: {
            id
          },
          refetchQueries: [
            {
              query: GET_YOUR_POSTS
            }
          ]
        })
          .then(({ data: { publish: { id } } }) => {
            console.log("Published draft with id:", id);
            this.resetForm();
            this.props.onPublish();
          })
          .catch(error => {
            // If there is an error, log it
            console.log(error);
          });
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
  };

  // Submit handling
  onSubmit = () => {
    // Check whether the form has been saved or published and do the appropriate thing
    // Save does not need a dialog
    this.state.submitIsPublish
      ? this.setState({ publishDialogIsActive: true })
      : this.onSave();
  };

  // Utils
  clearForm = () => {
    this.setState({
      title: "",
      text: "",
      loading: false
    });
  };

  resetForm = () => {
    this.clearForm();
    this.setState({
      discardDialogIsActive: false,
      publishDialogIsActive: false
    });
  };

  render() {
    const {
      setTitle,
      setText,
      onDiscardDialog,
      onDiscardDialogCancel,
      onDiscard,
      onSaveDialog,
      onPublishDialog,
      onPublishDialogCancel,
      onPublish,
      onSubmit
    } = this;

    const {
      discardDialogIsActive,
      publishDialogIsActive,
      title,
      text,
      loading
    } = this.state;

    return (
      <div>
        {/* Dialogs */}
        <DiscardDialog
          active={discardDialogIsActive}
          onCancel={onDiscardDialogCancel}
          onDiscard={onDiscard}
        />
        <PublishDialog
          active={publishDialogIsActive}
          onCancel={onPublishDialogCancel}
          onPublish={onPublish}
        />
        {/* Editor */}
        <DraftEditor
          onTitleEdit={setTitle}
          onTextEdit={setText}
          title={title}
          text={text}
          onDiscard={onDiscardDialog}
          onPublish={onPublishDialog}
          onSave={onSaveDialog}
          onSubmit={onSubmit}
          loading={loading}
          isNew={true}
        />
      </div>
    );
  }
}

CreateDraft.propTypes = {
  postDraftMutation: PropTypes.func.isRequired,
  publishDraftMutation: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired
};

// Post new draft to the server
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
  graphql(POST_PUBLISH_DRAFT, { name: "publishDraftMutation" })
)(CreateDraft);
