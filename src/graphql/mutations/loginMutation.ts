import { gql } from 'graphql-request';
import { userString } from "../strings/userString";

export const loginMutation = gql`mutation($identifier: String!, $password: String!) {
    login(identifier: $identifier, password: $password) {
        tokenType
        expiresIn
        accessToken
        refreshToken
        user{${userString}}
    }
  }`;
