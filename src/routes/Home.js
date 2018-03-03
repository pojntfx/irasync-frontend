import React, { Component } from "react";

// Components
import { Feed } from "../components/home/Feed";
import MainNavigation from "../components/global/MainNavigation";
import MainWrapper from "../components/global/MainWrapper";

export default class Home extends Component {
  onSignout = () => {
    this.props.onSignout();
  };

  render() {
    const { onSignout } = this;

    return (
      <div>
        <MainNavigation {...this.props} onSignout={onSignout} />
        <MainWrapper>
          <Feed />
        </MainWrapper>
      </div>
    );
  }
}
