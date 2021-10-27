import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { CustomerFilter } from "@/views/pages/customers/types/customerFilter";
import { Customer } from "@/views/pages/customers/types/customer";
import { CustomerConnection } from "@/views/pages/customers/types/customerConnection";
import {
  createOneCustomerService,
  getCustomersService,
  updateOneCustomerService,
  createOneCustomerDetailsService,
  setDetailsOnCustomerService,
  updateOneCustomerDetailsService,
  sendSmsToCustomersService,
} from "@/services/customerService";
import { CreateOneCustomerInput } from "../../views/pages/customers/types/createOneCustomerInput";
import { UpdateOneCustomerInput } from "@/views/pages/customers/types/updateOneCustomerInput";
import { CreateOneCustomerDetailsInput } from "@/views/pages/customers/types/createOneCustomerDetailsInput";
import { UpdateOneCustomerDetailsInput } from "@/views/pages/customers/types/updateCustomerDetailsInput";
import { CustomerDetails } from "@/views/pages/customers/types/customerDetails";
import { SendSmsCustomerDto } from "@/views/pages/customers/types/SendSmsCustomerDto";

interface Error {
  message: string;
}

export interface CustomerState {
  loading: boolean;
  errors: Error[];
  customerConnection: CustomerConnection | null;
}

export const customers = {
  namespaced: true,
  state(): CustomerState {
    return {
      loading: false,
      errors: [],
      customerConnection: null,
    };
  },
  mutations: {
    setLoading(state: CustomerState, value: any) {
      state.loading = value;
    },
    setError(state: CustomerState, errors: any) {
      state.errors = errors;
    },
    setAddToCustomers(state: CustomerState, value: Customer) {
      if (state.customerConnection != null) {
        state.customerConnection.edges.unshift({
          node: value,
          cursor:
            state.customerConnection.edges[
              state.customerConnection.edges.length - 1
            ].cursor,
        });
      }
    },
    setUpdateToCustomers(state: CustomerState, value: Customer) {
      if (state.customerConnection != null) {
        state.customerConnection.edges.map((edge) => {
          if (edge.node.id === value.id) edge.node = value;
        });
      }
    },
    setCustomersDetails(state: CustomerState, value: CustomerDetails) {
      if (state.customerConnection != null) {
        state.customerConnection.edges.map((edge) => {
          if (edge.node.details?.id === value.id) edge.node.details = value;
        });
      }
    },
    setCustomerConnection(state: CustomerState, value: CustomerConnection) {
      state.customerConnection = value;
    },
  },
  actions: {
    async resetErrorsStateAction(context: any): Promise<void> {
      context.commit("setError", []);
    },

    async createOneCustomerAction(
      context: any,
      data: CreateOneCustomerInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const customer = await createOneCustomerService(data);
        context.commit("setAddToCustomers", customer);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async createOneCustomerDetailsAction(
      context: any,
      data: { customerId: number; details: CreateOneCustomerDetailsInput }
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const details = await createOneCustomerDetailsService(data.details);
        if (details) {
          const customer = await setDetailsOnCustomerService({
            id: data.customerId,
            relationId: details.id,
          });
          context.commit("setUpdateToCustomers", customer);
        }

        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async updateOneCustomerDetailsAction(
      context: any,
      details: UpdateOneCustomerDetailsInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const d = await updateOneCustomerDetailsService(details);
        if (d) {
          context.commit("setCustomersDetails", d);
        }

        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async sendSmsToCustomers(
      context: any,
      input: SendSmsCustomerDto
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        await sendSmsToCustomersService(input);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },

    async updateOneCustomerAction(
      context: any,
      data: UpdateOneCustomerInput
    ): Promise<void> {
      context.commit("setLoading", true);
      try {
        const customer = await updateOneCustomerService(data);
        context.commit("setUpdateToCustomers", customer);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
    async getCustomerAction(
      context: any,
      params?: {
        paging?: CursorPaging | undefined;
        filter?: CustomerFilter | undefined;
        sorting?: Sort[] | undefined;
      }
    ) {
      console.log("get customers");
      context.commit("setLoading", true);
      try {
        const data = await getCustomersService(params);
        console.log(data);
        if (data) context.commit("setCustomerConnection", data);
        context.commit("setLoading", false);
      } catch (errors: any) {
        context.commit("setError", errors);
        context.commit("setLoading", false);
      }
    },
  },
};
