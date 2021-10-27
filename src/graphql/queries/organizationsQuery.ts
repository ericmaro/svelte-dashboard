import gql from "graphql-tag";
import { organizationString } from "../strings/organizationString";

export const getOrganizationQuery = gql`query($paging: CursorPaging, $filter: OrganizationFilter, $sorting: [OrganizationSort!]) {
    organizations(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${organizationString}
            }
            cursor
          }
    }
  }`;
