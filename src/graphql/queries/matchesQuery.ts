import gql from "graphql-tag";
import { matchString } from "../strings/matchString";

export const getMatchQuery = gql`query($paging: CursorPaging, $filter: MatchFilter, $sorting: [MatchSort!]) {
    matches(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${matchString}
            }
            cursor
          }
    }
  }`;
