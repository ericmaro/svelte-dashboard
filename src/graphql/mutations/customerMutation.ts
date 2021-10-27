import gql from "graphql-tag";
import { customerDetailsString } from "../strings/customerDetailsString";
import { customerString } from "../strings/customerString";

export const createOneCustomerMutation = gql`mutation($input: CreateOneCustomerInput!) {
    createOneCustomer(input: $input) {
        ${customerString}
    }
  }`;

export const createOneCustomerDetailsMutation = gql`mutation($input: CreateOneCustomerDetailsInput!) {
  createOneCustomerDetails(input: $input) {
      ${customerDetailsString}
  }
}`;

export const updateOneCustomerDetailsMutation = gql`mutation($input: UpdateOneCustomerDetailsInput!) {
  updateOneCustomerDetails(input: $input) {
      ${customerDetailsString}
  }
}`;

export const setDetailsOnCustomerMutation = gql`mutation($input: RelationInput!) {
  setDetailsOnCustomer(input: $input) {
      ${customerString}
  }
}`;

export const updateOneCustomerMutation = gql`mutation($input: UpdateOneCustomerInput!) {
    updateOneCustomer(input: $input) {
        ${customerString}
    }
  }`;

export const sendSmsToCustomersMutation = gql`
  mutation($input: SendSmsCustomerDto!) {
    sendSmsToCustomers(input: $input) {
      message
    }
  }
`;
