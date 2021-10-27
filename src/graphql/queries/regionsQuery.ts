import gql from "graphql-tag";
import { regionString } from "../strings/regionString";

export const getRegionQuery = gql`query{
    regions{
      ${regionString}
    }
  }`;
