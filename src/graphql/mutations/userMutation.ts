import { gql } from 'graphql-request';
import { userString } from "../strings/userString";

export const createOneUserMutation = gql`mutation($input: CreateOneUserInput!) {
    createOneUser(input: $input) {
        ${userString}
    }
  }`;

export const updateOneUserMutation = gql`mutation($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
        ${userString}
    }
  }`;

export const updateUserPassword = gql`
  mutation($input: UserUpdatePasswordInput!, $id: Int!) {
    updateUserPassword(input: $input, id: $id)
  }
`;
