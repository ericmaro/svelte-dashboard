import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { OrganizationFilter } from "@/views/pages/organizations/types/organizationFilter";
import { Organization } from "@/views/pages/organizations/types/organization";
import { OrganizationConnection } from "@/views/pages/organizations/types/organizationConnection";
import {
  createOneOrganizationService,
  getOrganizationsService,
  updateOneOrganizationService,
} from "@/services/organizationService";
import { CreateOneOrganizationInput } from "../../views/pages/organizations/types/createOneOrganizationInput";
import { UpdateOneOrganizationInput } from "@/views/pages/organizations/types/updateOneOrganizationInput";

interface Error {
  message: string;
}

export interface OrganizationState {
  loading: boolean;
  errors: Error[];
  organizationConnection: OrganizationConnection | null;
}

export const organizations = {
  namespaced: true,
  state(): OrganizationState {
    return {
      loading: false,
      errors: [],
      organizationConnection: null,
    };
  },
  mutations: {
    setLoading(state: OrganizationState, value: any) {
      state.loading = value;
    },
    setError(state: OrganizationState, errors: any) {
      state.errors = errors;
    },
    setAddToOrganizations(state: OrganizationState, value: Organization) {
      if (state.organizationConnection != null) {
        state.organizationConnection.edges.unshift({
          node: value,
          cursor:
            state.organizationConnection.edges[
              state.organizationConnection.edges.length - 1
            ].cursor,
        });
      }
    },
    setUpdateToOrganizations(state: OrganizationState, value: Organization) {
      if (state.organizationConnection != null) {
        state.organizationConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setOrganizationConnection(
      state: OrganizationState,
      value: OrganizationConnection
    ) {
      state.organizationConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneOrganizationAction(
      context: any,
      data: CreateOneOrganizationInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const organization = await createOneOrganizationService(data);
        context.commit("setAddToOrganizations", organization);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async updateOneOrganizationAction(
      context: any,
      data: UpdateOneOrganizationInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const organization = await updateOneOrganizationService(data);
        context.commit("setUpdateToOrganizations", organization);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getOrganizationAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: OrganizationFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get organizations");
      context.commit("setLoading", true);
      try {
        const data = await getOrganizationsService(params);
        console.log(data);
        if (data) context.commit("setOrganizationConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
