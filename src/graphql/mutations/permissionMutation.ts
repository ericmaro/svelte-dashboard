import { gql } from 'graphql-request';
import { permissionString } from "../strings/permissionString";

export const createOnePermissionMutation = gql`mutation($input: CreateOnePermissionInput!) {
    createOnePermission(input: $input) {
        ${permissionString}
    }
  }`;

export const updateOnePermissionMutation = gql`mutation($input: UpdateOnePermissionInput!) {
    updateOnePermission(input: $input) {
        ${permissionString}
    }
  }`;
