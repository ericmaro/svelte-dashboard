import gql from "graphql-tag";
import { permissionString } from "../strings/permissionString";

export const getPermissionQuery = gql`query{
    permissions{
      ${permissionString}
    }
  }`;
