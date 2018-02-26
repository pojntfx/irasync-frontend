import React, { Component } from "react";

// Router
import { Link } from "react-router-dom";

// Components
import { Feed } from "../components/home/Feed";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/signup">Sign up / Sign in</Link>
        <Feed />
      </div>
    );
  }
}
