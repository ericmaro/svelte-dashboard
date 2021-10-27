import gql from "graphql-tag";
import { associationString } from "../strings/associationString";

export const createOneAssociationMutation = gql`mutation($input: CreateOneAssociationInput!) {
    createOneAssociation(input: $input) {
        ${associationString}
    }
  }`;

export const updateOneAssociationMutation = gql`mutation($input: UpdateOneAssociationInput!) {
    updateOneAssociation(input: $input) {
        ${associationString}
    }
  }`;

export const sendSmsToAssociationMutation = gql`
  mutation($input: SendSmsAssociationDto!) {
    sendSmsToAssociation(input: $input) {
      message
    }
  }
`;
