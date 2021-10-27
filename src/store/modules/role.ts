import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { RoleFilter } from "@/views/pages/roles/types/roleFilter";
import { Role } from "@/views/pages/roles/types/role";
import { RoleConnection } from "@/views/pages/roles/types/roleConnection";
import {
  addPermissionsToRoleService,
  createOneRoleService,
  getRolesService,
  removePermissionsToRoleService,
  updateOneRoleService,
} from "@/services/roleService";
import { CreateOneRoleInput } from "../../views/pages/roles/types/createOneRoleInput";
import { UpdateOneRoleInput } from "@/views/pages/roles/types/updateOneRoleInput";
import { RelationsInput } from "@/shared/types/relationsInput";

interface Error {
  message: string;
}

export interface RoleState {
  loading: boolean;
  errors: Error[];
  roleConnection: RoleConnection | null;
}

export const roles = {
  namespaced: true,
  state(): RoleState {
    return {
      loading: false,
      errors: [],
      roleConnection: null,
    };
  },
  mutations: {
    setLoading(state: RoleState, value: any) {
      state.loading = value;
    },
    setError(state: RoleState, errors: any) {
      state.errors = errors;
    },
    setAddToRoles(state: RoleState, value: Role) {
      if (state.roleConnection != null) {
        state.roleConnection.edges.unshift({
          node: value,
          cursor:
            state.roleConnection.edges[state.roleConnection.edges.length - 1]
              .cursor,
        });
      }
    },
    setUpdateToRoles(state: RoleState, value: Role) {
      if (state.roleConnection != null) {
        state.roleConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setRoleConnection(state: RoleState, value: RoleConnection) {
      state.roleConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneRoleAction(
      context: any,
      data: CreateOneRoleInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const role = await createOneRoleService(data);
        context.commit("setAddToRoles", role);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async addPermissionsToRoleAction(
      context: any,
      data: RelationsInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const role = await addPermissionsToRoleService(data);
        context.commit("setUpdateToRoles", role);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async removePermissionsToRoleAction(
      context: any,
      data: RelationsInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const role = await removePermissionsToRoleService(data);
        context.commit("setUpdateToRoles", role);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async updateOneRoleAction(
      context: any,
      data: UpdateOneRoleInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const role = await updateOneRoleService(data);
        context.commit("setUpdateToRoles", role);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getRoleAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: RoleFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get roles");
      context.commit("setLoading", true);
      try {
        const data = await getRolesService(params);
        console.log(data);
        if (data) context.commit("setRoleConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
