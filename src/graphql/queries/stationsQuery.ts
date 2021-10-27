import gql from "graphql-tag";
import { stationString } from "../strings/stationString";

export const getStationQuery = gql`query($paging: CursorPaging, $filter: StationFilter, $sorting: [StationSort!]) {
    stations(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${stationString}
            }
            cursor
          }
    }
  }`;
