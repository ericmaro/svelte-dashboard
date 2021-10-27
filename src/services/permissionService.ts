import { graphQLClient } from "@/graphql/client";
import { createOnePermissionMutation, updateOnePermissionMutation } from "@/graphql/mutations/permissionMutation";
import { getPermissionQuery } from "@/graphql/queries/permissionsQuery";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import type { CreateOnePermissionInput } from "@/stores/permission/types/createOnePermissionInput";
import type { Permission } from "@/stores/permission/types/permission";
import type { PermissionFilter } from "@/stores/permission/types/permissionFilter";
import type { UpdateOnePermissionInput } from "@/stores/permission/types/updateOnePermissionInput";

export const createOnePermissionService = async (
  data: CreateOnePermissionInput
):Promise<Permission> => {
  try {
    const results = await graphQLClient.request(createOnePermissionMutation,
       {
        input: data,
      },
    );
    const res: Permission = results.createOnePermission;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOnePermissionService = async (
  data: UpdateOnePermissionInput
):Promise<Permission> => {
  try {
    const results = await graphQLClient.request(updateOnePermissionMutation,
       {
        input: data,
      },
    );
    const res: Permission = results.updateOnePermission;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getPermissionsService = async (params?: {
  paging?: CursorPaging;
  filter?: PermissionFilter;
  sorting?: Sort[];
}):Promise<Permission[]> => {
  try {
    const results = await graphQLClient.request(getPermissionQuery,
       {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    );
    const res: Permission[] = results.permissions;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
