import {
  loginService,
  loginCheckService,
  getLoginDataService,
  logoutService,
} from "@/services/authService";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { LoginRequestType } from "@/views/pages/users/types/loginRequestType";
import { UserFilter } from "@/views/pages/users/types/userFilter";
import { User } from "@/views/pages/users/types/user";
import { LoginResponseType } from "@/views/pages/users/types/loginResponseType";
import { UserConnection } from "@/views/pages/users/types/userConnection";
import {
  createOneUserService,
  getUsersService,
  updateOneUserService,
  updateUserPasswordService,
} from "@/services/userService";
import { CreateOneUserInput } from "../../views/pages/users/types/createOneUserInput";
import { UpdateOneUserInput } from "@/views/pages/users/types/updateOneUserInput";
import { UserUpdatePasswordInput } from "@/views/pages/users/types/userUpdatePasswordInput";

interface Error {
  message: string;
}

export interface UserState {
  loggedInUser: User | null;
  loading: boolean;
  passwordChanged: boolean;
  errors: Error[];
  userConnection: UserConnection | null;
  activeViewProfile: User | null;
}

export const users = {
  namespaced: true,
  state(): UserState {
    return {
      loggedInUser: null,
      loading: false,
      passwordChanged: false,
      errors: [],
      userConnection: null,
      activeViewProfile: null,
    };
  },
  mutations: {
    setLoggedInUser(state: UserState, value: User): void {
      state.loggedInUser = value;
    },
    setLoading(state: UserState, value: any) {
      state.loading = value;
    },
    setError(state: UserState, errors: any) {
      state.errors = errors;
    },

    setPasswordChanged(state: UserState, success: boolean) {
      state.passwordChanged = success;
    },

    setActiveViewProfile(state: UserState, value: User) {
      state.activeViewProfile = value;
    },

    setAddToUsers(state: UserState, value: User) {
      if (state.userConnection != null) {
        state.userConnection.edges.unshift({
          node: value,
          cursor:
            state.userConnection.edges[state.userConnection.edges.length - 1]
              .cursor,
        });
      }
    },
    setUpdateToUsers(state: UserState, value: User) {
      if (state.userConnection != null) {
        state.userConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setUserConnection(state: UserState, value: UserConnection) {
      state.userConnection = value;
    },
  },
  actions: {
    async loginAction(context: any, data: LoginRequestType): Promise<void> {
      context.commit("setLoading", true);
      try {
        await loginService(data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async resetPasswordChangedStateAction(
      context: any,
      data: boolean
    ): Promise<void> {
      context.commit("setPasswordChanged", data);
    },

    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneUserAction(
      context: any,
      data: CreateOneUserInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const user = await createOneUserService(data);
        context.commit("setAddToUsers", user);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async updateUserPasswordAction(
      context: any,
      data: { input: UserUpdatePasswordInput; id: number }
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const success = await updateUserPasswordService(data.input, data.id);
        context.commit("setPasswordChanged", success);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async updateOneUserAction(
      context: any,
      data: UpdateOneUserInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const user = await updateOneUserService(data);
        context.commit("setUpdateToUsers", user);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getUserAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: UserFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      context.commit("setLoading", true);
      try {
        const data = await getUsersService(params);
        console.log(data);
        if (data) context.commit("setUserConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async loginCheckAction() {
      await loginCheckService();
    },
    async logoutAction() {
      await logoutService();
    },

    async getLoggedInUserAction(context: any) {
      const data: LoginResponseType | null = await getLoginDataService();
      context.commit("setLoggedInUser", data?.user);
    },
  },
};
