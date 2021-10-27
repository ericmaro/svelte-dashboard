import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { PermissionFilter } from "@/views/pages/permissions/types/permissionFilter";
import { Permission } from "@/views/pages/permissions/types/permission";
import {
  createOnePermissionService,
  getPermissionsService,
  updateOnePermissionService,
} from "@/services/permissionService";
import { CreateOnePermissionInput } from "../../views/pages/permissions/types/createOnePermissionInput";
import { UpdateOnePermissionInput } from "@/views/pages/permissions/types/updateOnePermissionInput";

interface Error {
  message: string;
}

export interface PermissionState {
  loading: boolean;
  errors: Error[];
  permissions: Permission[] | null;
}

export const permissions = {
  namespaced: true,
  state(): PermissionState {
    return {
      loading: false,
      errors: [],
      permissions: null,
    };
  },
  mutations: {
    setLoading(state: PermissionState, value: any) {
      state.loading = value;
    },
    setError(state: PermissionState, errors: any) {
      state.errors = errors;
    },
    setAddToPermissions(state: PermissionState, value: Permission) {
      if (state.permissions != null) {
        state.permissions.unshift(value);
      }
    },
    setUpdateToPermissions(state: PermissionState, value: Permission) {
      if (state.permissions != null) {
        state.permissions.map((permission) => {
          if (permission.id === value.id) permission = value;
        });
      }
    },
    setPermissionConnection(state: PermissionState, value: Permission[]) {
      state.permissions = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOnePermissionAction(
      context: any,
      data: CreateOnePermissionInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const permission = await createOnePermissionService(data);
        context.commit("setAddToPermissions", permission);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async updateOnePermissionAction(
      context: any,
      data: UpdateOnePermissionInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const permission = await updateOnePermissionService(data);
        context.commit("setUpdateToPermissions", permission);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getPermissionAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: PermissionFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get permissions");
      context.commit("setLoading", true);
      try {
        const data = await getPermissionsService(params);
        console.log(data);
        if (data) context.commit("setPermissionConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
