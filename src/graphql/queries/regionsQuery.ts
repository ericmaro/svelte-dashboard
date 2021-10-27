import { gql } from 'graphql-request';
import { regionString } from "../strings/regionString";

export const getRegionQuery = gql`query{
    regions{
      ${regionString}
    }
  }`;
