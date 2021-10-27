import gql from "graphql-tag";
import { customerString } from "../strings/customerString";

export const getCustomerQuery = gql`query($paging: CursorPaging, $filter: CustomerFilter, $sorting: [CustomerSort!]) {
    customers(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${customerString}
            }
            cursor
          }
    }
  }`;
