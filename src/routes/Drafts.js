import React, { Component } from "react";

// Components
import { DraftsList } from "../components/drafts/DraftsList";
import MainNavigation from "../components/global/MainNavigation";
import MainWrapper from "../components/global/MainWrapper";

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
          <DraftsList />
        </MainWrapper>
      </div>
    );
  }
}
