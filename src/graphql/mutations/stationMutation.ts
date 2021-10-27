import { gql } from 'graphql-request';
import { stationString } from "../strings/stationString";

export const createOneStationMutation = gql`mutation($input: CreateOneStationInput!) {
    createOneStation(input: $input) {
        ${stationString}
    }
  }`;

export const updateOneStationMutation = gql`mutation($input: UpdateOneStationInput!) {
    updateOneStation(input: $input) {
        ${stationString}
    }
  }`;
