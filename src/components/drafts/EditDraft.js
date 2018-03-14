import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// Reusable queries and mutations
import { GET_DRAFTS, POST_PUBLISH_DRAFT, POST_DELETE_POST } from "./DraftsList";
import { GET_YOUR_POSTS } from "./PublishedDraftsList";

// PropTypes
import PropTypes from "prop-types";

// Components
import DeleteDialog from "./DeleteDialog";
import DiscardDialog from "./DiscardDialog";
import PublishDialog from "./PublishDialog";
import SaveDialog from "./SaveDialog";
import DraftEditor from "./editor/DraftEditor";
import Loading from "../global/Loading";
import Error from "../global/Error";

class EditDraft extends Component {
  state = {
    title: "",
    text: "",
    formIsloading: false,
    deleteDialogIsActive: false,
    discardDialogIsActive: false,
    publishDialogIsActive: false,
    saveDialogIsActive: false,
    submitIsPublish: false
  };

  // Handle input
  setTitle = title => {
    this.setState({ title });
  };

  setText = text => {
    this.setState({ text });
  };

  // Deletion handling
  onDeleteDialog = () => {
    this.setState({
      deleteDialogIsActive: true
    });
  };

  onDeleteDialogCancel = () => {
    this.setState({
      deleteDialogIsActive: false
    });
  };

  onDelete = () => {
    const { deleteDraftMutation } = this.props;
    const { id } = this.props;
    deleteDraftMutation({
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
    this.resetForm();
    this.closeEditor();
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
    // Switch to the createDraft editor
    this.closeEditor();
  };

  // Saving handling
  onSaveDialog = () => {
    this.setState({
      saveDialogIsActive: true,
      submitIsPublish: false
    });
  };

  onSaveDialogCancel = () => {
    this.setState({
      saveDialogIsActive: false
    });
  };

  onSave = () => {
    console.log("Saving draft");
    const { updateDraftMutation } = this.props;
    const { title, text } = this.state;
    const { id } = this.props;
    this.setState({
      loading: true
    });
    updateDraftMutation({
      variables: {
        id,
        title,
        text
      },
      refetchQueries: [
        {
          query: GET_DRAFTS
        }
      ]
    })
      .then(({ data: { updatePost: { id } } }) => {
        console.log("Updated draft with id:", id);
      })
      .catch(error => {
        // If there is an error, log it
        console.log(error);
      });
    this.resetForm();
    this.closeEditor();
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
    const { updateDraftMutation, publishDraftMutation } = this.props;
    const { title, text } = this.state;
    const { id } = this.props;
    this.setState({
      loading: true
    });
    updateDraftMutation({
      variables: {
        id,
        title,
        text
      }
    })
      .then(({ data: { updatePost: { id } } }) => {
        publishDraftMutation({
          variables: {
            id
          },
          refetchQueries: [
            {
              query: GET_YOUR_POSTS
            },
            {
              query: GET_DRAFTS
            }
          ]
        })
          .then(({ data: { publish: { id } } }) => {
            console.log("Published draft with id:", id);
            this.resetForm();
            this.closeEditor();
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
      : this.setState({ saveDialogIsActive: true });
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
      deleteDialogIsActive: false,
      discardDialogIsActive: false,
      publishDialogIsActive: false,
      saveDialogIsActive: false
    });
  };

  // After edits have been saved, go back to the createDraft editor
  closeEditor = () => {
    this.props.onDone();
  };

  // Capture the props that apollo client has passed
  componentWillReceiveProps(newProps) {
    if (!newProps.data.loading) {
      // Enables second edit after post has been edited before
      // Refetching updates overwrites the local snapshot which would be outdated
      const { data: { post, refetch } } = newProps;
      refetch();
      // Spread the post's data (title, text) into the state
      this.setState({
        ...post
      });
    }
  }

  render() {
    const {
      setTitle,
      setText,
      onDeleteDialog,
      onDeleteDialogCancel,
      onDelete,
      onDiscardDialog,
      onDiscardDialogCancel,
      onDiscard,
      onSaveDialog,
      onSaveDialogCancel,
      onSave,
      onPublishDialog,
      onPublishDialogCancel,
      onPublish,
      onSubmit
    } = this;

    const {
      deleteDialogIsActive,
      discardDialogIsActive,
      publishDialogIsActive,
      saveDialogIsActive,
      formIsloading,
      title,
      text
    } = this.state;

    const { data: { loading, error } } = this.props;

    if (loading) return <Loading />;
    else if (error) return <Error error={error} />;
    else {
      return (
        <div>
          {/* Dialogs */}
          <DeleteDialog
            active={deleteDialogIsActive}
            onCancel={onDeleteDialogCancel}
            onDelete={onDelete}
          />
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
          <SaveDialog
            active={saveDialogIsActive}
            onCancel={onSaveDialogCancel}
            onSave={onSave}
          />
          {/* Editor */}
          <DraftEditor
            onTitleEdit={setTitle}
            onTextEdit={setText}
            title={title}
            text={text}
            onDelete={onDeleteDialog}
            onDiscard={onDiscardDialog}
            onPublish={onPublishDialog}
            onSave={onSaveDialog}
            onSubmit={onSubmit}
            loading={formIsloading}
            isNew={false}
          />
        </div>
      );
    }
  }
}

EditDraft.propTypes = {
  deleteDraftMutation: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  updateDraftMutation: PropTypes.func.isRequired,
  publishDraftMutation: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const GET_POST = gql`
  query($id: ID!) {
    post(id: $id) {
      title
      text
    }
  }
`;

const POST_UPDATE_POST = gql`
  mutation($id: ID!, $title: String!, $text: String!) {
    updatePost(id: $id, title: $title, text: $text) {
      id
      title
      text
    }
  }
`;

// Export the component with the mutations
export default compose(
  graphql(GET_POST, {
    options: ({ id }) => ({ variables: { id } })
  }),
  graphql(POST_DELETE_POST, { name: "deleteDraftMutation" }),
  graphql(POST_UPDATE_POST, { name: "updateDraftMutation" }),
  graphql(POST_PUBLISH_DRAFT, { name: "publishDraftMutation" })
)(EditDraft);
