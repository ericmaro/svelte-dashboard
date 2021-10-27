import { graphQLClient } from "@/graphql/client";
import { createOneUserMutation, updateOneUserMutation, updateUserPassword } from "@/graphql/mutations/userMutation";
import { getUserQuery } from "@/graphql/queries/usersQuery";
import type { CursorPaging } from "@/shared/types/paging";
import type { Sort } from "@/shared/types/sort";
import type { CreateOneUserInput } from "@/stores/user/types/createOneUserInput";
import type { UpdateOneUserInput } from "@/stores/user/types/updateOneUserInput";
import type { User } from "@/stores/user/types/user";
import type { UserConnection } from "@/stores/user/types/userConnection";
import type { UserFilter } from "@/stores/user/types/userFilter";
import type { UserUpdatePasswordInput } from "@/stores/user/types/userUpdatePasswordInput";

export const createOneUserService = async (data: CreateOneUserInput):Promise<User> => {
  try {
    const results = await graphQLClient.request( createOneUserMutation,
       {
        input: data,
      },
    );
    const res: User = results.createOneUser;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneUserService = async (data: UpdateOneUserInput):Promise<User> => {
  try {
    const results = await graphQLClient.request(
     updateOneUserMutation,
       {
        input: data,
      },
    );
    const res: User = results.updateOneUser;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateUserPasswordService = async (
  input: UserUpdatePasswordInput,
  id: number
):Promise<boolean> => {
  try {
    const results = await graphQLClient.request( updateUserPassword,
       {
        input: input,
        id: id,
      },
    );
    const res: boolean = results.updateUserPassword;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getUsersService = async (params?: {
  paging?: CursorPaging;
  filter?: UserFilter;
  sorting?: Sort[];
}):Promise<UserConnection> => {
  try {
    const results = await graphQLClient.request(getUserQuery,
       {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    );
    const res: UserConnection = results.users;
    return res;
  } catch (e) {
    
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
