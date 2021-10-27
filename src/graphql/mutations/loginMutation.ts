import gql from "graphql-tag";
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
