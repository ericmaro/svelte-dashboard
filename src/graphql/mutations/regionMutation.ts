import { gql } from 'graphql-request';
import { regionString } from "../strings/regionString";

export const createOneRegionMutation = gql`mutation($input: CreateOneRegionInput!) {
    createOneRegion(input: $input) {
        ${regionString}
    }
  }`;

export const updateOneRegionMutation = gql`mutation($input: UpdateOneRegionInput!) {
    updateOneRegion(input: $input) {
        ${regionString}
    }
  }`;
