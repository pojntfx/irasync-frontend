import React, { Component } from "react";

// Components
import { DraftsList } from "../components/drafts/DraftsList";
import MainNavigation from "../components/global/MainNavigation";
import MainWrapper from "../components/global/MainWrapper";
import Section from "../components/global/Section";
import EditDraft from "../components/drafts/EditDraft";

export default class Drafts extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { onSignout } = this;

    return (
      <div>
        <MainNavigation {...this.props} onSignout={onSignout} />
        <MainWrapper>
          <Section id="create-a-draft" title="Create a draft">
            <EditDraft />
          </Section>
          <Section id="your-drafts" title="Your drafts">
            <DraftsList />
          </Section>
        </MainWrapper>
      </div>
    );
  }
}
