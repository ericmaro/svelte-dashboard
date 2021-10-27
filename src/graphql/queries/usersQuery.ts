import { gql } from 'graphql-request';
import { userString } from "../strings/userString";

export const getUserQuery = gql`query($paging: CursorPaging, $filter: UserFilter, $sorting: [UserSort!]) {
    users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${userString}
            }
            cursor
          }
    }
  }`;
