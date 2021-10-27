import { apolloClient } from "@/graphql/api/client";
import { getUserQuery } from "@/graphql/queries/usersQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { UserFilter } from "@/views/pages/users/types/userFilter";
import { UserConnection } from "@/views/pages/users/types/userConnection";
import { CreateOneUserInput } from "@/views/pages/users/types/createOneUserInput";
import { User } from "@/views/pages/users/types/user";
import {
  createOneUserMutation,
  updateOneUserMutation,
  updateUserPassword,
} from "@/graphql/mutations/userMutation";
import { UpdateOneUserInput } from "@/views/pages/users/types/updateOneUserInput";
import { UserUpdatePasswordInput } from "@/views/pages/users/types/userUpdatePasswordInput";

export const createOneUserService = async (data: CreateOneUserInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneUserMutation,
      variables: {
        input: data,
      },
    });
    const res: User = results.data.createOneUser;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneUserService = async (data: UpdateOneUserInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneUserMutation,
      variables: {
        input: data,
      },
    });
    const res: User = results.data.updateOneUser;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateUserPasswordService = async (
  input: UserUpdatePasswordInput,
  id: number
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateUserPassword,
      variables: {
        input: input,
        id: id,
      },
    });
    const res: boolean = results.data.updateUserPassword;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getUsersService = async (params?: {
  paging?: CursorPaging;
  filter?: UserFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getUserQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: UserConnection = results.data.users;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
