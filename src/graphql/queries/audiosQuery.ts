import gql from "graphql-tag";
import { audioString } from "../strings/audioString";

export const getAudioQuery = gql`query($paging: CursorPaging, $filter: AudioFilter, $sorting: [AudioSort!]) {
    audio(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
                ${audioString}
            }
            cursor
          }
    }
  }`;
