import React, { Component } from "react";

// Components
import { Feed } from "../components/home/Feed";
import MainNavigation from "../components/global/MainNavigation";
import MainWrapper from "../components/global/MainWrapper";

export default class Home extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <MainWrapper>
          <Feed />
        </MainWrapper>
      </div>
    );
  }
}
