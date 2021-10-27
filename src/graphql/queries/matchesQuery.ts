import { gql } from 'graphql-request';
import { matchString } from "../strings/matchString";

export const getMatchQuery = gql`query($paging: CursorPaging, $filter: MatchFilter, $sorting: [MatchSort!]) {
    matches(paging: $paging, filter: $filter, sorting: $sorting) {
        totalCount
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
