import gql from "graphql-tag";
import { audioString } from "../strings/audioString";

export const createOneAudioMutation = gql`mutation($input: CreateOneAudioInput!) {
    createOneAudio(input: $input) {
        ${audioString}
    }
  }`;

export const updateOneAudioMutation = gql`mutation($input: UpdateOneAudioInput!) {
    updateOneAudio(input: $input) {
        ${audioString}
    }
  }`;
