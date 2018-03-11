import React, { Component } from "react";

// Semantic
import { Tab } from "semantic-ui-react";

// Components
import DraftsList from "../components/drafts/DraftsList";
import PublishedDraftsList from "../components/drafts/PublishedDraftsList";
import MainNavigation from "../components/global/MainNavigation";
import MainWrapper from "../components/global/MainWrapper";
import Section from "../components/global/Section";
import EditDraft from "../components/drafts/EditDraft";

export default class Compose extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { onSignout } = this;

    // Panes in the "your content" section
    const panes = [
      {
        menuItem: "Your drafts",
        render: () => <DraftsList />
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
          <Section id="create-a-draft" title="Create a draft">
            <EditDraft />
          </Section>
          <Section id="your-content" title="Continue where you left of">
            <Tab menu={{ pointing: true }} panes={panes} />
          </Section>
        </MainWrapper>
      </div>
    );
  }
}
