import React, { Component } from "react";

// Apollo
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

// PropTypes
import PropTypes from "prop-types";

// Components
import Post from "./Post";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
class Feed extends Component {
  render() {
    const { data: { loading, error, feed } } = this.props;

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    else if (!feed[0])
      return (
        <DataMissing message="There don't seem to be any posts in this Irasync yet." />
      );
    else
      return (
        <div>
          {feed
            .concat()
            .reverse()
            .map(post => <Post key={post.id} {...post} />)}
        </div>
      );
  }
}

Feed.propTypes = {
  data: PropTypes.object.isRequired
};

// Get all public posts from backend
const GET_FEED = gql`
  query {
    feed {
      id
      title
      createdAt
      author {
        name
      }
      text
    }
  }
`;

// Export the component with data
export default compose(graphql(GET_FEED))(Feed);
