import { apolloClient } from "@/graphql/api/client";
import { getRoleQuery } from "@/graphql/queries/rolesQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { RoleFilter } from "@/views/pages/roles/types/roleFilter";
import { RoleConnection } from "@/views/pages/roles/types/roleConnection";
import { CreateOneRoleInput } from "@/views/pages/roles/types/createOneRoleInput";
import { Role } from "@/views/pages/roles/types/role";
import {
  addPermissionsToRoleMutation,
  createOneRoleMutation,
  removePermissionsToRoleMutation,
  updateOneRoleMutation,
} from "@/graphql/mutations/roleMutation";
import { UpdateOneRoleInput } from "@/views/pages/roles/types/updateOneRoleInput";
import { RelationsInput } from "@/shared/types/relationsInput";

export const createOneRoleService = async (data: CreateOneRoleInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneRoleMutation,
      variables: {
        input: data,
      },
    });
    const res: Role = results.data.createOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneRoleService = async (data: UpdateOneRoleInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneRoleMutation,
      variables: {
        input: data,
      },
    });
    const res: Role = results.data.updateOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const addPermissionsToRoleService = async (data: RelationsInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: addPermissionsToRoleMutation,
      variables: {
        input: data,
      },
    });
    const res: Role = results.data.updateOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const removePermissionsToRoleService = async (data: RelationsInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: removePermissionsToRoleMutation,
      variables: {
        input: data,
      },
    });
    const res: Role = results.data.updateOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getRolesService = async (params?: {
  paging?: CursorPaging;
  filter?: RoleFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getRoleQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: RoleConnection = results.data.roles;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
