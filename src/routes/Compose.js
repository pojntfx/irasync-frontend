import React, { Component } from "react";

// Semantic
import { Tab } from "semantic-ui-react";

// PropTypes
import PropTypes from "prop-types";

// Components
import DraftsList from "../components/drafts/DraftsList";
import PublishedDraftsList from "../components/drafts/PublishedDraftsList";
import MainNavigation from "../components/global/MainNavigation";
import MainWrapper from "../components/global/MainWrapper";
import Section from "../components/global/Section";
import EditDraft from "../components/drafts/EditDraft";
import CreateDraft from "../components/drafts/CreateDraft";

export default class Compose extends Component {
  state = {
    id: null,
    activeIndex: 0
  };

  onEdit = id => {
    console.log(`Editing draft ${id}!`);
    this.setState({
      id
    });
  };

  // If the user has discarded or saved his edits, the createDraft component should be
  // rendered instead
  onDone = () => {
    this.setState({
      id: null
    });
  };

  // Since activeIndex is being used, this handler needs to handle tab switching
  handleTabChange = (event, { activeIndex }) => {
    this.setState({ activeIndex });
  };

  // Switch to the "your posts" pane after the user has published a draft
  onPublishedDraftsPublish = () => {
    this.setState({
      activeIndex: 1
    });
  };

  render() {
    const { onSignout } = this.props;

    const { onEdit, handleTabChange, onDone, onPublishedDraftsPublish } = this;

    const { id, activeIndex } = this.state;

    // Panes in the "your content" section
    // The onEdit event gets fired here
    const panes = [
      {
        menuItem: "Your drafts",
        render: () => (
          <DraftsList onEdit={onEdit} onPublish={onPublishedDraftsPublish} />
        )
      },
      {
        menuItem: "Your posts",
        render: () => <PublishedDraftsList />
      }
    ];

    return (
      <div>
        <MainNavigation {...this.props} onSignout={onSignout} />
        <MainWrapper>
          <Section id="compose-a-draft" title="Create or edit a draft">
            {id ? (
              <EditDraft
                id={id}
                onDone={onDone}
                onPublish={onPublishedDraftsPublish}
              />
            ) : (
              <CreateDraft onPublish={onPublishedDraftsPublish} />
            )}
          </Section>
          <Section id="your-content" title="Continue where you left of">
            <Tab
              menu={{ pointing: true }}
              panes={panes}
              activeIndex={activeIndex}
              onTabChange={handleTabChange}
            />
          </Section>
        </MainWrapper>
      </div>
    );
  }
}

Compose.propTypes = {
  onSignout: PropTypes.func.isRequired
};
