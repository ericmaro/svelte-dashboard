import { gql } from 'graphql-request';
import { roleString } from "../strings/roleString";

export const createOneRoleMutation = gql`mutation($input: CreateOneRoleInput!) {
    createOneRole(input: $input) {
        ${roleString}
    }
  }`;

export const updateOneRoleMutation = gql`mutation($input: UpdateOneRoleInput!) {
    updateOneRole(input: $input) {
        ${roleString}
    }
  }`;

export const addPermissionsToRoleMutation = gql`mutation($input: RelationsInput!) {
  addPermissionsToRole(input: $input) {
      ${roleString}
  }
}`;

export const removePermissionsToRoleMutation = gql`mutation($input: RelationsInput!) {
  removePermissionsFromRole(input: $input) {
      ${roleString}
  }
}`;

export const deleteOneRoleMutation = gql`mutation($input: DeleteOneInput!) {
  deleteOneRole(input: $input) {
      ${roleString}
  }
}`;
