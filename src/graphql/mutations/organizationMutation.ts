import gql from "graphql-tag";
import { organizationString } from "../strings/organizationString";

export const createOneOrganizationMutation = gql`mutation($input: CreateOneOrganizationInput!) {
    createOneOrganization(input: $input) {
        ${organizationString}
    }
  }`;

export const updateOneOrganizationMutation = gql`mutation($input: UpdateOneOrganizationInput!) {
    updateOneOrganization(input: $input) {
        ${organizationString}
    }
  }`;
