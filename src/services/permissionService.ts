import { apolloClient } from "@/graphql/api/client";
import { getPermissionQuery } from "@/graphql/queries/permissionsQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { PermissionFilter } from "@/views/pages/permissions/types/permissionFilter";
import { PermissionConnection } from "@/views/pages/permissions/types/permissionConnection";
import { CreateOnePermissionInput } from "@/views/pages/permissions/types/createOnePermissionInput";
import { Permission } from "@/views/pages/permissions/types/permission";
import {
  createOnePermissionMutation,
  updateOnePermissionMutation,
} from "@/graphql/mutations/permissionMutation";
import { UpdateOnePermissionInput } from "@/views/pages/permissions/types/updateOnePermissionInput";

export const createOnePermissionService = async (
  data: CreateOnePermissionInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOnePermissionMutation,
      variables: {
        input: data,
      },
    });
    const res: Permission = results.data.createOnePermission;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOnePermissionService = async (
  data: UpdateOnePermissionInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOnePermissionMutation,
      variables: {
        input: data,
      },
    });
    const res: Permission = results.data.updateOnePermission;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getPermissionsService = async (params?: {
  paging?: CursorPaging;
  filter?: PermissionFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getPermissionQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: PermissionConnection = results.data.permissions;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
