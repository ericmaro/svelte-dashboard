import { apolloClient } from "@/graphql/api/client";
import { getCustomerQuery } from "@/graphql/queries/customersQuery";
import { CursorPaging } from "@/shared/types/paging";
import { Sort } from "@/shared/types/sort";
import { CustomerFilter } from "@/views/pages/customers/types/customerFilter";
import { CustomerConnection } from "@/views/pages/customers/types/customerConnection";
import { CreateOneCustomerInput } from "@/views/pages/customers/types/createOneCustomerInput";
import { Customer } from "@/views/pages/customers/types/customer";
import {
  createOneCustomerMutation,
  updateOneCustomerMutation,
  createOneCustomerDetailsMutation,
  setDetailsOnCustomerMutation,
  updateOneCustomerDetailsMutation,
  sendSmsToCustomersMutation,
} from "@/graphql/mutations/customerMutation";
import { UpdateOneCustomerInput } from "@/views/pages/customers/types/updateOneCustomerInput";
import { CreateOneCustomerDetailsInput } from "@/views/pages/customers/types/createOneCustomerDetailsInput";
import { CustomerDetails } from "@/views/pages/customers/types/customerDetails";
import { RelationInput } from "@/shared/types/relationInput";
import { UpdateOneCustomerDetailsInput } from "@/views/pages/customers/types/updateCustomerDetailsInput";
import { SendSmsCustomerDto } from "@/views/pages/customers/types/SendSmsCustomerDto";

export const createOneCustomerService = async (
  data: CreateOneCustomerInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneCustomerMutation,
      variables: {
        input: data,
      },
    });
    const res: Customer = results.data.createOneCustomer;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const createOneCustomerDetailsService = async (
  data: CreateOneCustomerDetailsInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: createOneCustomerDetailsMutation,
      variables: {
        input: data,
      },
    });
    const res: CustomerDetails = results.data.createOneCustomerDetails;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneCustomerDetailsService = async (
  data: UpdateOneCustomerDetailsInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneCustomerDetailsMutation,
      variables: {
        input: data,
      },
    });
    const res: CustomerDetails = results.data.updateOneCustomerDetails;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const setDetailsOnCustomerService = async (data: RelationInput) => {
  try {
    const results = await apolloClient.mutate({
      mutation: setDetailsOnCustomerMutation,
      variables: {
        input: data,
      },
    });
    const res: Customer = results.data.createOneCustomer;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const sendSmsToCustomersService = async (input: SendSmsCustomerDto) => {
  try {
    await apolloClient.mutate({
      mutation: sendSmsToCustomersMutation,
      variables: {
        input: input,
      },
    });
    return true;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const updateOneCustomerService = async (
  data: UpdateOneCustomerInput
) => {
  try {
    const results = await apolloClient.mutate({
      mutation: updateOneCustomerMutation,
      variables: {
        input: data,
      },
    });
    const res: Customer = results.data.updateOneCustomer;
    return res;
  } catch (e) {
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};

export const getCustomersService = async (params?: {
  paging?: CursorPaging;
  filter?: CustomerFilter;
  sorting?: Sort[];
}) => {
  try {
    const results = await apolloClient.query({
      query: getCustomerQuery,
      variables: {
        paging: params && params.paging ? params.paging : undefined,
        filter: params && params.filter ? params.filter : undefined,
        sorting: params && params.sorting ? params.sorting : undefined,
      },
    });
    console.log(results);
    const res: CustomerConnection = results.data.customers;
    console.log(res);
    return res;
  } catch (e) {
    console.log(e);
    if (e.graphQLErrors) throw e.graphQLErrors;
  }
};
