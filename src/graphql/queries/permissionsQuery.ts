import { gql } from 'graphql-request';
import { permissionString } from "../strings/permissionString";

export const getPermissionQuery = gql`query{
    permissions{
      ${permissionString}
    }
  }`;
