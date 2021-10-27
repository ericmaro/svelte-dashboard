import gql from "graphql-tag";
import { associationString } from "../strings/associationString";

export const getAssociationQuery = gql`query($paging: CursorPaging, $filter: AssociationFilter, $sorting: [AssociationSort!]) {
    associations(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${associationString}
            }
            cursor
          }
    }
  }`;
