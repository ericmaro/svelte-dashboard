import { graphQLClient } from "@/graphql/client";
import { createOneRoleMutation, updateOneRoleMutation, addPermissionsToRoleMutation, removePermissionsToRoleMutation, deleteOneRoleMutation } from "@/graphql/mutations/roleMutation";
import { getRoleQuery } from "@/graphql/queries/rolesQuery";
import type { DeleteOneInput } from "@/shared/types/DeleteOneInput";
import type { CursorPaging } from "@/shared/types/paging";
import type { RelationsInput } from "@/shared/types/relationsInput";
import type { Sort } from "@/shared/types/sort";
import type { CreateOneRoleInput } from "@/stores/role/types/createOneRoleInput";
import type { Role } from "@/stores/role/types/role";
import type { RoleConnection } from "@/stores/role/types/roleConnection";
import type { RoleFilter } from "@/stores/role/types/roleFilter";
import type { UpdateOneRoleInput } from "@/stores/role/types/updateOneRoleInput";

export const createOneRoleService = async (data: CreateOneRoleInput):Promise<Role> => {
  try {
    const results = await graphQLClient.request( createOneRoleMutation,
      {
        input: data,
      },
    );
    const res: Role = results.createOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneRoleService = async (data: UpdateOneRoleInput):Promise<Role> => {
  try {
    const results = await graphQLClient.request( updateOneRoleMutation,
      {
        input: data,
      },
    );
    const res: Role = results.updateOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const addPermissionsToRoleService = async (data: RelationsInput):Promise<Role> => {
  try {
    const results = await graphQLClient.request(addPermissionsToRoleMutation,
     {
        input: data,
      },
    );
    const res: Role = results.updateOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const removePermissionsToRoleService = async (data: RelationsInput):Promise<Role> => {
  try {
    const results = await graphQLClient.request( removePermissionsToRoleMutation,
       {
        input: data,
      },
    );
    const res: Role = results.updateOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getRolesService = async (params?: {
  paging?: CursorPaging;
  filter?: RoleFilter;
  sorting?: Sort[];
}):Promise<RoleConnection> => {
  try {
    const results = await graphQLClient.request(getRoleQuery,
      {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    );
    const res: RoleConnection = results.roles;

    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
export const deleteOneRoleService = async (
  data: DeleteOneInput
): Promise<Role> => {
  try {
    const results = await graphQLClient.request( deleteOneRoleMutation,
      {
        input: data,
      },
    );
    const res: Role = results.deleteOneRole;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
