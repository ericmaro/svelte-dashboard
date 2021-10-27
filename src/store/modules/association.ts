import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { AssociationFilter } from "@/views/pages/associations/types/associationFilter";
import { Association } from "@/views/pages/associations/types/association";
import { AssociationConnection } from "@/views/pages/associations/types/associationConnection";
import {
  createOneAssociationService,
  getAssociationsService,
  updateOneAssociationService,
  sendSmsToAssociationService,
} from "@/services/associationService";
import { CreateOneAssociationInput } from "../../views/pages/associations/types/createOneAssociationInput";
import { UpdateOneAssociationInput } from "@/views/pages/associations/types/updateOneAssociationInput";
import { SendSmsAssociationDto } from "@/views/pages/associations/types/SendSmsAssociationDto";

interface Error {
  message: string;
}

export interface AssociationState {
  loading: boolean;
  errors: Error[];
  associationConnection: AssociationConnection | null;
}

export const associations = {
  namespaced: true,
  state(): AssociationState {
    return {
      loading: false,
      errors: [],
      associationConnection: null,
    };
  },
  mutations: {
    setLoading(state: AssociationState, value: any) {
      state.loading = value;
    },
    setError(state: AssociationState, errors: any) {
      state.errors = errors;
    },
    setAddToAssociations(state: AssociationState, value: Association) {
      if (state.associationConnection != null) {
        state.associationConnection.edges.unshift({
          node: value,
          cursor:
            state.associationConnection.edges[
              state.associationConnection.edges.length - 1
            ].cursor,
        });
      }
    },
    setUpdateToAssociations(state: AssociationState, value: Association) {
      if (state.associationConnection != null) {
        state.associationConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setAssociationConnection(
      state: AssociationState,
      value: AssociationConnection
    ) {
      state.associationConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneAssociationAction(
      context: any,
      data: CreateOneAssociationInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const association = await createOneAssociationService(data);
        context.commit("setAddToAssociations", association);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async updateOneAssociationAction(
      context: any,
      data: UpdateOneAssociationInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const association = await updateOneAssociationService(data);
        context.commit("setUpdateToAssociations", association);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async sendSmsToAssociation(
      context: any,
      input: SendSmsAssociationDto
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        await sendSmsToAssociationService(input);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async getAssociationAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: AssociationFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get associations");
      context.commit("setLoading", true);
      try {
        const data = await getAssociationsService(params);
        console.log(data);
        if (data) context.commit("setAssociationConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
