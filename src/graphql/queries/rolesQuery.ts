import { gql } from 'graphql-request';
import { roleString } from "../strings/roleString";

export const getRoleQuery = gql`query($paging: CursorPaging, $filter: RoleFilter, $sorting: [RoleSort!]) {
    roles(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${roleString}
            }
            cursor
          }
    }
  }`;
