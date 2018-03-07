import React from "react";

// Apollo
import gql from "graphql-tag";
import { graphql } from "react-apollo";

// Components
import Draft from "./Draft";
import Loading from "../global/Loading";
import Error from "../global/Error";
import DataMissing from "../global/DataMissing";

// Template
function DraftsTemplate({ data: { loading, error, drafts } }) {
  if (loading) return <Loading />;
  else if (error) return <Error />;
  else if (!drafts[0])
    return <DataMissing message="You have not yet created any drafts." />;
  else
    return <div>{drafts.map(post => <Draft key={post.id} {...post} />)}</div>;
}

// Get all public posts from backend
const GET_DRAFTS = gql`
  query {
    drafts {
      id
      title
      text
      createdAt
    }
  }
`;

// Export the component with data
export const DraftsList = graphql(GET_DRAFTS)(DraftsTemplate);
